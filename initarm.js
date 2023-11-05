let code_field = "";
let reset_canvas = false;
let mainArm;

let initial_code = "/*In this field you can program in js anything you like and\nset mainArm vectors with any type of algorithms*/\n//vector arm\nmainArm = new VectorArm();\n\n//first vector having length of 100 px and rotating at speed of 2/(2 PI) per frame\n//starting at PI/2\nmainArm.pushA(100,2,Math.PI/2);\n\nmainArm.push(10,30);";
document.getElementById("codefield").value = initial_code;
code_field = document.getElementById("codefield").value;
eval(code_field);

document.getElementById("buttonfield").onclick = function() {
    reset_canvas = true;
    code_field = document.getElementById("codefield").value;
}