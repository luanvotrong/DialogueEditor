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
        var size = objectPool.length;
        for (var i = 0; i < size; i++) {
            objectPool[i].draw(dt);
        }
    }
}

var Core = new Core();