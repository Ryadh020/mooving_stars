// GET IN THE DOM :
const stars = document.querySelector("main");
let degree = 5;

// FUCTIONS ////////////////////////////////////////

/* mini star */
function miniStar(ev) {
    let x = ev.clientX /2;
    let y = ev.clientY /2
    
    ev.target.style.color = "rgb("+x+","+y+",10)";
    ev.target.style.fontSize = "3rem";
}
/* maxi star */
function maxiStar(ev) {
    ev.target.style.color = "greenyellow";
    ev.target.style.fontSize = "4rem";
}
/*rotate stars */
function rotate(i) {
    setInterval(()=> {
        setTimeout(()=> {
            stars.childNodes[i].style.transform = 'rotate('+degree+'deg)';
            degree+=5;
        },100)
    },120)
}

// PLAY WITH THE STARS ///////////////////////////

for(let i=1; i<=29; i++){
    stars.addEventListener("mouseover",(ev)=> {
        miniStar(ev)
    })
    stars.addEventListener("mouseout",(ev)=> {
        maxiStar(ev)
    })
    rotate(i);
    

}


