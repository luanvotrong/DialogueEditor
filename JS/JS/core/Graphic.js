function Graphic() {
    this.canvas = null;
    this.context = null;
    this.screenW = 0;
    this.screenH = 0;

    this.Init = function () {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.screenW = this.context.canvas.clientWidth;
        this.screenH = this.context.canvas.clientHeight;
        console.log("Finished init Graphic w: " + this.screenW + " h: " + this.screenH);
    }
}

var Graphic = new Graphic();