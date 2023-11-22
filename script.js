
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
   div.style.backgroundColor ='transparent';


}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            
            x : event.clientX
    
        };

        div.style.position = "relative";
        div.style.left = (mousePosition.x + offset[0]) + 'px';


        div.style.margin ='0';
        div.style.backgroundColor ='rgb('+mousePosition.x+', 80, 80)';


        console.log("ddd");
  
    }
}, true);


const swipeableDiv = document.getElementById('test');
let startX = 0;
let endX = 0;

let isSwiping = false;

swipeableDiv.addEventListener('mousedown', handleStart);
swipeableDiv.addEventListener('touchstart', handleStart);

function handleStart(event) {
    event.preventDefault(); // Prevent default behavior like text selection

    startX = (event.type === 'mousedown') ? event.clientX : event.touches[0].clientX;

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
}

function handleMove(event) {
    endX = (event.type === 'mousemove') ? event.clientX : event.touches[0].clientX;

    // If the user moves the pointer, consider it a swipe
    isSwiping = true;
}

function handleEnd() {
    // Check if it was a swipe and not a simple click
    if (isSwiping) {
        const swipeDistance = startX - endX;

        // You can adjust this threshold to determine when to consider it a swipe
        const swipeThreshold = 150;

//if swipe to right or left :
//Math.abs(swipeDistance) > swipeThreshold
//if swipe to left only:
//swipeDistance > swipeThreshold
// another version : swipeDistance > -swipeThreshold

        if (swipeDistance > swipeThreshold) {
            // Swipe left or right detected, delete the div
            swipeableDiv.remove();
        }
    }

    // Reset coordinates and remove event listeners
    startX = 0;
    endX = 0;
    isSwiping = false;
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchend', handleEnd);
}


function detailme(detail)
{
    alert("hello  " + detail );
}