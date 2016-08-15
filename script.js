var theRightSide = document.getElementById("rightSide");
var theLeftSide = document.getElementById("leftSide");
var numberOfFaces = 5;
var img="circle.png";
function generateFaces() {
    for (var i=0; i< numberOfFaces; i++ ) {
        var image = document.createElement("img");
        image.src = img;
        image.style.height = "50px";
        image.style.top = Math.random() * 400 + "px";
        image.style.left = Math.random() * 400 + "px";
        theLeftSide.appendChild(image);
    }

}
generateFaces();