// Hue-shifting overlay
const overlay = document.getElementById('color-overlay');
let hue = 0;
function animateBackground() {
  hue = (hue + 0.2) % 360;
  overlay.style.backgroundColor = `hsla(${hue},50%,10%,0.3)`;
  requestAnimationFrame(animateBackground);
}
animateBackground();

// Magnetic hover
const cards = document.querySelectorAll('.card');
const links = document.querySelectorAll('.link-btn');

function magneticHover(el) {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    el.style.transform = `rotateX(${-y/10}deg) rotateY(${x/10}deg) scale(1.05)`;
  });
  el.addEventListener('mouseleave', ()=>{el.style.transform='rotateX(0) rotateY(0) scale(1)';});
}

cards.forEach(magneticHover);
links.forEach(magneticHover);

// Easter egg: press B to toggle 🔥
const secret = document.getElementById('secret');
document.addEventListener('keydown', e => {
  if(e.key.toLowerCase() === 'b') {
    secret.style.display = secret.style.display === 'none' ? 'block' : 'none';
  }
});
