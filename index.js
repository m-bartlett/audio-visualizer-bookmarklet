const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
(canvas.resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;        
})()
Object.assign(canvas.style, 
    {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        left: 0
    }
)

window.addEventListener('resize', canvas.resize, false);
document.body.appendChild(canvas);
(function draw() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate((Date.now()%1000)/500*Math.PI)
    ctx.fillRect(-100,-100,200,200)
    /*              Fade BG
    ctx.save();
    ctx.globalAlpha = 0.15;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    */


    ctx.restore();
    window.requestAnimationFrame(draw);
})();



console.log("Audio Visualizer Bookmarklet successfully loaded!")