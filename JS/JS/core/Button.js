function Button() {
	var rect = null;
	var label;
	
	this.Init = function(_rect, _label) {
		rect = _rect;
		label = _label;
	}

	this.update = function(dt) {
	}
	
	this.draw = function() {
		var context = Graphic.context;
        context.save();
        context.translate(rect.x, rect.y);
        context.fillStyle = "#000";
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