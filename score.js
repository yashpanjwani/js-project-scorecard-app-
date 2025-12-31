let homeCount=0
let  guestCount=0
let h1=document.getElementById("b1")
let h2=document.getElementById("b2")



function homecounter1(){
    homeCount++
    h1.innerText=homeCount
}
function homecounter2(){
    homeCount+=2
    h1.innerText=homeCount
}
function homecounter3(){
    homeCount+=3
    h1.innerText=homeCount
}



function guestcounter1(){
    guestCount++
    h2.innerText=guestCount
}
function guestcounter2(){
    guestCount+=2
    h2.innerText=guestCount
}
function guestcounter3(){
    guestCount+=3
    h2.innerText=guestCount
}  