
var mousePosition;
var offset = [0,0];
var div;
var isDown = false;


//div = document.getElementById("test");
//div.style.position = "sticky";
var currentDIV;


function mousedownCOLOR(eh,event){
    currentDIV=document.getElementById(eh.id);
    isDown = true;
    
   // currentDIV.style.position = "sticky";
        offset = [
            currentDIV.offsetLeft - event.clientX
        ];
         swipeableDiv = currentDIV;
        swipeableDiv.addEventListener('mousedown', handleStart);
        swipeableDiv.addEventListener('touchstart', handleStart);

        document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);

document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);
        
console.log(eh.clientX);


}

var oldx = 0;

document.addEventListener('mouseup', function() {
   if(isDown)
   {
    isDown = false;
   currentDIV.style.margin ='auto';
   currentDIV.style.position = "sticky";
   currentDIV.style.backgroundColor ='transparent';
   
   }



}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
            
            x : event.clientX
    
        };

        currentDIV.style.position = "relative";
        currentDIV.style.left = (mousePosition.x + offset[0]) + 'px';


        currentDIV.style.margin ='0';
        currentDIV.style.backgroundColor ='rgb('+mousePosition.x+', 80, 80)';


       // console.log("ddd");
        //console.log(currentDIV.id);
        isSwiping=true;
    }
    

}, true);



let startX = 0;
let endX = 0;

var isSwiping = false;
// const swipeableDiv = document.getElementById('test');
// swipeableDiv.addEventListener('mousedown', handleStart);
// swipeableDiv.addEventListener('touchstart', handleStart);
var swipeableDiv;

function handleStart(event) {//done 1
    event.preventDefault(); // Prevent default behavior like text selection

    startX = (event.type === 'mousedown') ? event.clientX : event.touches[0].clientX;


// document.addEventListener('mousemove', handleMove);
// document.addEventListener('touchmove', handleMove);

// document.addEventListener('mouseup', handleEnd);
// document.addEventListener('touchend', handleEnd);
}





function handleMove(event) {
    endX = (event.type === 'mousemove') ? event.clientX : event.touches[0].clientX;
console.log("works");
    // If the user moves the pointer, consider it a swipe


    if(isDown)
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

        if (swipeDistance > -swipeThreshold) {
            // Swipe left or right detected, delete the div
            swipeableDiv.remove();
            console.log(swipeDistance);
            console.log(swipeThreshold);
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


function detailme(detail,price)
{
    detail+=generalID;
    generalID++;
    console.log(generalID);
    var newResult=
    
    "<span style='float: left;'>[O]</span>"+
    "<span style='float: right'>"+detail+"</span>"+
    "<span style='display: block;clear:both'>---"+ price + "$ ---</span>"+
    "<hr style='width: 70%;'/>";


    appendElement("div","","results",detail);




    document.getElementById(detail).innerHTML=newResult;

    document.getElementById(detail).addEventListener('mousedown', function(event) {
        // Call your normal function and pass the event object
        mousedownCOLOR(document.getElementById(detail),event);
    });
}





function appendElement (elemNode,textNode,containerToAppend,newID) {
    var container = document.getElementById(containerToAppend);
    var element = document.createElement(elemNode);
    var text = document.createTextNode(textNode);

    element.setAttribute('class', 'results-item;');
    element.setAttribute('style', 'width: 90%;margin:auto');
    element.setAttribute('id', newID);


    //element.appendChild(text);
    container.appendChild(element);
}


var generalID=0;