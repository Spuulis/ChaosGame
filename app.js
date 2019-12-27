var canvas;
var ctx;

function init() {
    try {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
    } catch(error) {
        console.error(`Unable to initialize canvas...\n${error}`);
    }
}