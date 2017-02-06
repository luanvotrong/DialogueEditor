function DialogueBox() {
	var W = 500;
	var H = 100;
    var mX, mY;
    
    this.Init = function(x, y) {
        mX = x;
        mY = y;
    }
    
    this.update = function (dt) {}

    this.draw = function () {
        var context = Graphic.context;
        context.save();
        context.translate(mX - W/2, mY - H/2);
        context.fillStyle = "#fff";
        context.fillRect(0, 0, W, H);
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