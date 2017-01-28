function Core() {
    var objectPool = [];

    this.AddObject = function (obj) {
        objectPool.push(obj);
    }

    this.RemoveObject = function (obj) {
        objectPool.pop(obj);
    }

    this.GameLoop = function (dt) {
        update(dt);
        draw();
    }

    var update = function (dt) {
        var size = objectPool.length;
        for (var i = 0; i < size; i++) {
            objectPool[i].update(dt);
        }
    }

    var draw = function () {
        Graphic.context.clearRect(0, 0, Graphic.screenW, Graphic.screenH);
        var size = objectPool.length;
        for (var i = 0; i < size; i++) {
            objectPool[i].draw();
        }
    }
}

var Core = new Core();