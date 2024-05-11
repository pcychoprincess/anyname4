const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
current_background="url(https://st4.depositphotos.com/5078157/20181/i/450/depositphotos_201816586-stock-photo-cloudy-blue-sky-abstract-background.jpg)"
document.addEventListener("keydown",function(){
    jump();
})
function jump(){
    if (dino.classList !="jump"){
        dino.classList.add("jump")}
    setTimeout(function(){
        dino.classList.remove("jump")
    },300)
}
let isAlive= setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cactusLeft<30 && cactusLeft>20 && dinoTop>=150){
        alert("Ups, Game Over(")
    }}, 10)
let backgrount= setInterval(function() {
    let body = document.querySelector('.game')
    if (current_background=="url(https://st4.depositphotos.com/5078157/20181/i/450/depositphotos_201816586-stock-photo-cloudy-blue-sky-abstract-background.jpg)"){
        current_background="url(https://img.freepik.com/premium-vector/night-sky-background_135176-29.jpg)"
        body.style.background="url(https://img.freepik.com/premium-vector/night-sky-background_135176-29.jpg)"
    } else{
        current_background="url(https://st4.depositphotos.com/5078157/20181/i/450/depositphotos_201816586-stock-photo-cloudy-blue-sky-abstract-background.jpg)"
        body.style.background="url(https://st4.depositphotos.com/5078157/20181/i/450/depositphotos_201816586-stock-photo-cloudy-blue-sky-abstract-background.jpg)"
}}, 8500)