const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const btnUp = document.querySelector('btn');

function scroll() {
  if (document.body.scrollUp > 20 || document.documentElement.scrollUp > 20) {
    btnUp.style.display = 'block';
  } else {
    btnUp.style.display = 'none';
  }
}

window.onscroll = () => { scroll(); };

const upPage = document.querySelector('.btnUp');
upPage.addEventListener('click', () => {
  document.body.scrollUp = 0;
  document.documentElement.scrollUp = 0;
});
