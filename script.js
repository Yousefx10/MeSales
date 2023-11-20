
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


var oldx = 0;

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


        console.log("ddd");
  
    }
}, true);



const swipeableDiv = document.getElementById('test');
let startX = 0;
let endX = 0;

swipeableDiv.addEventListener('mousedown', handleStart);
swipeableDiv.addEventListener('touchstart', handleStart);

function handleStart(event) {
    if (event.type === 'mousedown') {
        startX = event.clientX;
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
    } else if (event.type === 'touchstart') {
        startX = event.touches[0].clientX;
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    }
}

function handleMove(event) {
    endX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
}

function handleEnd() {
    const swipeDistance = startX - endX;

    // You can adjust this threshold to determine when to consider it a swipe
    const swipeThreshold = 50;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        // Swipe left or right detected, delete the div
        swipeableDiv.remove();
    }

    // Reset coordinates and remove event listeners
    startX = 0;
    endX = 0;
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
}