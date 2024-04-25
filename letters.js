const columnWidth = 20;
const accentSize = 20;
const crossbeamHeight = 10;
const crossbeamOverflow = 5;

// DO SOMETHING WITH THIS PLEASE THX
const vertical1Unused = { x: 0, y: 130, height: 0 };
const vertical2Unused = { x: columnWidth * 2, y: 170, height: 0 };
const vertical3Unused = { x: columnWidth * 4, y: 210, height: 0 };
const vertical1NumeralUsed = { x: 0, y: 122.5, height: 65 };
const vertical1NumeralUnused = vertical1Unused;
const vertical2NumeralUsed = { x: columnWidth * 2, y: 177.5, height: 65 };
const vertical2NumeralUnused = vertical2Unused;
const vertical4NumeralUsed = { x: 0, y: 157.5, height: 25 };
const vertical4NumeralUnused = { x: 0, y: 157.5, height: 0 };
const vertical5NumeralUsed = { x: columnWidth * 2, y: 142.5, height: 25 };
const vertical5NumeralUnused = { x: columnWidth * 2, y: 142.5, height: 0 };

const accent1Unused = { x: 10, y: 180, size: 0 };
const accent2Unused = { x: columnWidth * 2 - 10, y: 80, size: 0 };
const accent3Unused = { x: columnWidth * 3 - 10, y: 180, size: 0 };
const accent4Unused = { x: columnWidth * 1 - 10, y: 100, size: 0 };
const accent1NumeralUsed = { x: 10, y: 180, size: 1 };
const accent1NumeralUnused = accent1Unused;
const accent2NumeralUsed = { x: columnWidth * 2 - 10, y: 80, size: 1 };
const accent2NumeralUnused = accent2Unused;

const crossbeamUnused = { x: columnWidth, y: 115, state: 0, overflow: 0 };
const crossbeamNumeralUsed = { x: columnWidth, y: 150, state: 1, overflow: 0 };
const crossbeamNumeralUnused = { x: columnWidth, y: 150, state: 0, overflow: 0 };

