// Elementos DOM
const header = document.querySelector("header");
const body = document.body;
const darkToggle = document.querySelector(".dark");
const darkIcon = document.querySelector(".btn_icon");
const menuIcon = document.querySelector("#menu-icon");
const menulist = document.querySelector(".menulist");
const navLinks = document.querySelectorAll(".menulist a");
const logoImg = document.getElementById("imagem");
const logoGit = document.getElementById("imagem2");

// 1. Configuração do Scroll (Sticky Header & Fechar Menu Mobile)
window.addEventListener("scroll", () => {
    // Ativação suave da barra ao rolar
    header.classList.toggle("sticky", window.scrollY > 30);

    // Fecha o menu mobile se o usuário rolar
    if (menuIcon && menulist) {
        menuIcon.classList.remove("bx-x");
        menulist.classList.remove("open");
    }
});

// 2. Menu Mobile
if (menuIcon && menulist) {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        menulist.classList.toggle("open");
    });

    // Fecha o menu mobile ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuIcon.classList.remove("bx-x");
            menulist.classList.remove("open");
        });
    });
}

// 3. Typed.js Animação de Texto
if (document.querySelector(".input")) {
    new Typed(".input", {
        strings: ["Full-stack.", "Back-end.", "Front-end."],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1500,
        loop: true
    });
}

// 4. Lógica do Tema (Dark / Light Mode)
function updateThemeUI(isDark) {
    // Atualiza ícones
    if (darkIcon) {
        darkIcon.classList.toggle("ri-moon-fill", isDark);
        darkIcon.classList.toggle("ri-sun-fill", !isDark);
    }

}

// Carregar tema salvo ou preferência do sistema
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("darkmode");
    updateThemeUI(true);
} else {
    updateThemeUI(false);
}

// Toggle ao clicar no botão de tema
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        body.classList.toggle("darkmode");
        const isDark = body.classList.contains("darkmode");

        // Animação de giro no ícone
        if (darkIcon) {
            darkIcon.classList.add("animated");
            setTimeout(() => darkIcon.classList.remove("animated"), 500);
        }

        // Atualizar estado e salvar
        updateThemeUI(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// 5. Scroll Reveal com IntersectionObserver
const fadeElements = document.querySelectorAll(".fade");

const appearOptions = {
    threshold: 0.15, // Ativa quando 15% do elemento estiver visível na tela
    rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de atingir o fundo
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target); // Deixa fixo após a animação
        }
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});