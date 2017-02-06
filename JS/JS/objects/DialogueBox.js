function DialogueBox() {
	var W = 500;
	var H = 100;
    var mX, mY;
    var shouldCheckPress = false;
    
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
		return true;
    }
	
	var isInBound = function(x, y) {
		if(Math.abs(x - mX) > W/2 || Math.abs(y - mY) > H/2) {
			return false;
		}
		return true;
	}

    this.onMouseDown = function (x, y) {
		if(!isInBound(x,  y)) {
			return false;
		}
		shouldCheckPress = true;
		return true;
    }

    this.onMouseMove = function (x, y) {
		if(!isInBound(x,  y)) {
			return false;
		}
		shouldCheckPress = false;
		return true;
    }

    this.onMouseUp = function (x, y) {
		if(!isInBound(x,  y)) {
			return false;
		}
		if(shouldCheckPress) {
			var text = prompt("Enter diaglogue", "diaglogue");
			console.log(text);
		}
		
		shouldCheckPress = false;
		return true;
    }
}