function DialogueBox() {
    var mX, mY;
    
    this.Init = function(x, y) {
        mX = x;
        mY = y;
    }
    
    this.update = function (dt) {}

    this.draw = function () {
        var context = Graphic.context;
        context.save();
        context.translate(mX, mY);
        context.fillStyle = "#fff";
        context.beginPath();
        context.arc(0, 0, 50, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
        context.restore();
    }
    this.onScroll = function (delta) {

    }

    this.onMouseDown = function (x, y) {

    }

    this.onMouseMove = function (x, y) {

    }

    this.onMouseUp = function (x, y) {

    }
}