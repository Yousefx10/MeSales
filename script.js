
var mousePosition;
var offset = [0,0];
var div;
var isDown = false;


//div = document.getElementById("test");
//div.style.position = "sticky";
var currentDIV,currentDIVitemID="none";


function mousedownCOLOR(eh,event){
    currentDIV=document.getElementById(eh.id);
    currentDIVitemID=document.getElementById(eh.id).getAttribute('data-itemid');
    isDown = true;
    
   // currentDIV.style.position = "sticky";
        offset = [
            currentDIV.offsetLeft - event.clientX
        ];
         swipeableDiv = currentDIV;
        // swipeableDiv.addEventListener('mousedown', handleStart);
        // swipeableDiv.addEventListener('touchstart', handleStart);

        document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);

document.addEventListener('mouseup', handleEnd);
document.addEventListener('touchend', handleEnd);
        



}

var oldx = 0;

document.addEventListener('mouseup', function() {
   if(isDown)
   {
    isDown = false;
   currentDIV.style.margin ='auto';
   currentDIV.style.position = "sticky";
   currentDIV.style.backgroundColor ='transparent';
   currentDIV.style.left ='0';
   
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
    // if(endX<0)endX=0;
    // If the user moves the pointer, consider it a swipe
    //console.log(endX);

    if(isDown)
     isSwiping = true;
}

function handleEnd() {
    // Check if it was a swipe and not a simple click
    if (isSwiping) {
        const swipeDistance = startX - endX;

        // You can adjust this threshold to determine when to consider it a swipe
        const swipeThreshold = 200;

//if swipe to right or left :
//Math.abs(swipeDistance) > swipeThreshold
//if swipe to left only:
//swipeDistance > swipeThreshold
// another version : swipeDistance > -swipeThreshold
console.log("distance" + swipeDistance)
console.log("swipeThreshold" + swipeThreshold)
        if (swipeDistance > swipeThreshold) {
            // Swipe left or right detected, delete the div
            swipeableDiv.remove();
            if(currentDIVitemID!="none")
            {
                var removvvvvve = currentINSIDEmenu.indexOf(currentDIVitemID);
                console.log(removvvvvve);
                currentINSIDEmenu.splice(removvvvvve,1);
            }


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
//current items inside the menu, this should be automatically changes everytime new item added or removed.
var currentINSIDEmenu=[];

function detailme(detail,price,currentID)
{
    //detail+=generalID;
    generalID++;
if(currentINSIDEmenu.includes(currentID))
{
var nownumber = parseInt(document.getElementById("ID"+currentID).innerHTML);
    document.getElementById("ID"+currentID).innerHTML=(++nownumber);
}
else{
    currentINSIDEmenu.push(currentID);
    var newResult=
    
    "<span id='ID"+currentID+"'style='float: left;'>1</span>"+
    "<span style='float: right'>"+detail+"</span>"+
    "<span style='display: block;clear:both'>---"+ price + "$ ---</span>"+
    "<hr style='width: 70%;'/>";


    appendElement("div","","showHERE",detail,currentID);




    document.getElementById(detail).innerHTML=newResult;

    document.getElementById(detail).addEventListener('mousedown', function(event) {
        // Call your normal function and pass the event object
        mousedownCOLOR(document.getElementById(detail),event);
    });

    document.getElementById(detail).addEventListener('mousedown', handleStart);
    document.getElementById(detail).addEventListener('touchstart', handleStart);
}


//generalID++;

}





function appendElement (elemNode,textNode,containerToAppend,newID,currentID) {
    var container = document.getElementById(containerToAppend);
    var element = document.createElement(elemNode);
    var text = document.createTextNode(textNode);

    element.setAttribute('class', 'results-item;');
    element.setAttribute('style', 'width: 90%;margin:auto');
    element.setAttribute('id', newID);
    element.setAttribute('data-itemid', currentID);


    //element.appendChild(text);
    container.appendChild(element);
}


var generalID=0,
currentSCREEN="mainmenu";
//current screen is a short way to hide it when moving to a new screen"page".


//changing switching between screen functions
function done(btn)
{
    console.log(currentSCREEN);

    //document.getElementById(currentSCREEN).style.display="none";
    //document.getElementById(btn.value).style.display="block";
    currentSCREEN=  btn.value;
    if(currentSCREEN=="printoption")
    {
        btn.innerHTML="back";
        btn.value="mainmenu";
        document.getElementById("optionsdiv").style.visibility="hidden";

    }
    else if (currentSCREEN=="mainmenu")
    {
        btn.innerHTML="complete";
        btn.value="printoption";
        document.getElementById("optionsdiv").style.visibility="visible";
    }
    else if(currentSCREEN=="settings"){

        //btn.innerHTML="complete";
        document.getElementById("results").style.visibility="hidden";
        btn.style.backgroundColor="yellow";
        document.getElementById("btnmenu").style.backgroundColor="transparent";

        //btn.value="complete";
    }
    else{
        document.getElementById("results").style.visibility="visible";
        btn.style.backgroundColor="yellow";
        document.getElementById("btnsettings").style.backgroundColor="";
    }






}