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

function moveSlide(button, direction) {
    const container = button.parentElement;
    const slides = container.querySelectorAll('.slide');
    let currentIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
    
    // Quitar clase activa actual
    slides[currentIndex].classList.remove('active');
    
    // Calcular siguiente índice
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    
    // Agregar clase activa al nuevo
    slides[currentIndex].classList.add('active');
}

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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contacto-form");
  const status = document.getElementById("contacto-status");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Enviando...";
    
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Reemplazá estos IDs por los de tu cuenta EmailJS
    const SERVICE_ID  = "service_7lowkfo";
    const TEMPLATE_ID = "template_nmpc1e4";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        nombre,
        apellido,
        email,
        mensaje
      });
      status.textContent = "¡Mensaje enviado con éxito!";
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent = "Hubo un error al enviar. Intentá de nuevo.";
    }
  });
});


// 1. Definimos la lista de proyectos (Data)
const misProyectos = [
    {
        titulo: "Turnera para hospital (Demo)",
        descripcion: "Proyecto académico realizado en el curso de introducción a Java donde se implementó una turnera para hospital con funcionalidades de gestión de turnos y consultas.",
        tecnologias: [
            { nombre: "HTML", clase: "html", icono: "assets/html.png" },
            { nombre: "CSS", clase: "css", icono: "assets/css-3.png" },
            { nombre: "JavaScript", clase: "javascript", icono: "assets/java-script.png" },
            { nombre: "TypeScript", clase: "typescript", icono: "assets/typescript-icon.png" },
            { nombre: "angular", clase: "angular", icono: "assets/angular.png"},
            { nombre: "Bootstrap", clase: "bootstrap", icono: "assets/Bootstrap-icon.png" },
            { nombre: "Java", clase: "java", icono: "assets/java.png" },
            { nombre: "Spring", clase: "spring", icono: "assets/spring.png" },
            { nombre: "Apache Tomcat", clase: "tomcat", icono: "assets/apache-tomcat.png" },
            { nombre: "IntelliJ", clase: "intellij", icono: "assets/intellIJ-icon.png" },
            { nombre: "VS Code", clase: "vscode", icono: "assets/vs-code.png" },
            { nombre: "MySQL", clase: "workbench", icono: "assets/mysql-icon.png" }
        ],
        imagenes: [
            "assets/proyectos/GDTurno-1.png",
            "assets/proyectos/GDTurno-2.png",
        ],
        links: [
            { texto: "Backend", url: "https://github.com/MateoTosello/GDTurno-EasyTurn", icono: "assets/database.png" },
            { texto: "Frontend", url: "https://github.com/VicenteAloi/GDTurno-EasyTurn-Frontend.", icono: "assets/repository.png" }
        ]
    },
    {
        titulo: "E-Commerce de Celulares",
        descripcion: "Proyecto académico realizado en el curso de Desarrollo Web Full Stack, donde se implementó un sistema completo de e-commerce con funcionalidades de carrito de compras, autenticación de usuarios y gestión de productos.",
        tecnologias: [
            { nombre: "HTML", clase: "html", icono: "assets/html.png" },
            { nombre: "CSS", clase: "css", icono: "assets/css-3.png" },
            { nombre: "JavaScript", clase: "javascript", icono: "assets/java-script.png" },
            { nombre: "TypeScript", clase: "typescript", icono: "assets/typescript-icon.png" },
            { nombre: "Angular", clase: "angular", icono: "assets/angular.png" },
            { nombre: "Bootstrap", clase: "bootstrap", icono: "assets/Bootstrap-icon.png" },
            { nombre: "Express.js", clase: "express", icono: "assets/express-js.png" },
            { nombre: "Node.js", clase: "node", icono: "assets/NodeJs-icon.png" },
            { nombre: "Sequelize.js", clase: "sequelize", icono: "assets/sequelize-icon.png" },
            { nombre: "VS Code", clase: "vscode", icono: "assets/vs-code.png" },
            { nombre: "MySQL Workbench", clase: "workbench", icono: "assets/mysql-icon.png" }
        ],
        imagenes: [
            "assets/proyectos/E-Commerce-2.png",
            "assets/proyectos/E-Commerce-1.png",
            "assets/proyectos/E-Commerce-3.png"
        ],
        links: [
            { texto: "", url: "https://github.com/BochatayMauricio/Ecommerce-Celulares-FullStack", icono: "assets/database.png" },
        ]
    },
    {
        titulo: "Página de Promociones de un Shopping",
        descripcion: "Proyecto académico grupal realizado para la materia Entornos Gráficos, donde se desarrolló una página web para mostrar las promociones y novedades de un centro comercial, dividiendo a los usuarios segun roles y categorías definidas.",
        tecnologias: [
            { nombre: "HTML", clase: "html", icono: "assets/html.png" },
            { nombre: "CSS", clase: "css", icono: "assets/css-3.png" },
            { nombre: "PHP", clase: "php", icono: "assets/php.png" },
            { nombre: "JavaScript", clase: "javascript", icono: "assets/java-script.png" },
            { nombre: "Xampp", clase: "xampp", icono: "assets/xampp.png" },
            { nombre: "VS Code", clase: "vscode", icono: "assets/vs-code.png" },
            { nombre: "MySQL Workbench", clase: "workbench", icono: "assets/mysql-icon.png" }
        ],
        imagenes: [
            "assets/proyectos/SMEG-3.png",
            "assets/proyectos/SMEG-1.png",
            "assets/proyectos/SMEG-2.png"
            
        ],
        links: [
            { texto: "", url: "https://github.com/BochatayMauricio/Shopping-Management-EG.git", icono: "assets/database.png" },
        ]
    },
    {
        titulo: "E-Commerce de hardware con comparador de precios (Prototipo)",
        descripcion: "Proyecto académico grupal realizado como trabajo final de la carrera, donde se desarrolló un e-commerce especializado en hardware de computación, incorporando un sistema de comparación de precios entre diferentes proveedores para optimizar la experiencia de compra del usuario. Además cuenta con un chatbot integrado con IA para asistencia personalizada.",
        tecnologias: [
            { nombre: "HTML", clase: "html", icono: "assets/html.png" },
            { nombre: "CSS", clase: "css", icono: "assets/css-3.png" }, 
            { nombre: "JavaScript", clase: "javascript", icono: "assets/java-script.png" },
            { nombre: "TypeScript", clase: "typescript", icono: "assets/typescript-icon.png" },
            { nombre: "Angular", clase: "angular", icono: "assets/angular.png" },
            { nombre: "Bootstrap", clase: "bootstrap", icono: "assets/Bootstrap-icon.png" },
            { nombre: "Express.js", clase: "express", icono: "assets/express-js.png" },
            { nombre: "Node.js", clase: "node", icono: "assets/NodeJs-icon.png" },
            { nombre: "Sequelize.js", clase: "sequelize", icono: "assets/sequelize-icon.png" },
            { nombre: "VS Code", clase: "vscode", icono: "assets/vs-code.png" },
            { nombre: "MySQL Workbench", clase: "workbench", icono: "assets/mysql-icon.png" }
        ],
        imagenes: [
            "assets/proyectos/HardMatch-1.png",
            "assets/proyectos/HardMatch-2.png",
            "assets/proyectos/HardMatch-3.png",
            "assets/proyectos/HardMatch-4.png"
            
        ],
        links: [
            { texto: "Frontend", url: "https://github.com/BochatayMauricio/HardMatch-FrontEnd.git", icono: "assets/repository.png" }
        ]
    }
    // Aquí puedes copiar y pegar el bloque anterior para agregar más proyectos
];

