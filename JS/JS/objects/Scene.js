function Scene() {
    var SCROLL_BASE = 0.02;
    
    var offsetX = Graphic.screenW / 2;
    var offsetY = Graphic.screenH / 2;
    var checkClick = false;
    var dialogueBoxes = [];
    var globalScale = 1;
    var scaleOffset = 0;

    this.update = function (dt) {
        globalScale -= scaleOffset * dt;
        offsetX += scaleOffset * offsetX * dt;
        offsetY += scaleOffset * offsetY * dt;
        
        var len = dialogueBoxes.length;
        for(var i=0; i<len; i++) {
            dialogueBoxes[i].update(dt);
        }
    }

    this.draw = function () {
        var context = Graphic.context;
        context.save();
        context.translate(offsetX, offsetY);
        context.scale(globalScale, globalScale);
        
        var len = dialogueBoxes.length;
        for(var i=0; i<len; i++) {
            dialogueBoxes[i].draw();
        }
        
        context.restore();
    }

    this.onScroll = function (delta) {
        scaleOffset = delta * SCROLL_BASE;
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