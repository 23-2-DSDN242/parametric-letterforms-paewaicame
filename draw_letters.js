/* these are optional special variables which will change the system */
var systemBackgroundColor = "#E2C5A5";
var systemLineColor = "#000090";
var systemBoxColor = "#3D3029";

/*
* Draw the letter given the letterData
*
* Letters should always be drawn with the
* following bounding box guideline:
* from (0,0) to (100, 200)
*/
function drawLetter(letterData) {
    // color/stroke setup
    fill(systemBoxColor);
    noStroke();

    push();

    // sets the angle mode and rect mode, and individual character offsets
    angleMode(DEGREES);
    rectMode(CENTER);
    translate(letterData.offset * columnWidth + 10, 0);

    // draws vertical strokes
    function drawVertical(verticalIndex) {
        let verticalX = letterData.vertical[verticalIndex].x;
        let verticalY = letterData.vertical[verticalIndex].y;
        let verticalWidth = columnWidth;
        let verticalHeight = letterData.vertical[verticalIndex].height;
        rect(verticalX, verticalY, verticalWidth, verticalHeight);
    };
    push();
    shearY(-45);
    drawVertical("vertical1");
    drawVertical("vertical2");
    drawVertical("vertical3");
    drawVertical("vertical4");
    drawVertical("vertical5");
    pop();

    // draws diamond accents
    function drawAccent(accentIndex) {
        let accentX = letterData.accent[accentIndex].x;
        let accentY = letterData.accent[accentIndex].y;
        let accentState = letterData.accent[accentIndex].size;

        beginShape();
        vertex(accentX, accentY - (accentState * accentSize));
        vertex(accentX + (accentState * accentSize), accentY);
        vertex(accentX, accentY + (accentState * accentSize));
        vertex(accentX - (accentState * accentSize), accentY);
        endShape();
    }
    push();
    drawAccent("accent1");
    drawAccent("accent2");
    drawAccent("accent3");
    drawAccent("accent4");
    pop();

    // draws thin crossbeams
    function drawCrossbeam(crossbeamIndex) {
        let crossbeamX = letterData.crossbeam[crossbeamIndex].x;
        let crossbeamY = letterData.crossbeam[crossbeamIndex].y;
        let crossbeamWidth = columnWidth;
        let crossbeamState = letterData.crossbeam[crossbeamIndex].state;
        let crossbeamOverflowState = letterData.crossbeam[crossbeamIndex].overflow;
        rect(crossbeamX + (crossbeamOverflowState * crossbeamOverflow / 2), crossbeamY, crossbeamWidth + (crossbeamOverflowState * crossbeamOverflow), (crossbeamState * crossbeamHeight));
    }
    push();
    shearY(-45);
    drawCrossbeam("crossbeam1");
    drawCrossbeam("crossbeam2");
    pop();

    // draws descenders for the g, j, p, q, and y
    push();
    let descenderState = letterData.descender.state;
    let descenderColumn = letterData.descender.column;
    let descenderFacingRight = letterData.descender.facingRight;
    let descenderHeightOffset = descenderColumn * 20;
    let descenderAccentFacingRightOffset = descenderFacingRight * 40;
    let descenderAccentColumnPosition = (columnWidth * (descenderColumn - 1)) + 10 - (descenderState * 20);
    let descenderAccentVerticalOffset = descenderState * 80 + 180;
    let descenderAccentSize = descenderState * accentSize;
    beginShape();
    vertex(descenderAccentFacingRightOffset + descenderAccentColumnPosition, descenderAccentVerticalOffset - descenderAccentSize);
    vertex(descenderAccentFacingRightOffset + descenderAccentColumnPosition + descenderAccentSize, descenderAccentVerticalOffset);
    vertex(descenderAccentFacingRightOffset + descenderAccentColumnPosition, descenderAccentVerticalOffset + descenderAccentSize);
    vertex(descenderAccentFacingRightOffset + descenderAccentColumnPosition - descenderAccentSize, descenderAccentVerticalOffset);
    endShape();
    shearY(-45);
    rect(columnWidth * descenderColumn, descenderState * 40 + 170 + descenderHeightOffset, columnWidth, descenderState * 80);
    pop();

    pop();
}

