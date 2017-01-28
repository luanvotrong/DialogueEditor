function Scene() {
    this.update = function (dt) {
        var touchInfo = Input.GetTouchInfo();
        if (touchInfo.isTouch) {
            var context = Graphic.context;
            context.save();
            context.translate(touchInfo.x, touchInfo.y);
            context.beginPath();
            context.arc(0, 0, 50, 0, 2 * Math.PI, false);
            context.fillStyle = 'green';
            context.fill();
            context.lineWidth = 5;
            context.strokeStyle = '#003300';
            context.stroke();
            context.restore();
        }
    }

    this.draw = function () {
        var context = Graphic.context;
        context.fillStyle = '#000';
        context.rect(0, 0, Graphic.screenW/2, Graphic.screenH/2);
        context.fill;
        console.log("draws");
    }
}

var Scene = new Scene();
Core.AddObject(Scene);