windowWidth = window.innerWidth;
windowHeight = window.innerHeight;
let FPS = 60;
let canvas;
let ink = [];
let x1 = 0; y1 = 0, x2 = 0, y2 = 0, angle = 0;
let displayarm = false;
let drawspeed = 1;

let nam = {
    started: false,
    old_x: 0,
    old_y: 0,
    new_x: 0,
    new_y: 0,
}

function setup(){
    canvas = createCanvas(1000,1000, WEBGL);
    canvas.parent('mainDiv');
    canvas.id('mainCanvas');

    frameRate(FPS);
    background(0);
}

function setSpeed(s){
    drawspeed = s;
}

function resetvalues(){
    x1 = 0; y1 = 0, x2 = 0, y2 = 0, angle = 0;
    nam = {
        started: false,
        old_x: 0,
        old_y: 0,
        new_x: 0,
        new_y: 0,
    }
    ink = [];
    displayarm = false;
    drawspeed = 1;
    eval(code_field);
}

function displayVectors(){
    x1 = 0; y1 = 0, x2 = 0, y2 = 0, angle = 0;
    push();
    stroke(255);
    strokeWeight(1);
    for (var i = 0; i < mainArm.vectors; i++){
        var vec = mainArm.pos(i);

        angle += vec.angle;
        if(i != 0){
            angle+=mainArm.pos(i-1).angle;
        }

        if(angle > 2 * Math.PI) angle -= 2 * Math.PI;
        if(angle < 0) angle += 2 * Math.PI;

        x2 += vec.length * Math.cos(angle);
        y2 += vec.length * -Math.sin(angle); //negative is up in WebGL
        if(displayarm) line(x1,y1,x2,y2);
        x1 = x2;
        y1 = y2;
    }
    pop();
}

function displayInk(){
    push();
    stroke(0,255,0);
    strokeWeight(2);
    if(displayarm){
        ink.push([x1,y1]);
        if(ink.length > 1000){
            ink.shift();
        }
        var i = ink.length-1;
        //print(i,ink);
        for (i; i > 0; i--){
            line(ink[i][0],ink[i][1],ink[i-1][0],ink[i-1][1]);
        }
    } else {
        if(!nam.started){
            nam.started = true;
            nam.old_x = x1;
            nam.old_y = y1;
            pop();
            return;
        }
        nam.new_x = x1;
        nam.new_y = y1;
        line(nam.new_x,nam.new_y,nam.old_x,nam.old_y);
        nam.old_x = x1;
        nam.old_y = y1;
    }
    pop();
}

//updates canvas in between frames when sped up
function drawSequence(s){
    for(var i = 0; i < s; i++){
        displayVectors();
        displayInk();
        mainArm.proceed(FPS);
    }
}

function draw(){
    if(displayarm) background(0);
    if(reset_canvas){
        resetvalues();
        background(0);
        reset_canvas = false;
    }
    if(mainArm == null) return;
    
    drawSequence(drawspeed);
}