function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {
        vertical: {
            vertical1: {},
            vertical2: {},
            vertical3: {},
            vertical4: {},
            vertical5: {}
        },
        accent: {
            accent1: {},
            accent2: {},
            accent3: {},
            accent4: {}
        },
        crossbeam: {
            crossbeam1: {},
            crossbeam2: {}
        },
        descender: {}
    };

    percentInverted = (percent / 100) * -1 + 1;
    percentEased = percentInverted ** 3;
    percentFinal = percentEased * -1 + 1;

    // map parameters for interpolation
    new_letter.offset = map(percentFinal, 0, 1, oldObj.offset, newObj.offset);

    new_letter.vertical.vertical1.x = map(percentFinal, 0, 1, oldObj.vertical.vertical1.x, newObj.vertical.vertical1.x);
    new_letter.vertical.vertical1.y = map(percentFinal, 0, 1, oldObj.vertical.vertical1.y, newObj.vertical.vertical1.y);
    new_letter.vertical.vertical1.height = map(percentFinal, 0, 1, oldObj.vertical.vertical1.height, newObj.vertical.vertical1.height);

    new_letter.vertical.vertical2.x = map(percentFinal, 0, 1, oldObj.vertical.vertical2.x, newObj.vertical.vertical2.x);
    new_letter.vertical.vertical2.y = map(percentFinal, 0, 1, oldObj.vertical.vertical2.y, newObj.vertical.vertical2.y);
    new_letter.vertical.vertical2.height = map(percentFinal, 0, 1, oldObj.vertical.vertical2.height, newObj.vertical.vertical2.height);

    new_letter.vertical.vertical3.x = map(percentFinal, 0, 1, oldObj.vertical.vertical3.x, newObj.vertical.vertical3.x);
    new_letter.vertical.vertical3.y = map(percentFinal, 0, 1, oldObj.vertical.vertical3.y, newObj.vertical.vertical3.y);
    new_letter.vertical.vertical3.height = map(percentFinal, 0, 1, oldObj.vertical.vertical3.height, newObj.vertical.vertical3.height);

    new_letter.vertical.vertical4.x = map(percentFinal, 0, 1, oldObj.vertical.vertical4.x, newObj.vertical.vertical4.x);
    new_letter.vertical.vertical4.y = map(percentFinal, 0, 1, oldObj.vertical.vertical4.y, newObj.vertical.vertical4.y);
    new_letter.vertical.vertical4.height = map(percentFinal, 0, 1, oldObj.vertical.vertical4.height, newObj.vertical.vertical4.height);

    new_letter.vertical.vertical5.x = map(percentFinal, 0, 1, oldObj.vertical.vertical5.x, newObj.vertical.vertical5.x);
    new_letter.vertical.vertical5.y = map(percentFinal, 0, 1, oldObj.vertical.vertical5.y, newObj.vertical.vertical5.y);
    new_letter.vertical.vertical5.height = map(percentFinal, 0, 1, oldObj.vertical.vertical5.height, newObj.vertical.vertical5.height);

    new_letter.accent.accent1.x = map(percentFinal, 0, 1, oldObj.accent.accent1.x, newObj.accent.accent1.x);
    new_letter.accent.accent1.y = map(percentFinal, 0, 1, oldObj.accent.accent1.y, newObj.accent.accent1.y);
    new_letter.accent.accent1.size = map(percentFinal, 0, 1, oldObj.accent.accent1.size, newObj.accent.accent1.size);

    new_letter.accent.accent2.x = map(percentFinal, 0, 1, oldObj.accent.accent2.x, newObj.accent.accent2.x);
    new_letter.accent.accent2.y = map(percentFinal, 0, 1, oldObj.accent.accent2.y, newObj.accent.accent2.y);
    new_letter.accent.accent2.size = map(percentFinal, 0, 1, oldObj.accent.accent2.size, newObj.accent.accent2.size);

    new_letter.accent.accent3.x = map(percentFinal, 0, 1, oldObj.accent.accent3.x, newObj.accent.accent3.x);
    new_letter.accent.accent3.y = map(percentFinal, 0, 1, oldObj.accent.accent3.y, newObj.accent.accent3.y);
    new_letter.accent.accent3.size = map(percentFinal, 0, 1, oldObj.accent.accent3.size, newObj.accent.accent3.size);

    new_letter.accent.accent4.x = map(percentFinal, 0, 1, oldObj.accent.accent4.x, newObj.accent.accent4.x);
    new_letter.accent.accent4.y = map(percentFinal, 0, 1, oldObj.accent.accent4.y, newObj.accent.accent4.y);
    new_letter.accent.accent4.size = map(percentFinal, 0, 1, oldObj.accent.accent4.size, newObj.accent.accent4.size);

    new_letter.crossbeam.crossbeam1.x = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam1.x, newObj.crossbeam.crossbeam1.x);
    new_letter.crossbeam.crossbeam1.y = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam1.y, newObj.crossbeam.crossbeam1.y);
    new_letter.crossbeam.crossbeam1.state = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam1.state, newObj.crossbeam.crossbeam1.state);
    new_letter.crossbeam.crossbeam1.overflow = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam1.overflow, newObj.crossbeam.crossbeam1.overflow);

    new_letter.crossbeam.crossbeam2.x = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam2.x, newObj.crossbeam.crossbeam2.x);
    new_letter.crossbeam.crossbeam2.y = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam2.y, newObj.crossbeam.crossbeam2.y);
    new_letter.crossbeam.crossbeam2.state = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam2.state, newObj.crossbeam.crossbeam2.state);
    new_letter.crossbeam.crossbeam2.overflow = map(percentFinal, 0, 1, oldObj.crossbeam.crossbeam2.overflow, newObj.crossbeam.crossbeam2.overflow);

    new_letter.descender.state = map(percentFinal, 0, 1, oldObj.descender.state, newObj.descender.state);
    new_letter.descender.column = map(percentFinal, 0, 1, oldObj.descender.column, newObj.descender.column);
    new_letter.descender.facingRight = map(percentFinal, 0, 1, oldObj.descender.facingRight, newObj.descender.facingRight);

    return new_letter;
}

var swapWords = [
    "FRACTURE",
    "BLCKLTTR",
    "TYPEFACE",
    "ABCEDFGH",
    "IJKLMNOP",
    "QRSTUVWX",
];