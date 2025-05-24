// script.js
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}
