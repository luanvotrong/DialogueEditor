function Main() {
    var FPS_INTERVAL = 1000 / 20;
    this.Init = function () {
        Graphic.Init();
        Input.Init();
        last = Date.now();
        this.run();
    }

    var last = Date.now();
    this.run = function () {
        //RUNNING
        loop();
    }

    var loop = function () {
        var now = Date.now();
        var dt = now - last;
        Core.GameLoop(dt);
        last = now;
        //window.requestAnimationFrame(loop);
        setTimeout(loop, FPS_INTERVAL);
    }
}
var Main = new Main();