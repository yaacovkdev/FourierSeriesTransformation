A Program that visualizes Fourier Series Transformation. The html file has an input field for writing javascript code along with basic instructions. It allows you to add vector arms to the stack and rerun the animation.

Example: You can see the visuals of PI being an irregular number by deleting the last 2 lines and writing:

//-----------------------------------------------
mainArm.push(200,Math.pow(Math.E, 0.5));

mainArm.push(200,Math.pow(Math.E, 0.5 * Math.PI));
//-----------------------------------------------

To speed up the drawing, you can multiply the second arguement for both mainArm functions by the same number.

Write:

//---------------------
displayArm