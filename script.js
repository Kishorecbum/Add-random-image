const img1=document.querySelector(".img1")
const btn=document.querySelector(".btn")
 btn.addEventListener("click",()=>{
    imgnum=10;
addnewimg()

 });

 function addnewimg(){

    for (let index = 0; index < imgnum; index++) {
        
        const newimg=document.createElement("img");
        newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        img1.appendChild(newimg);
    }
 }
 