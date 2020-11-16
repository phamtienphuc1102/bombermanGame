var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var BomBerMan = new Image();
var Bom = new Image();
var Brick = new Image();
var Environment = new Image();
var Grass = new Image();

var bomImage = ['./bom/bomb.png', './bom/explosion/explosion-center.png'];
BomBerMan.src = './bomberman/bomberman-move.png';
Brick.src = './tuong/brick.png';
//Bom.src = './bom/bomb.png'; 
Environment.src = './tuong/environment.png';
Grass.src = './sprites/grass.png';
var ctx = null;


var gameMap = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,2,2,0,2,0,0,1,0,2,0,2,0,2,0,0,2,0,2,0,2,0,0,0,1,
1,0,1,0,1,0,1,2,1,0,1,0,1,2,1,2,1,0,1,0,1,0,1,2,1,2,1,2,1,0,1,
1,0,0,3,2,0,0,0,0,0,2,2,2,0,0,2,0,0,1,0,0,0,2,0,2,0,2,0,2,0,1,
1,0,1,0,1,0,1,0,1,0,1,2,1,0,2,0,1,2,1,2,1,0,1,0,1,0,1,0,1,2,1,
1,7,0,0,0,0,0,0,0,0,0,3,0,2,2,0,0,2,0,0,2,0,0,0,1,0,0,0,0,0,1,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2,1,0,1,2,1,0,1,0,1,0,1,
1,2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,
1,0,1,0,1,0,1,0,1,2,1,0,1,0,1,0,1,2,1,2,1,0,1,0,1,0,1,0,1,0,1,
1,2,0,0,0,0,2,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,2,1,0,1,0,1,0,1,0,1,0,1,0,1,2,1,0,1,0,1,0,1,0,1,0,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
];
var tileW = 45, tileH = 45;
var mapW = 31, mapH = 13;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var arr = 0;
var man = {
    i: 0,
    x: 50,
    y: 50,     
    speed: 5,     
}
var wall = {
    x: 0,
    y: 0,
}
var bom = {
    i: 0,
    x: 0,
    y: 0, 
}
function drawMan() {
    context.drawImage(BomBerMan, man.i, 0, 14, 34,
     man.x, man.y, 40, 80);
}
function drawBom() {
    //bom.src = bomImage[0];
    Bom.src = './bomberman/bomberman-dead7.png';
    context.drawImage(Bom, 0, 0, 19, 30, bom.x, bom.y, 40, 60);
    requestAnimationFrame(drawBom);
    //setTimeout(drawBom, 3000);
}
function drawMap()
{
	for(var y = 0; y < mapH; ++y)
	{
		for(var x = 0; x < mapW; ++x)
		{
            var temp = 15;
            switch(gameMap[((y*mapW)+x)])
			{
                case 0:
                    context.drawImage(Grass, 0, 0, temp, temp,
                        x*tileW, y*tileH, tileW, tileH);
                    break;
				case 1:
                    context.drawImage(Environment, 0, 0, temp, temp,
                        x*tileW, y*tileH, tileW, tileH);
                    break;
                case 2:
                    context.drawImage(Brick, 1, 1, 16, 16, x*tileW, 
                        y*tileH, tileW, tileH);
                    break;
			}
		}
	}
}

document.addEventListener('keydown', function(event) {
    console.log('KEY DOWN');
    console.log(event);
    var x = (man.x-man.x%tileW)/tileW;
    var y = (man.y-man.y%tileH)/tileH;
    var x1 = ((man.x+30)-(man.x+30)%tileW)/tileW;
    var y1 = ((man.y+35)-(man.y+35)%tileH)/tileH;

    if(event.key == "ArrowRight" ) {
        var x0 = ((man.x-5)-(man.x-5)%tileW)/tileW;
        if(gameMap[((y*mapW)+x0+1)]==0 && gameMap[((y1*mapW)+x1)]==0 
           &&gameMap[((y1*mapW)+x0+1)]==0){
            man.x += man.speed;
            arr++;
            man.i = 47 + arr%3 * 17 ;
        }
    } 
    if(event.key == "ArrowLeft" ) {
        var x2 = ((man.x+40)-(man.x+40)%tileW)/tileW;
        if(gameMap[((y*mapW)+x)]==0 && gameMap[((y1*mapW)+x2-1)]==0
        && gameMap[((y*mapW)+x2-1)]==0){
            man.x -= man.speed;
            arr++;
            if(arr%3==2){
                man.i = arr%3 * 15 + 3;
            }
            else man.i = arr%3 * 15 + 1;
        }
    }
    if(event.key == "ArrowDown" ) {
        var y0 = ((man.y-2)-(man.y-2)%tileH)/tileH;
        if(gameMap[(((y0+1)*mapW)+x)]==0 && gameMap[(((y1)*mapW)+x1)]==0
            && gameMap[(((y0+1)*mapW)+x1)]==0){
            man.y += man.speed;
            arr++;
            man.i = 97 + arr%3 * 16;     
        }
        
    }
    if(event.key == "ArrowUp" ) {
        var y2 = ((man.y+40)-(man.y+40)%tileH)/tileH;
        if(gameMap[(((y2-1)*mapW)+x)]==0 && gameMap[(((y2-1)*mapW)+x1)]==0
            && gameMap[(((y1)*mapW)+x1)]==0){
            man.y -= man.speed;
            arr++;
            man.i = 144 + arr%3 * 16;     
        }
    }
})

function drawGame() {
    context.clearRect(0, 0, 700, 500);
    drawMap();
    
    document.addEventListener('keydown', function(event) {
        if(event.key == "x") {
            bom.i += 19;
            bom.x = ((man.x+22)-(man.x+22)%tileW);
            bom.y = ((man.y+22)-(man.y+22)%tileH)+5;
            //drawBom();
            if(bom.i==19*3) {
                bom.i = 0;
            }
            setTimeout("drawBom()", 500);
        }
    });
    drawMan();
    requestAnimationFrame(drawGame);
}
drawGame();
//setInterval("drawBom()", 1000);
