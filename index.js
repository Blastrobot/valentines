document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;

  if (path.includes("love")) {
    if (sessionStorage.getItem("executeConfettiRain") === "true") {
    confettiRain();
      // sessionStorage.removeItem("executeConfettiRain");
    } return;

  } return;
});

const moveButton = () => {
  const button = document.getElementById("noBtn");

  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
};

const toHomePage = () => {
  window.location.href = "intro.html";
}

const nextPage = () => {
  sessionStorage.setItem("executeConfettiRain", "true");
  window.location.href = "love.html";
};

const confettiRain = () => {
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 100,
    zIndex: 0,
    // shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"]
  }
  
  const duration = 60 * 60 * 1000,
    animationEnd = Date.now() + duration;
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 5 * (timeLeft / duration);
  
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ["heart"]
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        shapes: ["heart"]
      })
    );
  }, 250);
};