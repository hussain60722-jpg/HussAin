document.addEventListener("DOMContentLoaded",function(){
    const title=document.getElementById("main-title");
    title.style.color="blue";
    const message=document.getElementByClassname("message");
    message[0].style.fontweight="bold";
    const paragraphs=document.getElementsByTagName("p");
    paragraphs[1].style.color="green";
    const firstBox=document.querySelector(".box");
    firstBox.classList.add("highlight");
    const allBoxes=document.querySelectorAll(".box");
    allBoxes.forEach(box=>{
        box.style.border="1px solid black";
    });
    const button=document .getElementById("changeButton");
    button.addEventListener("click",()=>{
        title.textContent="text changed with javascript!";
        title.style.color="red";
    });
})

    

