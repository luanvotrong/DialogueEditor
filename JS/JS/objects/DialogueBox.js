function DialogueBox() {
	var W = 500;
	var H = 100;
	var mX, mY;
	var shouldCheckPress = false;
	var isDragging = false;
	var buttons = [];

	this.Init = function(x, y) {
		mX = x;
		mY = y;

		var createBtn = new Button();
		createBtn.Init(new Rect(450, 75, 50, 25),
					   "create");
		
		buttons.push(createBtn);
	}

	this.update = function (dt) {
		for(var i=0; i<buttons.length; i++) {
			buttons[i].update(dt);
		}
	}

	this.draw = function () {
		var context = Graphic.context;
		context.save();
		context.translate(mX - W/2, mY - H/2);
		context.fillStyle = "#fff";
		context.fillRect(0, 0, W, H);

		for(var i=0; i<buttons.length; i++) {
			buttons[i].draw();
		}
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
			for(var i=0; i<buttons.length; i++) {
				if(buttons[i].isInBound(x - mX + W/2, y - mY + H/2)) {
					console.log("create");
					resetTouch();
					return true;
				}
			}
			var text = prompt("Enter diaglogue", "diaglogue");
			console.log(text);
		}

		resetTouch();
		return true;
	}
}