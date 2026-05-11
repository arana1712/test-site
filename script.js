const cake = document.getElementById("cake");
const candles = document.querySelector(".candles");
const lightCandlesBtn = document.getElementById("lightCandlesBtn");
const cutCakeBtn = document.getElementById("cutCakeBtn");
const statusMessage = document.getElementById("statusMessage");
const confetti = document.getElementById("confetti");

const confettiColors = ["#ff7bae", "#fff7dc", "#d94882", "#ffcf56", "#ffffff", "#b66cff"];

lightCandlesBtn.addEventListener("click", () => {
  candles.classList.add("candles-lit");
  cake.classList.add("celebrate");
  statusMessage.textContent = "The candles are glowing. Make a wish!";
  launchConfetti(42);

  setTimeout(() => cake.classList.remove("celebrate"), 850);
});

cutCakeBtn.addEventListener("click", () => {
  cake.classList.add("cut");
  statusMessage.textContent = "Cake is cut. Time to celebrate!";
  launchConfetti(70);
});

function launchConfetti(pieceCount = 50) {
  for (let i = 0; i < pieceCount; i += 1) {
    const piece = document.createElement("span");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    piece.style.width = `${7 + Math.random() * 8}px`;
    piece.style.height = `${10 + Math.random() * 12}px`;
    confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 3600);
  }
}
