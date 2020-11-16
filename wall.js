var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var Wall = new Image();
Wall.src = './tuong/environment.png';
var wall = {
    x: 0,
    y: 0,
}

function drawWall() {
    context.drawImage(Wall,0, 0, 16, 30, wall.x, wall.y, 30, 60);
}

function draw() {
    //context.clearRect(0, 0, 700, 400);
    drawWall();
    //drawBom();
    //drawMan();
    requestAnimationFrame(draw);
}

draw();