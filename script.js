
var mousePosition;
var offset = [0,0];
var div;
var isDown = false;


div = document.getElementById("test");
div.style.position = "sticky";



div.addEventListener('mousedown', function(e) {
    isDown = true;

    offset = [
        div.offsetLeft - e.clientX
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
    div.style.margin ='auto';
   div.style.position = "sticky";
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            
            x : event.clientX
    
        };

    //    console.log("A"+offset[0]);
        div.style.position = "relative";

        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.margin ='0';
    }
}, true);
