// GET IN THE DOM :
const stars = document.querySelector("main");
let degree = 5;

/* play with the stars*/
for(let i=1; i<=29; i++){
    stars.childNodes[i].style.color = "green";
    
    setInterval(()=> {
        setTimeout(()=> {
            stars.childNodes[i].style.transform = 'rotate('+degree+'deg)';
            degree+=5;
        },100)
    },110)
    stars.childNodes[1].style.transform = 'rotate('+degree+'deg)';


    if( (i>=8 && i<=10) || (i>=20 && i<=22) || i=== 14 || i===16)  {
        stars.childNodes[i].style.color = "blue";
    }
}


