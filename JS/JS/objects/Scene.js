function Lamp(min, max, v) {
    if (v < min)
        return min;
    if (v > max)
        return max;
    return v;
}

function Scene() {
    var sceneLayer = new SceneLayer();
    
    this.update = function (dt) {
        sceneLayer.update(dt);
    }

    this.draw = function () {
        sceneLayer.draw();
    }
    
    this.onScroll = function (delta) {
        sceneLayer.onScroll(delta);
    }

    this.onMouseDown = function (x, y) {
        sceneLayer.onMouseDown(x, y);
    }

    this.onMouseMove = function (x, y) {
        sceneLayer.onMouseMove(x, y);
    }

    this.onMouseUp = function (x, y) {
        sceneLayer.onMouseUp(x, y);
    }
}

var Scene = new Scene();
RootObjectPool.AddObject(Scene);

//this.update = function (dt) {}
//
//this.draw = function () {}
//this.onScroll = function (delta) {
//
//}
//
//this.onMouseDown = function (x, y) {
//
//}
//
//this.onMouseMove = function (x, y) {
//
//}
//
//this.onMouseUp = function (x, y) {
//
//}