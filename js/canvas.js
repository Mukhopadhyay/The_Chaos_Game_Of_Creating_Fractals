let canvas = document.getElementById("triangle");
let c = canvas.getContext("2d");

console.log(canvas);

let w = 450; //window.innerWidth;
let h = 450; //window.innerHeight;
c.strokeStyle = "black";

canvas.width = w;
canvas.height = h;

//Drawing the triangle
c.beginPath();
c.moveTo(w/2, 0);
c.lineTo(0, h);
c.lineTo(w, h);
c.lineTo(w/2, 0);
c.strokeStyle = "black";
c.lineWidth = 1;
c.stroke();

//Drawing the first dot
c.beginPath();
c.arc(w/2, h/2, 1, 0, Math.PI*2, false);
c.stroke();
c.fill();

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let first = new Point(w/2, 0);
let second = new Point(0, h);
let third = new Point(w, h);

let lastPoint = new Point(w/2, h/2);

let temp = new Point();
function play() {
    console.log("Button clicked!");
    let num = Math.floor(Math.random() * 3) + 1;

    // console.log(lastPoint);
    // let temp = getMidpoint(lastPoint, first);
    // console.log(temp.x , temp.y);

    if(num == 1) {
        temp = getMidpoint(lastPoint, first);
        drawCircle(temp, "black");
    }
    if(num == 2) {
        temp = getMidpoint(lastPoint, second);
        drawCircle(temp, "grey");
    }
    if(num == 3) { 
        temp = getMidpoint(lastPoint, third);
        drawCircle(temp, "red");
    }
    lastPoint = temp;
}
function drawCircle(temp, a) {
    c.beginPath();
    c.arc(temp.x, temp.y, 1, 0, Math.PI*2, false);
    c.strokeStyle = a;
    c.stroke();
    c.fillStyle = a;
    c.fill();
}
function getMidpoint(a,b) {
    let tempX = Math.floor((a.x + b.x) / 2);
    let tempY = Math.floor((a.y + b.y) / 2);

    return new Point(tempX, tempY); 
}
function auto() {
    setInterval(play, 1);
}