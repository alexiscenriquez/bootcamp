let tanya = {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    imgFile: "images/image-tanya.jpg",
    quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`
}
let john = {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    imgFile: "images/image-john.jpg",
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`
}
let body = document.querySelector(".wrapper")
let pname = document.getElementById("name")
let prole = document.getElementById("role")
let pquote = document.getElementById("quote")
let pimg = document.getElementById("pic")
let toggle = document.getElementById("toggle")
let control=document.getElementById("control")
// let nextbtn=window.getComputedStyle(control,":before");
// let prevbtn=window.getComputedStyle(control,":after");
let next = false


document.onload = fillTanya();

function fillTanya() {
    pname.innerHTML = tanya.name;
    prole.innerHTML = tanya.role;
    pquote.innerHTML = tanya.quote
    pimg.style.backgroundImage = `url("images/image-tanya.jpg")`
}

function fillJohn(){
    pname.innerHTML = john.name;
    prole.innerHTML = john.role;
    pquote.innerHTML = john.quote
    pimg.style.backgroundImage = `url("images/image-john.jpg")`
}

control.addEventListener("click",(e)=>{
   let clickTarget=e.target;
   const clickTargetWidth = clickTarget.offsetWidth;
    const xCoordInClickTarget = e.clientX - clickTarget.getBoundingClientRect().left;
    if (clickTargetWidth / 2 > xCoordInClickTarget) {
    fillTanya()
    } else {
     fillJohn()
    }

})


