function Rect(_x, _y, _w, _h) {
	this.x = _x;
	this.y = _y;
	this.w = _w;
	this.h = _h;

	this.isInBound = function(x, y) {
		if(x < _x || x > _x + _w 
		   || y < _y || y > _y + _h) {
			return false;
		}
		return true;
	}
}