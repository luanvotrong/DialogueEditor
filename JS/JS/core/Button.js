function Button() {
	var rect = null;
	var label;
	var color = "#0f0";
	var callback = null;
	
	this.Init = function(_rect, _label, _cb) {
		rect = _rect;
		label = _label;
		callback = _cb;
	}
	
	this.setLabel = function(_label) {
		label = _label;
	}
	
	this.setColor = function(_color) {
		color = _color;
	}
	
	this.triggerCallback = function() {
		callback(this);
	}

	this.update = function(dt) {
	}
	
	this.draw = function() {
		var context = Graphic.context;
        context.save();
        context.translate(rect.x, rect.y);
        context.fillStyle = color;
        context.fillRect(0, 0, rect.w, rect.h);
		
		context.fillStyle = "#fff";
		context.font="20px Georgia";
		context.fillText(label, 0, 0, rect.w);
        context.restore();
	}
	
	this.isInBound = function(x, y) {
		return rect.isInBound(x, y);
	}
}