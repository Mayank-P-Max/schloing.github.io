const finger = document.getElementById("finger");
const screenH = window.screen.width;
const screenW = window.screen.height;

function main() {
    if (!finger) return;
    document.addEventListener("mousemove", (event) => {
        finger.style.top = `${event.clientY}px`;
        finger.style.left = `${event.clientX}px`;
    });
}

main();