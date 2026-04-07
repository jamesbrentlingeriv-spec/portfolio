/**
 * SoundManager — Cocos Creator 3.x
 *
 * playSoundPreset(name, volume?)  — 播放云端预设音效（CDN）
 * playSoundLocal(name, volume?)   — 播放本地音效（assets/resources/sounds/<name>.mp3）
 *
 * @preset names:
 *   message_alert, ui_exit, ui_back, ui_reject, ui_error,
 *   machine_gun_burst, machine_gun_single, assault_rifle_burst, sniper_rifle_shot,
 *   pistol_shot, shotgun_blast, submachine_gun, heavy_machine_gun, revolver_shot,
 *   silenced_pistol, laser_pistol, plasma_rifle, energy_blast, railgun_shot,
 *   particle_beam, tesla_coil, sonic_blaster, freeze_ray, flamethrower, acid_spray,
 *   grenade_explosion, rocket_explosion, mine_explosion, barrel_explosion, car_bomb,
 *   building_collapse, nuclear_explosion, cluster_bomb, mortar_shell, artillery_strike,
 *   male_soldier_death, male_soldier_death_2, female_soldier_death,
 *   robot_transformation, robot_boot_up, robot_shutdown, robot_malfunction,
 *   robot_target_lock, robot_jetpack, robot_laser_sight, robot_electrical,
 *   robot_hydraulics, robot_servo_motors,
 *   battle_cry_male, battle_cry_female, war_horn, charge_bugle, berserker_rage,
 *   commando_yell, samurai_cry, viking_charge, zombie_horde, alien_screech,
 *   paratrooper_drop, helicopter_insertion, tank_deployment, aircraft_overflight,
 *   submarine_surfacing, reinforcements_arrive, teleport_arrival, portal_opening,
 *   dropship_landing, mech_deployment,
 *   bullet_impact_flesh, bullet_impact_metal, bullet_impact_wood, bullet_impact_stone,
 *   melee_sword_hit, melee_axe_hit, melee_hammer_hit, energy_shield_hit,
 *   force_field_hit, armor_penetration,
 *   tank_cannon, tank_engine, helicopter_rotors, jet_fighter, motorcycle,
 *   motorcycle_engine, truck_engine, hovercraft_lift, spaceship_thrusters,
 *   mech_footsteps, drone_propellers,
 *   alarm_siren, warning_klaxon, nuclear_alarm, incoming_artillery, gas_alarm,
 *   radiation_detector, motion_detector, perimeter_breach, enemy_spotted, objective_complete,
 *   magic_spell_cast, telekinesis_lift, lightning_strike, fireball_launch, ice_crystal,
 *   poison_cloud, healing_aura, shield_spell, summon_creature, portal_magic,
 *   button_press, menu_select, error_beep, success_chime, level_up, achievement_unlock,
 *   weapon_switch, reload_click, ammo_pickup, health_pickup,
 *   distant_gunfire, artillery_barrage, helicopter_gunship, jet_flyby, explosion_echo,
 *   battlefield_chaos, radio_static, command_orders, squad_comms, enemy_radio,
 *   robot_voice_male, robot_voice_female, ai_processing, cyber_attack, hacking_sequence,
 *   data_transfer, scanner_sweep, target_acquired, system_online, system_offline,
 *   big_laser_shot
 */

import { AudioClip, AudioSource, Node, resources } from 'cc';

interface ActiveSound {
    source: AudioSource;
    id: number;
}

const PRESET_BASE = 'https://gz100.cdn.bcebos.com/mydir/sound/';

export class SoundManager {
    private static _node: Node | null = null;
    private static _sources: AudioSource[] = [];
    private static _globalVolume = 1.0;
    private static _muted = false;
    private static _soundOpen = true;
    private static _idCounter = 0;
    private static _active: Map<number, ActiveSound> = new Map();
    private static _lastPlay: Map<string, number> = new Map();
    private static _debounceMs = 80;
    private static _blacklist: Set<string> = new Set();
    private static _maxConcurrent = 4;
    private static _concurrentCount: Map<string, number> = new Map();

    private static _getNode(): Node {
        if (!SoundManager._node || !SoundManager._node.isValid) {
            SoundManager._node = new Node('SoundManager');
        }
        return SoundManager._node;
    }

    private static _acquireSource(): AudioSource {
        for (const src of SoundManager._sources) {
            if (!src.playing) return src;
        }
        const src = SoundManager._getNode().addComponent(AudioSource);
        SoundManager._sources.push(src);
        return src;
    }

    private static _guard(name: string, debounceMs = SoundManager._debounceMs): boolean {
        if (!SoundManager._soundOpen || SoundManager._muted) return false;
        if (SoundManager._blacklist.has(name)) return false;
        const now = Date.now();
        if (now - (SoundManager._lastPlay.get(name) ?? 0) < debounceMs) return false;
        SoundManager._lastPlay.set(name, now);
        if ((SoundManager._concurrentCount.get(name) ?? 0) >= SoundManager._maxConcurrent) return false;
        return true;
    }

