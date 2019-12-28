var canvas;
var ctx;

var thickness = 1.0;
var color = {"fg": "#000000", "bg": "#FFFFFF"};

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
    game.setSize(0.0 + canvas.width, 0.0 + canvas.height);
    ctx.fillStyle = color.fg;
    for(let i = 0; i < n; i++) {
        ctx.fillRect(a.X, a.Y, thickness, thickness);
        a = game.next(a, prms);
    }
}

function clear() {
    ctx.fillStyle = color.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setSize(width, height) {
    canvas.width = width;
    canvas.height = height;
}

function setThickness(th) {
    thickness = th;
}

function setColor(foreground, background) {
    try {
        if(/#[1234567890ABCDEFabcdef]{6}/.test(foreground) && /#[1234567890ABCDEFabcdef]{6}/.test(background)) {
            color.fg = foreground;
            color.bg = background;
        } else {
            throw "Invalid colors.";
        }
    } catch(error) {
        console.error(error);
    }
}