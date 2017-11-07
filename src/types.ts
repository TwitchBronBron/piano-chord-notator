module app {

    /**
     * One of the 12 notes per octive
     */
    export enum Note {
        c = 'C',
        csharp = 'C#',
        d = 'D',
        dsharp = 'D#',
        e = 'E',
        f = 'F',
        fsharp = 'F#',
        g = 'G',
        gsharp = 'G#',
        a = 'A',
        asharp = 'A#',
        b = 'B'
    }

    /**
     * An absolute reference to a specific key on a piano.
     */
    export enum Key {
        a0 = 'A0',
        asharp0 = 'A#0',
        b0 = 'B0',

        c1 = 'C1',
        csharp1 = 'C#1',
        d1 = 'D1',
        dsharp1 = 'D#1',
        e1 = 'E1',
        f1 = 'F1',
        fsharp1 = 'F#1',
        g1 = 'G1',
        gsharp1 = 'G#1',
        a1 = 'A1',
        asharp1 = 'A#1',
        b1 = 'B1',

        c2 = 'C2',
        csharp2 = 'C#2',
        d2 = 'D2',
        dsharp2 = 'D#2',
        e2 = 'E2',
        f2 = 'F2',
        fsharp2 = 'F#2',
        g2 = 'G2',
        gsharp2 = 'G#2',
        a2 = 'A2',
        asharp2 = 'A#2',
        b2 = 'B2',

        c3 = 'C3',
        csharp3 = 'C#3',
        d3 = 'D3',
        dsharp3 = 'D#3',
        e3 = 'E3',
        f3 = 'F3',
        fsharp3 = 'F#3',
        g3 = 'G3',
        gsharp3 = 'G#3',
        a3 = 'A3',
        asharp3 = 'A#3',
        b3 = 'B3',

        c4 = 'C4',
        csharp4 = 'C#4',
        d4 = 'D4',
        dsharp4 = 'D#4',
        e4 = 'E4',
        f4 = 'F4',
        fsharp4 = 'F#4',
        g4 = 'G4',
        gsharp4 = 'G#4',
        a4 = 'A4',
        asharp4 = 'A#4',
        b4 = 'B4',

        c5 = 'C5',
        csharp5 = 'C#5',
        d5 = 'D5',
        dsharp5 = 'D#5',
        e5 = 'E5',
        f5 = 'F5',
        fsharp5 = 'F#5',
        g5 = 'G5',
        gsharp5 = 'G#5',
        a5 = 'A5',
        asharp5 = 'A#5',
        b5 = 'B5',
    }

    export const AllKeys = [
        Key.a0,
        Key.asharp0,
        Key.b0,
        Key.c1,
        Key.csharp1,
        Key.d1,
        Key.dsharp1,
        Key.e1,
        Key.f1,
        Key.fsharp1,
        Key.g1,
        Key.gsharp1,
        Key.a1,
        Key.asharp1,
        Key.b1,
        Key.c2,
        Key.csharp2,
        Key.d2,
        Key.dsharp2,
        Key.e2,
        Key.f2,
        Key.fsharp2,
        Key.g2,
        Key.gsharp2,
        Key.a2,
        Key.asharp2,
        Key.b2,
        Key.c3,
        Key.csharp3,
        Key.d3,
        Key.dsharp3,
        Key.e3,
        Key.f3,
        Key.fsharp3,
        Key.g3,
        Key.gsharp3,
        Key.a3,
        Key.asharp3,
        Key.b3,
        Key.c4,
        Key.csharp4,
        Key.d4,
        Key.dsharp4,
        Key.e4,
        Key.f4,
        Key.fsharp4,
        Key.g4,
        Key.gsharp4,
        Key.a4,
        Key.asharp4,
        Key.b4,
        Key.c5,
        Key.csharp5,
        Key.d5,
        Key.dsharp5,
        Key.e5,
        Key.f5,
        Key.fsharp5,
        Key.g5,
        Key.gsharp5,
        Key.a5,
        Key.asharp5,
        Key.b5,
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
        Note.asharp,
        Note.csharp,
        Note.dsharp,
        Note.fsharp,
        Note.gsharp
    ];

    export const WhiteKeys = AllKeys.filter((key) => {
        return key.indexOf('#') === -1;
    });

    export const BlackKeys = AllKeys.filter((key) => {
        return key.indexOf('#') > -1;
    })
}