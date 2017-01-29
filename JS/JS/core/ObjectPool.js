function ObjectPool() {
    var objectPool = [];

    this.GetObjectPool = function() {
        return objectPool;
    }
    
    this.AddObject = function (obj) {
        objectPool.push(obj);
    }

    this.RemoveObject = function (obj) {
        objectPool.pop(obj);
    }
}