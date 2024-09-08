console.log("script is working fine");


function slider(imgsrc){
    document.querySelector('.mainimg').src=imgsrc;
}

function description(text, price){
    document.querySelector(".herotext h1").innerHTML=text;
    document.querySelector(".herotext h5 ").innerHTML=price
}

let items=document.querySelectorAll('.box ')




