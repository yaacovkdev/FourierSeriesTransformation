A Program that visualizes Fourier Series Transformation. The html file has an input field for writing javascript code along with basic instructions. It allows you to add vector arms to the stack and rerun the animation.

You can visualize fourier series by writing the summation of math functions in the form of vector arms. Each function is to be interpreted as a vector with set length and constant rotation speed.

Intended use of the JavaScript Code Textfield is writing:
//--------------------------------------------
mainArm.push(arm_length, rotation_speed_rpm);
//--------------------------------------------

You can also choose to start the arm at certain position by writing:
//-----------------------------------------------------------
mainArm.push(arm_length, rotation_speed_rpm, starting_angle);
//-----------------------------------------------------------
Note: starting_angle uses radiant units (from 0 to 2PI). Following the mainArm stack of vectors, the angle rotation is relative to the rotation of the previous vector.

Example: You can see the visuals of PI being an irregular number by deleting the last 2 lines and writing:
//------------------------------------------------
mainArm.push(200,Math.pow(Math.E, 0.5));
mainArm.push(200,Math.pow(Math.E, 0.5 * Math.PI));
//------------------------------------------------

To speed up the drawing, write:
//----------
setSpeed(n);
//----------
to set the speed of the rendering by n times. Default n = 1. Use this to avoid writing large vector rotation speed, which can render rough drawings.

To display the vector arm write:
//----------------
displayArm = true;
//----------------
Note: This is experimental feature and resource heavy when used with setSpeed function.

Remember that all math you put in the function has to follow vanilla JavaScript syntax. The canvas size is 1000px^2 so to keep the drawing within the canvas, you must have the sum of arms no more than 500.