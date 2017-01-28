function Input() {
    var x = 0;
    var y = 0;
    
    var isTouching = false;
    
    this.Init = function () {
        Graphic.canvas.addEventListener('mousedown', onMouseDown, false);
        Graphic.canvas.addEventListener('touchstart', onMouseDown, false);
        Graphic.canvas.addEventListener('mousemove', onMouseMove, false);
        Graphic.canvas.addEventListener('touchmove', onMouseMove, false);
        Graphic.canvas.addEventListener('mouseup', onMouseUp, false);
        Graphic.canvas.addEventListener('touchend', onMouseUp, false);
    }
    
    this.GetTouchInfo = function() {
        return {
            x: x,
            y: y,
            isTouch: isTouching
        }
    }
    
    var onMouseDown = function(ev) {
        if(ev.targetTouches.length <= 0)
            return;
        x = ev.targetTouches[0].pageX;
        y = ev.targetTouches[0].pageY;
        isTouching = true;
        console.log("Down");   
    }
    
    var onMouseMove = function(ev) {
        if(ev.targetTouches.length <= 0)
            return;
        x = ev.targetTouches[0].pageX;
        y = ev.targetTouches[0].pageY;
        console.log("Moving");
    }
    
    var onMouseUp = function(ev) {
        if(ev.targetTouches.length <= 0)
            return;
        x = ev.targetTouches[0].pageX;
        y = ev.targetTouches[0].pageY;
        isTouching = false;
        console.log("Up");
    }
}

var Input = new Input();