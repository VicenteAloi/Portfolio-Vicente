lenguajes_list = [
  { name: "JavaScript", icon: "assets/java-script.png", border:"#f16529", background:"#f1652979;" },
  { name: "HTML", icon: "assets/html.png" },
  { name: "CSS", icon: "assets/css-3.png" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Java", icon: "fab fa-java" },
  { name: "PHP", icon: "fab fa-php" },]

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggle-btn");
  const colapsable = document.querySelector(".colapsable");

  btn.addEventListener("click", () => {
    const expanded = colapsable.classList.toggle("expandido");

    btn.textContent = expanded ? "Mostrar menos" : "Mostrar todo";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section-fade');

  const observerOptions = {
    threshold: 0.2 // porcentaje visible para activar
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // se oculta de nuevo
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav .nav-links a');
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

  function activarLink() {
    let current = null;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', activarLink);
  activarLink(); // para que se aplique al cargar la página
});

