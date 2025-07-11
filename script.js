// ===== FUNCIONALIDADES JS DO SITE =====

// Menu responsivo 

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./assets/menu_white_36dp.svg"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./assets/close_white_36dp.svg"
        
    }
}

// Scroll suave ao clicar nos links do menu
const links = document.querySelectorAll('nav.nav-bar a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Enviar formulário de contato com feedback de envio
const form = document.querySelector('.contato form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  form.reset();
});

// Destaque de plano ao passar o mouse
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = '0.3s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
