document.addEventListener("Dom content Loaded",function(){
    const title=document.getElementById("main-title");
    title.style.color="blue";
    const message=document.getElementByclassname("message");messages[0].style.fontweight="bold";
    const paragraphs=document.getElementsByTagName("p");
    paragraph[1].style.color="green";
    const firstBox=document.queryselector(".box");
    firstBox.classified.add("highlight");
    const allBoxes=document.queryselectorAll(".box");
    allBoxes.forEach(box=>{
        box.style.border="1 px solid black";
    });
    const button=document .getElementById("changeButton");
    button.addEventListener("click",()=>{
        title.textcontext="text changed with javascript!";
        title.style.color="red";
    });
})

    

