function Graphic() {
    this.canvas = null;
    this.context = null;
    this.screenW = 0;
    this.screenH = 0;

    this.Init = function () {
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.screenW = this.canvas.clientWidth;
        this.screenH = this.canvas.clientHeight;
        console.log("Finished init Graphic w: " + this.screenW + " h: " + this.screenH);
    }
}

var Graphic = new Graphic();