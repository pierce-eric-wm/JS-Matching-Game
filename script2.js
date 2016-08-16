var theRightSide = document.getElementById("rightSide");
var theLeftSide = document.getElementById("leftSide");
var numberOfFaces = 5;
var img="circle.png";
var theBody = document.getElementsByTagName("body")[0];

function generateFaces() {
    for (var i=0; i< numberOfFaces; i++ ) {
        var image = document.createElement("img");
        image.src = img;
        image.style.height = "50px";
        image.style.top = Math.random() * 400 + "px";
        image.style.left = Math.random() * 400 + "px";
        theLeftSide.appendChild(image);
    }

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.childNodes[leftSideImages.childNodes.length - 1]);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.onclick= function nextLevel(event){
        event.stopPropagation();
        numberOfFaces += 5;
        while(theLeftSide.firstChild){
            theLeftSide.removeChild(theLeftSide.firstChild)
        };
        while(theRightSide.firstChild){
            theRightSide.removeChild(theRightSide.firstChild)
        };
        generateFaces();
    };

};

theBody.onclick = function gameOver() {
    alert("Game Over!");

    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};

generateFaces();
//timer
var timer  = document.getElementsById('h1')[0],
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}