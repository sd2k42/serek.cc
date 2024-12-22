document.addEventListener('mousemove', (e) => {
  const card = document.querySelector('.card');
  const box = document.querySelector('.rotating-box');
  const rotateX = ((e.clientY - (card.offsetTop + card.offsetHeight / 2)) / card.offsetHeight) * 10.5;
  const rotateY = ((e.clientX - (card.offsetLeft + card.offsetWidth / 2)) / card.offsetWidth) * 15.5;
  const moveX = (e.clientX - (card.offsetLeft + card.offsetWidth / 2)) / card.offsetWidth * -40;
  const moveY = (e.clientY - (card.offsetTop + card.offsetHeight / 2)) / card.offsetHeight * -40;
  const scale = 1 + (Math.abs(moveX) + Math.abs(moveY)) / -2000;
  
  box.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateX(${moveX}px) translateY(${moveY}px) scale(${scale})`;
});