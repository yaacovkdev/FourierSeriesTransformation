windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
let FPS = 60;
let canvas;
let ink = [];
let x1 = 0; y1 = 0, x2 = 0, y2 = 0, angle = 0;

function setup(){
    canvas = createCanvas(1000,1000, WEBGL);
    canvas.parent('mainDiv');
    canvas.id('mainCanvas');
    frameRate(FPS);
    background(0);
}

function displayvectors(){
    x1 = 0; y1 = 0, x2 = 0, y2 = 0, angle = 0;
    push();
    stroke(255);
    strokeWeight(1);
    for (var i = 0; i < mainArm.vectors; i++){
        var vec = mainArm.pos(i);
        angle += vec.angle;

        if(angle > 2 * Math.PI) angle -= 2 * Math.PI;
        if(angle < 0) angle += 2 * Math.PI;

        x2 += vec.length * Math.cos(angle);
        y2 += vec.length * Math.sin(angle);
        line(x1,y1,x2,y2);
        x1 = x2;
        y1 = y2;
    }
    pop();
}

function displayink(){
    ink.push([x1,y1]);
    if(ink.length > 3000){
        ink.shift();
    }
    push();
    stroke(0,255,0);
    strokeWeight(2);
    var i = ink.length-1;
    //print(i,ink);
    for (i; i > 0; i--){
        line(ink[i][0],ink[i][1],ink[i-1][0],ink[i-1][1]);
    }
    pop();
}

function draw(){
    background(0);
    displayvectors();
    displayink();
    mainArm.proceed(FPS);
}