// WeChat Mini Game API types
declare const wx: {
    createInnerAudioContext(): WXInnerAudioContext;
};

interface WXInnerAudioContext {
    src: string;
    volume: number;
    loop: boolean;
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
    onError(callback: (err: any) => void): void;
    onEnded(callback: () => void): void;
}
