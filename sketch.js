const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
    arches: [
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
        {
            visible: true,
            gap: {
                visible: true,
                orientation: "vertical"
            }
        },
        {
            visible: true,
            gap: {
                visible: true,
                orientation: "vertical"
            }
        },
    ],
    dot: true
};

const letterB = {
    arches: [
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
        {
            visible: false,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
    ],
    dot: true
};

const letterC = {
    arches: [
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
        {
            visible: true,
            gap: {
                visible: true,
                orientation: "horizontal"
            }
        },
        {
            visible: true,
            gap: {
                visible: true,
                orientation: "horizontal"
            }
        },
        {
            visible: true,
            gap: {
                visible: false,
                orientation: "vertical"
            }
        },
    ],
    dot: false
};

const backgroundColor = "#E99A08";

function setup() {
    // create the drawing canvas, save the canvas element
    main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    // color/stroke setup
    strokeWeight(4);

    // with no animation, redrawing the screen is not necessary
    noLoop();
}

function draw() {
    // clear screen
    background(backgroundColor);

    // compute the center of the canvas
    let center_x = canvasWidth / 2;
    let center_y = canvasHeight / 2;

    // draw the letters A, B, C from saved data
    drawLetter(center_x - 250, center_y, letterA);
    drawLetter(center_x, center_y, letterB);
    drawLetter(center_x + 250, center_y, letterC);

}

let imgDot;
let imgArch;
let imgArchGapVertical;
let imgArchGapHorizontal;
function preload() {
    imgDot = loadImage('components/dot.png');
    imgArch = loadImage('components/arch.png');
    imgArchGapVertical = loadImage('components/archgapvertical.png');
    imgArchGapHorizontal = loadImage('components/archgaphorizontal.png');
}

function drawLetter(x, y, letterData) {
    let imageSize = 100;

    let scaleValues = [
        [1, 1],
        [-1, 1],
        [-1, -1],
        [1, -1],
    ];
    for (let i = 0; i < 4; i++) {
        if (letterData.arches[i].visible) {
            push();
            translate(x, y);
            scale(scaleValues[i]);
            if (letterData.arches[i].gap.visible) {
                if (letterData.arches[i].gap.orientation == "vertical") {
                    image(imgArchGapVertical, -imageSize / 2, -imageSize / 2);
                } else if (letterData.arches[i].gap.orientation == "horizontal") {
                    image(imgArchGapHorizontal, -imageSize / 2, -imageSize / 2);
                }
            } else {
                image(imgArch, -imageSize / 2, -imageSize / 2);
            }
            pop();
        }
    }

    if (letterData.dot) {
        image(imgDot, x - imageSize / 2, y - imageSize / 2);
    }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
    else if (key == '@') {
        saveBlocksImages(true);
    }
}