    private static _playClip(clip: AudioClip, name: string, volume: number, options: SoundOptions): number {
        const id = ++SoundManager._idCounter;
        const src = SoundManager._acquireSource();
        src.clip = clip;
        src.volume = Math.max(0, Math.min(1, volume * SoundManager._globalVolume));
        src.loop = options.loop ?? false;
        src.play();
        SoundManager._active.set(id, { source: src, id });
        SoundManager._concurrentCount.set(name, (SoundManager._concurrentCount.get(name) ?? 0) + 1);
        setTimeout(() => {
            SoundManager._active.delete(id);
            SoundManager._concurrentCount.set(name, Math.max(0, (SoundManager._concurrentCount.get(name) ?? 1) - 1));
        }, clip.getDuration() * 1000 + 100);
        return id;
    }

    /**
     * 播放云端预设音效（CDN）
     * @param name      预设音效名，见文件顶部注释
     * @param volume    音量 0.0 ~ 1.0，默认 1.0
     * @param loop      是否循环，默认 false
     * @param debounceMs 同名音效最小间隔 ms，默认 80；传 0 可关闭防抖（适合连射音效）
     */
    static playSoundPreset(name: string, volume = 1.0, loop = false, debounceMs = SoundManager._debounceMs): number | null {
        if (!SoundManager._guard(name, debounceMs)) return null;
        const id = ++SoundManager._idCounter;
        const url = PRESET_BASE + name + '.mp3';

        // 检测微信小游戏环境
        if (typeof wx !== 'undefined' && wx.createInnerAudioContext) {
            const audio = wx.createInnerAudioContext();
            audio.src = url;
            audio.volume = Math.max(0, Math.min(1, volume * SoundManager._globalVolume));
            audio.loop = loop;
            audio.play();
            audio.onError((err: any) => console.warn(`[SoundManager] preset play failed: ${name}`, err));
            SoundManager._concurrentCount.set(name, (SoundManager._concurrentCount.get(name) ?? 0) + 1);
            audio.onEnded(() => {
                SoundManager._concurrentCount.set(name, Math.max(0, (SoundManager._concurrentCount.get(name) ?? 1) - 1));
                audio.destroy();
            });
        } else {
            // Web 环境
            const audio = new Audio(url);
            audio.volume = Math.max(0, Math.min(1, volume * SoundManager._globalVolume));
            audio.loop = loop;
            const playPromise = audio.play();
            if (playPromise && playPromise.catch) {
                playPromise.catch(e => console.warn(`[SoundManager] preset play failed: ${name}`, e));
            }
            SoundManager._concurrentCount.set(name, (SoundManager._concurrentCount.get(name) ?? 0) + 1);
            audio.addEventListener('ended', () => {
                SoundManager._concurrentCount.set(name, Math.max(0, (SoundManager._concurrentCount.get(name) ?? 1) - 1));
            });
        }
        return id;
    }

    /**
     * 播放本地音效（assets/resources/sounds/<name>.mp3）
     * @param name      文件名（不含扩展名）
     * @param volume    音量 0.0 ~ 1.0，默认 1.0
     * @param loop      是否循环，默认 false
     * @param debounceMs 同名音效最小间隔 ms，默认 80；传 0 可关闭防抖
     */
    static playSoundLocal(name: string, volume = 1.0, loop = false, debounceMs = SoundManager._debounceMs): number | null {
        if (!SoundManager._guard(name, debounceMs)) return null;
        const id = ++SoundManager._idCounter;
        resources.load(`sounds/${name}`, AudioClip, (err, clip) => {
            if (err || !clip) { console.warn(`[SoundManager] local load failed: ${name}`, err); return; }
            SoundManager._playClip(clip, name, volume, { loop });
        });
        return id;
    }

    /** 停止指定 ID 的音效 */
    static stopSound(id: number): void {
        const entry = SoundManager._active.get(id);
        if (entry) { entry.source.stop(); SoundManager._active.delete(id); }
    }

    /** 停止所有音效 */
    static stopAllSounds(): void {
        for (const entry of SoundManager._active.values()) entry.source.stop();
        SoundManager._active.clear();
        SoundManager._concurrentCount.clear();
    }

    static setGlobalVolume(v: number): void { SoundManager._globalVolume = Math.max(0, Math.min(1, v)); }
    static mute(on: boolean): void { SoundManager._muted = on; if (on) SoundManager.stopAllSounds(); }
    static setSoundOpen(open: boolean): void { SoundManager._soundOpen = open; if (!open) SoundManager.stopAllSounds(); }
    static getSoundIsOpen(): boolean { return SoundManager._soundOpen; }
    static blacklist(name: string): void { SoundManager._blacklist.add(name); }
    static unblacklist(name: string): void { SoundManager._blacklist.delete(name); }
}
