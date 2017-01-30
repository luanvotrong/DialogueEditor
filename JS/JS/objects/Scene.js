function Lamp(min, max, v) {
    if(v < min) 
        return min;
    if(v > max) 
        return max;
    return v;
}

function Scene() {
    var SCROLL_BASE = 0.02;
    var SCROLL_DE = 0.3;

    var offsetX = 0;
    var offsetY = 0;
    var checkClick = false;
    var dialogueBoxes = [];
    var globalScale = 1;
    var scaleOffset = 0;

    this.update = function (dt) {
        globalScale -= scaleOffset * dt;
        globalScale = Lamp(0.3, 1, globalScale);
        offsetX = (1 - globalScale) * Graphic.screenW / 2;
        offsetY = (1 - globalScale) * Graphic.screenH / 2;

        scaleOffset *= SCROLL_DE;
        scaleOffset = (Math.abs(scaleOffset) < 0.1) ? 0 : scaleOffset;

        var len = dialogueBoxes.length;
        for (var i = 0; i < len; i++) {
            dialogueBoxes[i].update(dt);
        }
    }

    this.draw = function () {
        var context = Graphic.context;
        context.save();
        context.translate(offsetX, offsetY);
        context.scale(globalScale, globalScale);

        var len = dialogueBoxes.length;
        for (var i = 0; i < len; i++) {
            dialogueBoxes[i].draw();
        }

        context.scale(1, 1);
        context.restore();
    }

    this.onScroll = function (delta) {
        scaleOffset = delta * SCROLL_BASE;
        console.log(delta);
    }

    this.onMouseDown = function (x, y) {
        checkClick = true;
    }

    this.onMouseMove = function (x, y) {
        checkClick = false;
    }

    this.onMouseUp = function (x, y) {
        if (checkClick) {
            var dialogueBox = new DialogueBox();
            dialogueBox.Init(x, y);
            dialogueBoxes.push(dialogueBox);
        }
        checkClick = false;
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
//}