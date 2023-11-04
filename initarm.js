//vector arm
//here you can construct many cool equations
let mainArm = new VectorArm();
var length = 200;
var rpm = 20;
while(length > 1){
    mainArm.push(new Vector(length, rpm));
    length /= 2;
    rpm--;
    //rpm *=1;
}
