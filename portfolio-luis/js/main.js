/* ─── CUSTOM CURSOR ─── */
const cur = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

(function animCursor() {
  cx += (mx - cx) * 0.12;
  cy += (my - cy) * 0.12;
  cur2.style.left = cx + 'px';
  cur2.style.top = cy + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .chip, .spill').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur2.style.transform = 'translate(-50%,-50%) scale(2)';
    cur2.style.borderColor = 'rgba(0,240,255,.6)';
  });
  el.addEventListener('mouseleave', () => {
    cur2.style.transform = 'translate(-50%,-50%) scale(1)';
    cur2.style.borderColor = 'rgba(0,240,255,.3)';
  });
});

/* ─── PARTICLE CANVAS ─── */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * .3;
    this.vy = (Math.random() - .5) * .3;
    this.r = Math.random() * 1.5 + .3;
    this.a = Math.random() * .5 + .1;
    this.color = Math.random() > .7 ? '0,240,255' : '157,78,255';
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.a})`;
    ctx.fill();
  }
}

for (let i = 0; i < 130; i++) particles.push(new Particle());

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0,240,255,${(1 - d / 100) * .07})`;
        ctx.lineWidth = .5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

(function animParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animParticles);
})();

/* ─── NAV SCROLL ─── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── COUNTER ANIMATION ─── */
function animCount(el, target, duration, suffix) {
  let start = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.round(start) + (suffix || '');
    if (start >= target) clearInterval(timer);
  }, duration / 60);
}

setTimeout(() => {
  animCount(document.getElementById('m1'), 4, 1200, '');
  animCount(document.getElementById('m2'), 389, 1800, '');
  animCount(document.getElementById('m3'), 12, 1200, '+');
}, 1400);

/* ─── TYPING ANIMATION ─── */
const cmds = ['export default developer', 'npm run deploy', 'git push origin main', 'yarn build --prod'];
let cmdIdx = 0, charIdx = 0;
const typingEl = document.getElementById('typingCmd');

function type() {
  if (!typingEl) return;
  if (charIdx < cmds[cmdIdx].length) {
    typingEl.textContent = cmds[cmdIdx].substring(0, ++charIdx);
    setTimeout(type, 75 + Math.random() * 40);
  } else {
    setTimeout(() => {
      charIdx = 0;
      cmdIdx = (cmdIdx + 1) % cmds.length;
      typingEl.textContent = '';
      type();
    }, 2200);
  }
}
setTimeout(type, 1800);

/* ─── SCROLL REVEAL ─── */
let skillsAnimated = false;
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (!skillsAnimated && e.target.closest('#skills')) {
        skillsAnimated = true;
        document.querySelectorAll('.sbar-fill').forEach(b => {
          setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 200);
        });
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── CONTACT FORM ─── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.csub span');
    btn.textContent = 'Mensaje enviado ✓';
    setTimeout(() => { btn.textContent = 'Enviar mensaje'; }, 3000);
  });
}
