var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var BomBerMan = new Image();
var Bom = new Image();
var Wall = new Image();

BomBerMan.src = './bomberman/bomberman-move.png';
Wall.src = './tuong/environment.png';
Bom.src = './' 

var arr=0;

var man = {
    i:0,
    x: 300,
    y: 30,     
    speed: 10,     
}
var wall = {
    x: 0,
    y: 0,
}
function drawMan() {
    context.drawImage(BomBerMan, man.i, 0, 16, 30, man.x, man.y, 30, 60);
}function drawWall() {
    context.drawImage(Wall,0, 0, 16, 30, wall.x, wall.y, 30, 60);
}
function drawBom() {
    context.drawImage(Bom, 0, 0, max.x, man.y, 30, 60);
}

document.addEventListener('keydown', function(event) {
    console.log('KEY DOWN');
    console.log(event);
    if(event.key == "ArrowRight") {
        man.x += man.speed;
        arr++;
        man.i = 47 + arr%3 * 17 ;
    } 
    if(event.key == "ArrowLeft") {
        man.x -= man.speed;
        arr++;
        man.i = arr%3 * 15;
    }
    if(event.key == "ArrowUp") {
        man.y -= man.speed;
        arr++;
        man.i = 144 + arr%3 * 16;
    }
    if(event.key == "ArrowDown") {
        man.y += man.speed;
        arr++;
        man.i = 97 + arr%3 * 16;
    }
    if(event.key == " ") {
        drawBom();
    }

})

function draw() {
    context.clearRect(0, 0, 700, 400);
    drawMan();
    drawWall();
    requestAnimationFrame(draw);
}

draw();