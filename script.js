let canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const tool = canvas.getContext("2d");

let mousedown = false;



canvas.addEventListener("mousedown",function(e){
    mousedown = true;
    tool.beginPath();
    tool.moveTo(e.clientX,getCoordinates(e.clientY));
     
});
canvas.addEventListener("mousemove",function(e){

    if(mousedown){
        tool.lineTo(e.clientX,getCoordinates(e.clientY));
        tool.stroke();
    }

}) 

canvas.addEventListener("mouseup",function(e){
    mousedown = false;
    
});



function getCoordinates(y){
    let bounds = canvas.getBoundingClientRect();
    return y-bounds.y;

}

let tools = document.querySelectorAll(".tool-image");
console.log(tool[0]);

for(let i=0 ; i<tools.length;i++){
    

    tools[i].addEventListener("click",function(e){
        let cTool = e.currentTarget;
        let name = cTool.getAttribute("id");

        if(name == "pencil"){
            tool.strokeStyle = "black";
        }
        else if(name == "eraser"){
            tool.strokeStyle = "white";
        }

    })

}

//sticky code

let navbar = document.querySelector(".navbar");
let stickyPad = document.querySelector(".stickypad");
let minimized = document.querySelector(".minimize");
let textarea = document.querySelector(".text-area");
let close = document.querySelector(".close");
let initialX = null;
let initialy = null;
let isStickydown = false;
let isMinimized = false;

navbar.addEventListener("mousedown",function(e){
    //initial point
    initialX = e.clientX;
    initialy = e.clientY;
    isStickydown = true;

})

canvas.addEventListener("mousemove",function(e){
    if(isStickydown == true){
        //final point
    let finalX = e.clientX;
    let finalY = e.clientY;
    //distance
    let dx = finalX-initialX;
    let dy = finalY-initialy;
    //move sticky,original top,left
    let {top , left} = stickyPad.getBoundingClientRect();
    stickyPad.style.top = top+dy+"px";
    stickyPad.style.left = left+dx+"px";
    initialX = finalX;
    initialy = finalY;

    }
    

})

window.addEventListener("mouseup",function (){

    isStickydown = false;

})

close.addEventListener("click",function(){
    stickyPad.remove();
})


minimized.addEventListener("click",function(){
    if(isMinimized){
        textarea.style.display = "none";
    }
    else{
        textarea.style.diplay = "";
    }
    isMinimized = !isMinimized;
})
























