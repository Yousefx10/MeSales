var mousePosition;
var offset = [0,0];
var div;
var isDown = false;


div = document.getElementById("test");
div.style.position = "sticky";
// div.style.left = "0px";
// div.style.top = "0px";
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "blue";



div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
    div.style.margin ='auto';
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            
            x : event.clientX
    
        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.margin ='0';
        // div.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);