// 2. Función para renderizar el "For"
function renderizarProyectos() {
    const contenedor = document.getElementById('contenedor-proyectos');
    
    let htmlFinal = "";

    misProyectos.forEach(proy => {
        // Generamos el HTML de las tecnologías
        const tecHTML = proy.tecnologias.map(tec => `
            <div class="card ${tec.clase}">
                <img src="${tec.icono}" alt="${tec.nombre}-icon">${tec.nombre}
            </div>
        `).join('');

        // Generamos el HTML de las imágenes del slide
        const imgHTML = proy.imagenes.map((img, index) => `
            <img src="${img}" class="slide ${index === 0 ? 'active' : ''}" alt="Captura">
        `).join('');

        // Generamos el HTML de los botones inferiores
        const linksHTML = proy.links.map(link => `
            <a href="${link.url}" target="_blank" class="btn-modern">
                <img src="${link.icono}" alt="Icono" class="icono-botones">
                <span>Link a Código ${link.texto}</span>
            </a>
        `).join('');

        // Unimos todo en la estructura principal
        htmlFinal += `
            <div class="proyecto">
                <div class="contenido">
                    <div class="info">
                        <h3>${proy.titulo}</h3>
                        <p>${proy.descripcion}</p>
                        <p><strong>Tecnologías:</strong></p>
                        <div class="tecnologias">${tecHTML}</div>
                    </div>
                    <div class="imagen-proyecto">
                      <div class="slider-container">
                          <div class="slider">
                              ${imgHTML}
                          </div>
                          <button class="prev" onclick="moveSlide(this, -1)">&#10094;</button>
                          <button class="next" onclick="moveSlide(this, 1)">&#10095;</button>
                      </div>
                  </div>
                </div>
                <div class="boton-centro">${linksHTML}</div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlFinal;
}

// 3. Ejecutar al cargar la página
window.onload = renderizarProyectos;