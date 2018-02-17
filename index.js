var source = document.getElementsByTagName("video")[0];
if (!source) throw new Error("Audio Visualizer Bookmarklet: No audio source currently present on webpage.")

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
var analyser = audioCtx.createAnalyser()
source = audioCtx.createMediaElementSource(source)
analyser.connect(audioCtx.destination)
source.connect(analyser)

const canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
(canvas.resize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;        
})()
Object.assign(canvas.style, {
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        left: 0,
        top: 0,
        zIndex: 16777271,
        pointerEvents: "none"
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