/**
 * Trans — lightweight i18n utility
 * Auto-detects browser language (navigator.language).
 * Supported: en, zh, ja, ru, pt-BR, hi
 * Usage: Trans.t('key') or Trans.t('key', { brand: 'cosave' })
 */

type LangMap = Record<string, string>;
type Translations = Record<string, LangMap>;

const LANGS = ['en', 'zh', 'ja', 'ru', 'pt', 'hi'] as const;
type Lang = typeof LANGS[number];

// ─── Translation table (one line per key) ────────────────────────────────────
const TABLE: Translations = {
    // HUD
    'score':          { en: 'Score: {{v}}',      zh: '得分: {{v}}',      ja: 'スコア: {{v}}',    ru: 'Счёт: {{v}}',      pt: 'Pontos: {{v}}',    hi: 'स्कोर: {{v}}' },
    'game_over':      { en: 'GAME OVER',          zh: '游戏结束',          ja: 'ゲームオーバー',    ru: 'ИГРА ОКОНЧЕНА',    pt: 'FIM DE JOGO',      hi: 'गेम ओवर' },
    'score_final':    { en: 'Score: {{v}}',       zh: '得分: {{v}}',      ja: 'スコア: {{v}}',    ru: 'Счёт: {{v}}',      pt: 'Pontos: {{v}}',    hi: 'स्कोर: {{v}}' },
    'btn_restart':    { en: 'RESTART',            zh: '重新开始',          ja: 'リスタート',        ru: 'ПЕРЕЗАПУСК',       pt: 'REINICIAR',        hi: 'फिर से शुरू' },
    // Weapon names
    'weapon_laser':   { en: 'LASER',              zh: '激光',              ja: 'レーザー',          ru: 'ЛАЗЕР',            pt: 'LASER',            hi: 'लेज़र' },
    'weapon_spread':  { en: 'SPREAD',             zh: '散射',              ja: 'スプレッド',        ru: 'РАЗБРОС',          pt: 'DISPERSÃO',        hi: 'स्प्रेड' },
    'weapon_heavy':   { en: 'HEAVY',              zh: '重炮',              ja: 'ヘビー',            ru: 'ТЯЖЁЛЫЙ',          pt: 'PESADO',           hi: 'हेवी' },
    // Buttons
    'btn_fire':       { en: 'FIRE',               zh: '射击',              ja: '射撃',              ru: 'ОГОНЬ',            pt: 'ATIRAR',           hi: 'फायर' },
    'btn_joystick':   { en: '🕹 Joystick',        zh: '🕹 摇杆',           ja: '🕹 スティック',     ru: '🕹 Джойстик',      pt: '🕹 Joystick',      hi: '🕹 जॉयस्टिक' },
    'btn_follow':     { en: '👆 Follow',          zh: '👆 跟随',           ja: '👆 フォロー',       ru: '👆 Следовать',     pt: '👆 Seguir',        hi: '👆 फॉलो' },
};
// ─────────────────────────────────────────────────────────────────────────────

function detectLang(): Lang {
    const raw = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
    const lower = raw.toLowerCase();
    if (lower.startsWith('zh')) return 'zh';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('ru')) return 'ru';
    if (lower.startsWith('pt')) return 'pt';
    if (lower.startsWith('hi')) return 'hi';
    return 'en';
}

export class Trans {
    static lang: Lang = detectLang();

    /** Translate key, optionally substituting {{placeholder}} values from map. */
    static t(key: string, map?: Record<string, string>): string {
        const row = TABLE[key];
        let str = (row ? (row[Trans.lang] ?? row['en'] ?? key) : key);
        if (map) {
            for (const k in map) {
                str = str.split(`{{${k}}}`).join(map[k]);
            }
        }
        return str;
    }

    /** Override detected language at runtime. */
    static setLang(lang: Lang) { Trans.lang = lang; }
}
