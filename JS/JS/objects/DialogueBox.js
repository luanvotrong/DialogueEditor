function DialogueBox() {
	var btnW = 50;
	var btnH = 25;

	var W = BOX_W;
	var H = BOX_H;

	var shouldCheckPress = false;
	var isDragging = false;
	var buttons = [];

	var uuid;
	var mX, mY;
	var text = "Dialogue";
	var father = null;
	var role = "mc";
	var child = [];

	this.Init = function(_uuid) {
		uuid = _uuid;
		var x = W - btnW;
		var y = H - btnH;
		var btn = new Button();
		btn.Init(new Rect(x, y, btnW, btnH),
				 "create",
				 createDiaglogue);
		buttons.push(btn);

		x -= btnW;
		btn = new Button();
		btn.Init(new Rect(x, y, btnW, btnH),
				 role,
				 toggleChar);
		buttons.push(btn);
	}

	this.setDetails = function(_father, _text) {
		father = _father;
		text = _text;
	}

	this.getUUID = function() {
		return uuid;
	}

	this.getFather = function() {
		return father;
	}

	this.getChild = function() {
		return child;
	}

	this.addChild = function(_child) {
		for(var i=0; i<child.length; i++) {
			if(child[i] == _child) {
				return;
			}
		}

		child.push(_child);
	}

	this.removeChild = function(_child) {
		for(var i=0; i<child.length; i++) {
			if(child[i] == _child) {
				child.splice(i, 1);
			}
		}
	}

	this.setPos = function(x, y) {
		mX = x;
		mY = y;
	}
	
	this.getX = function() {
		return mX;
	}
	
	this.getY = function() {
		return mY;
	}

	this.getPos = function() {
		return {x: mX, y: mY};
	}

	this.update = function (dt) {
		for(var i=0; i<buttons.length; i++) {
			buttons[i].update(dt);
		}
	}

	this.draw = function () {
		var context = Graphic.context;
		//draw relations
		context.save();
		context.strokeStyle = "#0f0";
		for(var i=0; i<child.length; i++) {
			var object = DialoguesMgr.findDialogue(child[i]);
			context.beginPath();
			context.moveTo(mX,mY);
			context.lineTo(object.getX(),object.getY());
			context.stroke();
		}
		context.restore();

		//draw box
		context.save();
		context.translate(mX - W/2, mY - H/2);
		context.fillStyle = "#fff";
		context.fillRect(0, 0, W, H);

		wrapText(context, text, 0, 0, W, H/10);

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
					buttons[i].triggerCallback();
					resetTouch();
					return true;
				}
			}
			var tempText = text;
			text = prompt("Enter diaglogue", text);
			if(!text) {
				text = tempText;
			}
		}

		resetTouch();
		return true;
	}

	var createDiaglogue = function(btn) {
		DialoguesMgr.addDialogue(uuid);
	}

	var toggleChar = function(btn) {
		console.log("toggle");
		btn.setLabel(role);
	}

	var wrapText = function(context, text, x, y, maxWidth, lineHeight) {
		context.textBaseline="top";
		context.fillStyle = "#000";
		context.font="20px Georgia";
		var words = text.split(' ');
		var line = '';

		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
			if (testWidth > maxWidth && n > 0) {
				context.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			}
			else {
				line = testLine;
			}
		}
		context.fillText(line, x, y);
	}

	this.mySerialize = function() {
		return {
			uuid: uuid,
			text: text,
			role: role,
			father: father,
			child: child,
			x: mX,
			y: mY
		}
	}
}