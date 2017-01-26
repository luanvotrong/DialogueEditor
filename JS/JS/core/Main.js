function Main() {
    var FPS_INTERVAL = 1000 / 20;
    this.Init = function () {
        Graphic.Init();
        last = Date.now();
        this.run();
    }

    var last = Date.now();
    this.run = function () {
        //RUNNING
        var now = Date.now();
        console.log("running");
        if (now - last >= FPS_INTERVAL) {
            update();
            draw();
        }
    }
    var run = function () {}

    var update = function (dt) {}

    var draw = function () {}
}
var Main = new Main();