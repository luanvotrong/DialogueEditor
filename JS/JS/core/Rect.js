function Rect(_x, _y, _w, _h) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;
	
	this.isInBound = function(x, y) {
		if(Math.abs(x - _x) > _w || Math.abs(y - _y) > _h) {
			return false;
		}
		return true;
	}
}