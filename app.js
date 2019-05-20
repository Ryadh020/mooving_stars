// GET IN THE DOM :
const stars = document.querySelector("main");
let degree = 0.5;

// FUCTIONS ////////////////////////////////////////

/* mini star */
function miniStar(ev) {
    let x = ev.clientX /2;
    let y = ev.clientY /2

    ev.target.style.color = "rgb("+x+","+y+",80)";
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
        /*stars.childNodes[i].innerHTML = "&#xf669;"*/
        stars.childNodes[i].style.transform = 'rotate('+degree+'deg)';
        degree+=0.5;
        //setTimeout(()=> {
            
        //},100)
    },100)
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


