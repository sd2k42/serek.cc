const handleMouseMove = (e) => {
  const card = document.querySelector('.card');
  const box = document.querySelector('.rotating-box');
  const rotateX = ((e.clientY - (card.offsetTop + card.offsetHeight / 2)) / card.offsetHeight) * 5;
  const rotateY = ((e.clientX - (card.offsetLeft + card.offsetWidth / 2)) / card.offsetWidth) * 10;
  const moveX = (e.clientX - (card.offsetLeft + card.offsetWidth / 2)) / card.offsetWidth * -20;
  const moveY = (e.clientY - (card.offsetTop + card.offsetHeight / 2)) / card.offsetHeight * -20;
  const scale = 1 + (Math.abs(moveX) + Math.abs(moveY)) / -2000;
  box.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateX(${moveX}px) translateY(${moveY}px) scale(${scale})`;
};

const resetBoxTransform = () => {
  document.querySelector('.rotating-box').style.transform = 'none';
};

const handleAspectRatioChange = (e) => {
  if (e.matches) {
    resetBoxTransform();
    document.removeEventListener('mousemove', handleMouseMove);
  } else {
    document.addEventListener('mousemove', handleMouseMove);
  }
};

window.matchMedia('(max-aspect-ratio: 1/1)').addEventListener('change', handleAspectRatioChange);
handleAspectRatioChange(window.matchMedia('(max-aspect-ratio: 1/1)'));