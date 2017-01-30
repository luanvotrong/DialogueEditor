function Lamp(min, max, v) {
    if (v < min)
        return min;
    if (v > max)
        return max;
    return v;
}

function Scene() {
    var SCROLL_BASE = 0.02;
    var SCROLL_DE = 0.3;

    var dragOffsetX = 0;
    var dragOffsetY = 0;
    var offsetX = 0;
    var offsetY = 0;

    var isDragging = false;
    var shouldCheckPress = false;
    var dialogueBoxes = [];

    var globalScale = 1;
    var scaleSpeed = 0;

    this.update = function (dt) {
        globalScale -= scaleSpeed * dt;
        globalScale = Lamp(0.3, 1, globalScale);
        offsetX = (1 - globalScale) * Graphic.screenW / 2;
        offsetY = (1 - globalScale) * Graphic.screenH / 2;

        scaleSpeed *= SCROLL_DE;
        scaleSpeed = (Math.abs(scaleSpeed) < 0.1) ? 0 : scaleSpeed;

        var len = dialogueBoxes.length;
        for (var i = 0; i < len; i++) {
            dialogueBoxes[i].update(dt);
        }
    }

    this.draw = function () {
        var context = Graphic.context;
        context.save();
        context.translate(offsetX + dragOffsetX, offsetY + dragOffsetY);
        context.scale(globalScale, globalScale);

        var len = dialogueBoxes.length;
        for (var i = 0; i < len; i++) {
            dialogueBoxes[i].draw();
        }

        context.scale(1, 1);
        context.restore();
    }

    this.onScroll = function (delta) {
        scaleSpeed = delta * SCROLL_BASE;
        console.log(delta);
    }


    var preX = 0;
    var preY = 0;
    this.onMouseDown = function (x, y) {
        isDragging = true;
        shouldCheckPress = true;
        preX = x;
        preY = y;
    }

    this.onMouseMove = function (x, y) {
        if (isDragging) {
            dragOffsetX += (x - preX);
            dragOffsetY += (y - preY);
            preX = x;
            preY = y;
        }
        shouldCheckPress = false;
    }

    this.onMouseUp = function (x, y) {
        if (shouldCheckPress) {
            var dialogueBox = new DialogueBox();
            dialogueBox.Init(x - dragOffsetX, y - dragOffsetY);
            dialogueBoxes.push(dialogueBox);
        }
        isDragging = false;
        shouldCheckPress = false;
    }
}

var Scene = new Scene();
RootObjectPool.AddObject(Scene);

//this.update = function (dt) {}
//
//this.draw = function () {}
//this.onScroll = function (delta) {
//
//}
//
//this.onMouseDown = function (x, y) {
//
//}
//
//this.onMouseMove = function (x, y) {
//
//}
//
//this.onMouseUp = function (x, y) {
//
//}