var canvas;
var ctx;

function init() {
    try {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
    } catch(error) {
        console.error(`Unable to initialize canvas.\n${error}`);
    }
}

function draw(game, n, prms) {
    let a = game.origin();
    game.setSize(300, 300);
    ctx.fillStyle = "#000000";
    for(let i = 0; i < n; i++) {
        ctx.fillRect(a.X, a.Y, 0.5, 0.5);
        a = game.next(a, prms);
    }
}

function clear() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 300, 300);
}