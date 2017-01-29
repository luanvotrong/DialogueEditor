function Input() {
    var objectPool = [];
    
    this.Init = function () {
        objectPool = RootObjectPool.GetObjectPool();
        
        Graphic.canvas.addEventListener('mousedown', onMouseDown, false);
        Graphic.canvas.addEventListener('touchstart', onMouseDown, false);
        Graphic.canvas.addEventListener('mousemove', onMouseMove, false);
        Graphic.canvas.addEventListener('touchmove', onMouseMove, false);
        Graphic.canvas.addEventListener('mouseup', onMouseUp, false);
        Graphic.canvas.addEventListener('touchend', onMouseUp, false);
        document.addEventListener('scroll', onScroll, false);
        document.addEventListener('mousewheel', onScroll, false);
    }
    
    var onScroll = function(ev) {
        var len = objectPool.length;
        for(var i=0; i<len; i++) {
            objectPool[i].onScroll(ev.wheelDeltaY);
        }
    }
    
    var onMouseDown = function(ev) {
        x = ev.pageX;
        y = ev.pageY;
        
        var len = objectPool.length;
        for(var i=0; i<len; i++) {
            objectPool[i].onMouseDown(x, y);
        }
    }
    
    var onMouseMove = function(ev) {
        x = ev.pageX;
        y = ev.pageY;
        
        var len = objectPool.length;
        for(var i=0; i<len; i++) {
            objectPool[i].onMouseMove(x, y);
        }
    }
    
    var onMouseUp = function(ev) {
        x = ev.pageX;
        y = ev.pageY;
        
        var len = objectPool.length;
        for(var i=0; i<len; i++) {
            objectPool[i].onMouseUp(x, y);
        }
    }
}

var Input = new Input();