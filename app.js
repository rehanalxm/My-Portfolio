const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff99";
  ctx.font = `${fontSize}px monospace`;
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Close menu when any nav link is clicked (for mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  });
});

document.getElementById("logo").addEventListener("click", () => {
  // Full hard reload (like Ctrl + F5)
  window.location.href = window.location.href.split("#")[0]; // Remove any hash to ensure a full reload
});
