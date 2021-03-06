module app {

    /**
     * One of the 12 notes per octive
     */
    export enum Note {
        c = 'C',
        dflat = 'Db',
        d = 'D',
        eflat = 'Eb',
        e = 'E',
        f = 'F',
        gflat = 'Gb',
        g = 'G',
        aflat = 'Ab',
        a = 'A',
        bflat = 'Bb',
        b = 'B'
    }

    /**
     * An absolute reference to a specific key on a piano.
     */
    export enum Key {
        a0 = 'A0',
        bflat0 = 'Bb0',
        b0 = 'B0',

        c1 = 'C1',
        dflat1 = 'Db1',
        d1 = 'D1',
        eflat1 = 'Eb1',
        e1 = 'E1',
        f1 = 'F1',
        gflat1 = 'Gb1',
        g1 = 'G1',
        aflat1 = 'Ab1',
        a1 = 'A1',
        bflat1 = 'Bb1',
        b1 = 'B1',

        c2 = 'C2',
        dflat2 = 'Db2',
        d2 = 'D2',
        eflat2 = 'Eb2',
        e2 = 'E2',
        f2 = 'F2',
        gflat2 = 'Gb2',
        g2 = 'G2',
        aflat2 = 'Ab2',
        a2 = 'A2',
        bflat2 = 'Bb2',
        b2 = 'B2',

        c3 = 'C3',
        dflat3 = 'Db3',
        d3 = 'D3',
        eflat3 = 'Eb3',
        e3 = 'E3',
        f3 = 'F3',
        gflat3 = 'Gb3',
        g3 = 'G3',
        aflat3 = 'Ab3',
        a3 = 'A3',
        bflat3 = 'Bb3',
        b3 = 'B3',

        c4 = 'C4',
        dflat4 = 'Db4',
        d4 = 'D4',
        eflat4 = 'Eb4',
        e4 = 'E4',
        f4 = 'F4',
        gflat4 = 'Gb4',
        g4 = 'G4',
        aflat4 = 'Ab4',
        a4 = 'A4',
        bflat4 = 'Bb4',
        b4 = 'B4',

        c5 = 'C5',
        dflat5 = 'Db5',
        d5 = 'D5',
        eflat5 = 'Eb5',
        e5 = 'E5',
        f5 = 'F5',
        gflat5 = 'Gb5',
        g5 = 'G5',
        aflat5 = 'Ab5',
        a5 = 'A5',
        bflat5 = 'Bb5',
        b5 = 'B5',

        c6 = 'C6',
        dflat6 = 'Db6',
        d6 = 'D6',
        eflat6 = 'Eb6',
        e6 = 'E6',
        f6 = 'F6',
        gflat6 = 'Gb6',
        g6 = 'G6',
        aflat6 = 'Ab6',
        a6 = 'A6',
        bflat6 = 'Bb6',
        b6 = 'B6',

        c7 = 'C7',
        dflat7 = 'Db7',
        d7 = 'D7',
        eflat7 = 'Eb7',
        e7 = 'E7',
        f7 = 'F7',
        gflat7 = 'Gb7',
        g7 = 'G7',
        aflat7 = 'Ab7',
        a7 = 'A7',
        bflat7 = 'Bb7',
        b7 = 'B7',
    }

    export const AllKeys = [
        Key.a0,
        Key.bflat0,
        Key.b0,

        Key.c1,
        Key.dflat1,
        Key.d1,
        Key.eflat1,
        Key.e1,
        Key.f1,
        Key.gflat1,
        Key.g1,
        Key.aflat1,
        Key.a1,
        Key.bflat1,
        Key.b1,

        Key.c2,
        Key.dflat2,
        Key.d2,
        Key.eflat2,
        Key.e2,
        Key.f2,
        Key.gflat2,
        Key.g2,
        Key.aflat2,
        Key.a2,
        Key.bflat2,
        Key.b2,

        Key.c3,
        Key.dflat3,
        Key.d3,
        Key.eflat3,
        Key.e3,
        Key.f3,
        Key.gflat3,
        Key.g3,
        Key.aflat3,
        Key.a3,
        Key.bflat3,
        Key.b3,

        Key.c4,
        Key.dflat4,
        Key.d4,
        Key.eflat4,
        Key.e4,
        Key.f4,
        Key.gflat4,
        Key.g4,
        Key.aflat4,
        Key.a4,
        Key.bflat4,
        Key.b4,

        Key.c5,
        Key.dflat5,
        Key.d5,
        Key.eflat5,
        Key.e5,
        Key.f5,
        Key.gflat5,
        Key.g5,
        Key.aflat5,
        Key.a5,
        Key.bflat5,
        Key.b5,


        Key.c6,
        Key.dflat6,
        Key.d6,
        Key.eflat6,
        Key.e6,
        Key.f6,
        Key.gflat6,
        Key.g6,
        Key.aflat6,
        Key.a6,
        Key.bflat6,
        Key.b6,

        Key.c7,
        Key.dflat7,
        Key.d7,
        Key.eflat7,
        Key.e7,
        Key.f7,
        Key.gflat7,
        Key.g7,
        Key.aflat7,
        Key.a7,
        Key.bflat7,
        Key.b7,
    ];

    export const WhiteNotes = [
        Note.a,
        Note.b,
        Note.c,
        Note.d,
        Note.e,
        Note.f,
        Note.g
    ]

    export const BlackNotes = [
        Note.bflat,
        Note.dflat,
        Note.eflat,
        Note.gflat,
        Note.aflat
    ];

    export const WhiteKeys = AllKeys.filter((key) => {
        return key.indexOf('b') === -1;
    });

    export const BlackKeys = AllKeys.filter((key) => {
        return key.indexOf('b') > -1;
    })
    export enum Finger {
        L1 = 'L1',
        L2 = 'L2',
        L3 = 'L3',
        L4 = 'L4',
        L5 = 'L5',
        R1 = 'R1',
        R2 = 'R2',
        R3 = 'R3',
        R4 = 'R4',
        R5 = 'R5'
    }
    export const Fingers = [
        Finger.L1,
        Finger.L2,
        Finger.L3,
        Finger.L4,
        Finger.L5,
        Finger.R1,
        Finger.R2,
        Finger.R3,
        Finger.R4,
        Finger.R5
    ];
    export interface KeySelection {
        key: Key;
        finger: Finger
    }

    export const NoteEnharmonics = <{ [key: string]: string }>{
        'C': 'B#',
        'B#': 'C',

        'C#': 'Db',
        'Db': 'C#',
        
        'D': 'D',
        
        'D#': 'Eb',
        'Eb': 'D#',
        
        'E': 'Fb',
        'Fb': 'E',
        
        'E#': 'F',
        'F': 'E#',
        
        'F#': 'Gb',
        'Gb': 'F#',
        
        'G': 'G',
        
        'G#': 'Ab',
        'Ab': 'G#',
        
        'A': 'A',
        
        'A#': 'Bb',
        'Bb': 'A#',
        
        'B': 'Cb',
        'Cb': 'B'
    };
}