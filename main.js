console.log("main.js loaded")
const $IMAGE = document.getElementById("image")

$IMAGE.style.left = window.innerWidth/2 + "px"
$IMAGE.style.top = window.innerHeight/2 + "px"

addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY)
})