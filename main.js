const $IMAGE = document.getElementById("image");

$IMAGE.style.position = "absolute";
$IMAGE.style.left = (window.innerWidth / 2 - 40) + "px";
$IMAGE.style.top = (window.innerHeight / 2 - 40) + "px";

let isMoving = false; 
let animationInterval;
let moveInterval; 

addEventListener("click", (e) => {
    if (isMoving) {
        clearInterval(animationInterval);
        clearInterval(moveInterval);
    }

    isMoving = true;

    const targetX = e.clientX - $IMAGE.offsetWidth / 2;
    const targetY = e.clientY - $IMAGE.offsetHeight / 2;

    const currentX = parseFloat($IMAGE.style.left);
    const currentY = parseFloat($IMAGE.style.top);

    const deltaX = targetX - currentX;
    const deltaY = targetY - currentY;

    const duration = 1000;
    const fps = 60;
    const interval = 1000 / fps;
    const steps = duration / interval;

    let step = 0;

    let frame = 1; 
    animationInterval = setInterval(() => {
        frame = frame === 1 ? 2 : 1; 
        $IMAGE.src = `./sprites/frame-${frame}.png`;
    }, 150);

    moveInterval = setInterval(() => {
        if (step >= steps) {
            clearInterval(moveInterval);
            clearInterval(animationInterval); 
            $IMAGE.src = "./sprites/frame-0.png";
            $IMAGE.style.left = targetX + "px";
            $IMAGE.style.top = targetY + "px";
            isMoving = false; 
        } else {
            $IMAGE.style.left = (currentX + (deltaX / steps) * step) + "px";
            $IMAGE.style.top = (currentY + (deltaY / steps) * step) + "px";
            step++;
        }
    }, interval);
});
