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
        else if(name == "sticky"){
            createSticky();
        }

    })

}

//sticky code



function createSticky(){
//     <!-- <div class="stickypad">
//     <div class="navbar">
//         <div class="close"></div>
//         <div class="minimize"></div>
//     </div>
//     <div class="text-area">
//         <textarea name="" id="" cols="30" rows="10"></textarea>
//     </div>
// </div> -->
    
    let stickypad = document.createElement("div");
    let navBar = document.createElement("div");
    let Close = document.createElement("div");
    let minimize = document.createElement("div");
    let textbox = document.createElement("div");
    let textarea = document.querySelector("textarea");
    //add Classes
  
    stickypad.setAttribute("class","stickypad");
    navBar.setAttribute("class","nav-bar");
    Close.setAttribute("class","close");
    minimize.setAttribute("class","minimize");
    textbox.setAttribute("class","text-area");
    //create Subtree
    stickypad.appendChild(navBar);
    stickypad.appendChild(textbox);
    navBar.appendChild(minimize);
    navBar.appendChild(Close);
    //add subtree to the page
    document.body.appendChild(textarea);


// let initialX = null;
// let initialy = null;
// let isStickydown = false;
// let isMinimized = false;

// navbar.addEventListener("mousedown",function(e){
//     //initial point
//     initialX = e.clientX;
//     initialy = e.clientY;
//     isStickydown = true;

// })

// canvas.addEventListener("mousemove",function(e){
//     if(isStickydown){
//         //final point
//     let finalX = e.clientX;
//     let finalY = e.clientY;
//     //distance
//     let dx = finalX-initialX;
//     let dy = finalY-initialy;
//     //move sticky,original top,left
//     let {top , left} = stickyPad.getBoundingClientRect();
//     stickyPad.style.top = top+dy+"px";
//     stickyPad.style.left = left+dx+"px";
//     initialX = finalX;
//     initialy = finalY;

//     }
    

// })

// navbar.addEventListener("mouseup",function(e){
//     isStickydown = false;
// })


// minimized.addEventListener("click",function(){
//     if(isMinimized){
//         textarea.style.display = "none";
//     }
//     else{
//         textarea.style.display = "block";
//     }
//     isMinimized = !isMinimized;
// })

// close.addEventListener("click",function(){

//     stickyPad.remove();

// })

    

}

































