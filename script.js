const orb = document.getElementById('orb');
let dragging = false;
let offsetX = 0;
let offsetY = 0;

orb.addEventListener('mousedown', (e) =>{
    dragging = true;
    offsetX = e.clientX - orb.offsetLeft;
    offsetY = e.clientY - orb.offsetTop;
    orb.style.cursor = "grabbing";
})
document.addEventListener('mousemove', (e) =>{
    if(!dragging) return;
    orb.style.left = `${e.clientX - offsetX}px`;
    orb.style.top = `${e.clientY - offsetY}px`;
})
document.addEventListener('mouseup', (e) =>{
    dragging = false;
    orb.style.cursor = "grab";
})

orb.addEventListener('touchstart', (e) =>{
    dragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - orb.offsetLeft;
    offsetY = touch.clientY - orb.offsetTop;
})
document.addEventListener('touchmove', (e) =>{
    if(!dragging) return;
    const touch = e.touches[0];
    orb.style.left = `${touch.clientX - offsetX}px`;
    orb.style.top = `${touch.clientY - offsetY}px`;
})
document.addEventListener('touchend', (e) =>{
    dragging = false;
})