const alphabet = {
    "default": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 50, height: 80 },
            vertical2: { x: columnWidth * 1, y: 130, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: accent2Unused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "A": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 150, height: 40 },
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: 0, y: 95, height: 1, state: 1, overflow: 1 },
            crossbeam2: { x: columnWidth, y: 135, state: 1, overflow: 0 }
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "B": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 90, height: 160 },
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "C": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: { x: columnWidth * 2, y: 190, height: 40 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "D": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 140, height: 60 },
            vertical2: { x: columnWidth * 2, y: 140, height: 140 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 20, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 115, state: 1, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "E": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: { x: columnWidth * 2, y: 190, height: 40 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 1, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "F": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 100, height: 140 },
            vertical2: vertical2Unused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 20, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 115, state: 1, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "G": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 1,
            column: 2,
            facingRight: 0
        }
    },
    "H": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 90, height: 160 },
            vertical2: { x: columnWidth * 2, y: 200, height: 140 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "I": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 140, height: 60 },
            vertical2: vertical2Unused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "J": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 140, height: 60 },
            vertical2: vertical2Unused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: accent1Unused,
            accent2: { x: columnWidth * 1 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 1,
            column: 0,
            facingRight: 0
        }
    },
    "K": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 90, height: 160 },
            vertical2: { x: columnWidth * 2, y: 210, height: 120 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 100, size: 1 },
            accent3: { x: columnWidth * 2 - 10, y: 40, size: 1 },
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 85, state: 1, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "L": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 90, height: 160 },
            vertical2: vertical2Unused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: accent2Unused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "M": {
        offset: 0,
        vertical: {
            vertical1: { x: 0, y: 130, height: 120 },
            vertical2: { x: columnWidth * 2, y: 170, height: 120 },
            vertical3: { x: columnWidth * 4, y: 200, height: 100 },
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 0 },
            accent2: accent2Unused,
            accent3: { x: columnWidth * 5 - 10, y: 180, size: 1 },
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 115, state: 1, overflow: 0 },
            crossbeam2: { x: columnWidth * 3, y: 155, state: 1, overflow: 0 }
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "N": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 120 },
            vertical2: { x: columnWidth * 2, y: 160, height: 100 },
            vertical3: { x: columnWidth * 4, y: 200, height: 0 },
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 0 },
            accent2: accent2Unused,
            accent3: { x: columnWidth * 3 - 10, y: 180, size: 1 },
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 115, state: 1, overflow: 0 },
            crossbeam2: { x: columnWidth * 3, y: 155, state: 0, overflow: 0 }
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "O": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "P": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 1,
            column: 0,
            facingRight: 0
        }
    },
    "Q": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 1,
            column: 2,
            facingRight: 1
        }
    },
    "R": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 130, height: 80 },
            vertical2: vertical2Unused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "S": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 122.5, height: 65 },
            vertical2: { x: columnWidth * 2, y: 177.5, height: 65 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 2 - 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 150, state: 1, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "T": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 90, height: 160 },
            vertical2: vertical2Unused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: accent2Unused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 115, state: 1, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "U": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 120, height: 100 },
            vertical2: { x: columnWidth * 2, y: 170, height: 120 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: accent2Unused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "V": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 120, height: 100 },
            vertical2: { x: columnWidth * 2, y: 160, height: 100 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: accent2Unused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "W": {
        offset: 0,
        vertical: {
            vertical1: { x: 0, y: 120, height: 100 },
            vertical2: { x: columnWidth * 2, y: 160, height: 100 },
            vertical3: { x: columnWidth * 4, y: 200, height: 100 },
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 3 - 10, y: 180, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "X": {
        offset: 0,
        vertical: {
            vertical1: vertical1Unused,
            vertical2: { x: columnWidth * 2, y: 170, height: 80 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: columnWidth * 4 - 10, y: 80, size: 1 },
            accent3: { x: columnWidth * 4 - 10, y: 160, size: 1 },
            accent4: { x: columnWidth * 1 - 10, y: 100, size: 1 }
        },
        crossbeam: {
            crossbeam1: crossbeamUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "Y": {
        offset: 1,
        vertical: {
            vertical1: { x: 0, y: 120, height: 100 },
            vertical2: { x: columnWidth * 2, y: 160, height: 100 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: accent2Unused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 1,
            column: 2,
            facingRight: 0
        }
    },
    // "Z": {
    //     offset: 1.5,
    //     vertical: {
    //         vertical1: vertical1Unused,
    //         vertical2: { x: columnWidth * 1, y: 130, height: 40 },
    //         vertical3: vertical3Unused,
    //         vertical4: vertical4NumeralUnused,
    //         vertical5: vertical5NumeralUnused
    //     },
    //     accent: {
    //         accent1: { x: 10, y: 160, size: 1 },
    //         accent2: { x: 10, y: 80, size: 1 },
    //         accent3: accent3Unused,
    //         accent4: accent4Unused
    //     },
    //     crossbeam: {
    //         crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
    //         crossbeam2: crossbeamUnused
    //     },
    //     descender: {
    //         state: 1,
    //         column: 1,
    //         facingRight: 0
    //     }
    // },
    "Z": {
        offset: 1.5,
        vertical: {
            vertical1: { x: 0, y: 155, height: 30 },
            vertical2: { x: columnWidth * 1, y: 125, height: 30 },
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: { x: 10, y: 180, size: 1 },
            accent2: { x: 10, y: 80, size: 1 },
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: { x: columnWidth, y: 125, state: 0, overflow: 0 },
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "0": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUsed,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "1": {
        offset: 0,
        vertical: {
            vertical1: vertical1NumeralUnused,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUnused,
            accent2: accent2NumeralUnused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "2": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUnused,
            vertical2: vertical2NumeralUnused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUsed,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "3": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUnused,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUsed,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "4": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUnused,
            accent2: accent2NumeralUnused,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "5": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "6": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUsed,
            vertical5: vertical5NumeralUnused
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "7": {
        offset: 0,
        vertical: {
            vertical1: vertical1NumeralUnused,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUnused,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUnused,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "8": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUsed,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
    "9": {
        offset: 1,
        vertical: {
            vertical1: vertical1NumeralUsed,
            vertical2: vertical2NumeralUsed,
            vertical3: vertical3Unused,
            vertical4: vertical4NumeralUnused,
            vertical5: vertical5NumeralUsed
        },
        accent: {
            accent1: accent1NumeralUsed,
            accent2: accent2NumeralUsed,
            accent3: accent3Unused,
            accent4: accent4Unused
        },
        crossbeam: {
            crossbeam1: crossbeamNumeralUsed,
            crossbeam2: crossbeamUnused
        },
        descender: {
            state: 0,
            column: 2,
            facingRight: 0
        }
    },
};