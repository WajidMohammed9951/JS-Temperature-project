const tempoCheck = document.querySelector("#tempoCheck");


const tempoBar = () =>{
    tempoCheck.innerHTML = "&#xf2cb";
 setTimeout(() => {
    tempoCheck.innerHTML = "&#xf2ca";
    tempoCheck.style.color = "yellow";
 }, 1000);
 setTimeout(() => {
    tempoCheck.innerHTML = "&#xf2ca";
 }, 2000);
 setTimeout(() => {
    tempoCheck.innerHTML = "&#xf2c9";
 }, 3000);
 setTimeout(() => {
    tempoCheck.innerHTML = "&#xf2c8";
 }, 4000);
 setTimeout(() => {
    tempoCheck.innerHTML = "&#xf2c7";
    tempoCheck.style.color = "red";
 }, 5000);
}
tempoBar(); 
setInterval(tempoBar, 6000);