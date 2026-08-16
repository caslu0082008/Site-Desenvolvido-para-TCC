// ═══════════════════════════════════════════
// MAIN.JS — funcionalidades gerais do site
// (tema, menu mobile, modal de login)
// Carregado em todas as páginas.
// ═══════════════════════════════════════════

// ── tema (claro/escuro) ──
const root = document.documentElement;
let isDark = true;

function toggleTheme() {
  isDark = !isDark;
  root.setAttribute('data-theme', isDark ? '' : 'light');
  document.querySelector('.theme-toggle').textContent = isDark ? '☀' : '🌙';
}

// ── modal de login ──
function openLogin() {
  document.getElementById('loginOverlay').classList.add('open');
  document.getElementById('loginError').classList.remove('show');
  document.body.style.overflow = 'hidden';
}
function closeLogin() {
  document.getElementById('loginOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // TODO: plugar aqui a chamada real ao backend (fetch/axios etc.)
  // Exemplo:
  // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
  //   .then(res => res.json())
  //   .then(data => { if (data.ok) { closeLogin(); /* redirecionar/logar */ } else { showLoginError(); } });

  console.log('Login attempt:', { email, password });
  closeLogin();
  return false;
}
function showLoginError() {
  document.getElementById('loginError').classList.add('show');
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLogin();
});

// ── menu hamburguer (mobile) ──
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
}
function closeMenu() {
  menuOpen = false;
  document.getElementById('mobileMenu').classList.remove('open');
}

// fecha o menu ao clicar fora
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.hamburger');
  if (menuOpen && menu && burger && !menu.contains(e.target) && !burger.contains(e.target)) closeMenu();
});
