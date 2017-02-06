function DialogueBox() {
	var W = 500;
	var H = 100;
    var mX, mY;
    var shouldCheckPress = false;
	var isDragging = false;
    
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
	
	var resetTouch = function() {
		shouldCheckPress = false;
		isDragging = false;
	}

	var preX = 0;
    var preY = 0;
    this.onMouseDown = function (x, y) {
		if(!isInBound(x,  y)) {
			resetTouch();
			return false;
		}
		
		preX = x;
		preY = y;
		shouldCheckPress = true;
		isDragging = true;
		return true;
    }

    this.onMouseMove = function (x, y) {
		if(!isInBound(x,  y)) {
			resetTouch();
			return false;
		}
		
		if(isDragging) {
			mX = mX + (x - preX);
			mY = mY + (y - preY);
			console.log(x - preX + " " + y - preY);
		}
		preX = x;
		preY = y;
		shouldCheckPress = false;
		return true;
    }

    this.onMouseUp = function (x, y) {
		if(!isInBound(x,  y)) {
			resetTouch();
			return false;
		}
		if(shouldCheckPress) {
			var text = prompt("Enter diaglogue", "diaglogue");
			console.log(text);
		}
		
		shouldCheckPress = false;
		isDragging = false;
		return true;
    }
}