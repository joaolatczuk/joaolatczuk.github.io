// Elementos DOM
const header = document.querySelector("header");
const body = document.body;
const darkToggle = document.querySelector(".dark");
const darkIcon = document.querySelector(".btn_icon");
const menuIcon = document.querySelector("#menu-icon");
const menulist = document.querySelector(".menulist");
const navLinks = document.querySelectorAll(".menulist a");
const logoImg = document.getElementById("imagem");

// 1. Configuração do Scroll (Sticky Header & Fechar Menu Mobile)
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 30);

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
        body.classList.toggle("menu-open", menulist.classList.contains("open"));
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuIcon.classList.remove("bx-x");
            menulist.classList.remove("open");
            body.classList.remove("menu-open");
        });
    });
}

// 3. Sistema de Tradução (i18n) & Objeto de Traduções
let typedInstance = null;

const translations = {
    pt: {
        nav_home: "Home",
        nav_about: "Sobre",
        nav_timeline: "Trajetória",
        nav_portfolio: "Portfólio",
        nav_contact: "Contatos",
        btn_talk: "Vamos conversar",
        home_title_prefix: "Desenvolvedor",
        typed_strings: ["Full-stack.", "Back-end.", "Front-end."],
        home_sub: "Formado em Segurança da Informação com foco em Node.js e desenvolvimento web full stack.",
        btn_works: "Meus trabalhos",
        btn_cv: "Download CV",
        about_title: "Mais ",
        about_title_span: "sobre mim",
        about_intro: "Olá, eu sou João Vinicius Latczuk, desenvolvedor focado em criar soluções completas e eficientes tanto no front-end quanto no back-end.",
        about_desc: "Graduado em Segurança da Informação pela Faculdade de Tecnologia de Ourinhos (FATEC-OU) e cursando Análise e Desenvolvimento de Sistemas. Possuo sólida experiência com ecossistema JavaScript/Node.js, bancos relacionais (MySQL) e integração de templates/APIs, consolidada em projetos como o SiguEscola (gestão escolar municipal). Sempre focado em boas práticas, performance e aprendizado contínuo.",
        timeline_title: "Minha ",
        timeline_title_span: "trajetória",
        t1_title: "Técnico em Informática para Internet",
        t1_place: "Ensino Técnico Integrado ao Médio (ETEC Ourinhos)",
        t1_desc: "Primeiro contato formal com desenvolvimento de software, abordando lógica de programação, fundamentos de web (HTML, CSS e JavaScript), banco de dados e infraestrutura.",
        t2_title: "Intercâmbio Cultural & Acadêmico",
        t2_place: "Vivência Internacional (Argentina)",
        t2_desc: "Experiência de imersão focada em fluência em espanhol, adaptabilidade multicultural, autonomia e resolução de problemas em ambientes dinâmicos.",
        t3_title: "Segurança da Informação",
        t3_place: "Graduação (FATEC Ourinhos)",
        t3_desc: "Formação sólida em segurança cibernética, infraestrutura de redes, proteção de dados, análise de vulnerabilidades e desenvolvimento de software seguro.",
        t4_title: "Desenvolvedor Web (Estágio)",
        t4_place: "SME - Secretaria Municipal de Educação",
        t4_desc: "Desenvolvimento e sustentação da plataforma SiguEscola utilizando Node.js, EJS, MySQL e Git para modernização da gestão educacional municipal.",
        t5_title: "Experiência Profissional Internacional",
        t5_place: "The Rangeley Inn & Tavern (Maine, EUA)",
        t5_desc: "Atuação em hospitalidade corporativa nos Estados Unidos, com prática diária de comunicação em inglês e rotina internacional. Sólida experiência em atendimento de alto padrão, resolução ágil de problemas e integração em ambientes multiculturais.",
        t6_title: "Análise e Desenvolvimento de Sistemas",
        t6_place: "Graduação em Andamento",
        t6_desc: "Foco no desenvolvimento de software full stack, engenharia de software, inteligência computacional e arquitetura de sistemas modernos.",
        portfolio_title: "Meus últimos ",
        portfolio_title_span: "projetos",
        p1_title: "Portfólio Pessoal",
        p1_desc: "Interface moderna com suporte a dark/light mode, design responsivo e animações fluidas focadas em alta performance.",
        p2_title: "SiguEscola",
        p2_desc: "Sistema integrado de gerenciamento escolar municipal desenvolvido com Node.js, EJS, MySQL e versionamento via Git/GitHub.",
        p3_title: "Aligna",
        p3_desc: "Aplicação com visão computacional para monitoramento ergonômico, postura corporal e rastreamento de piscadas em tempo real.",
        tech_used: "Tecnologias utilizadas",
        contact_title: "Bora ",
        contact_title_span: "conversar",
        placeholder_name: "Seu nome",
        placeholder_email: "Endereço de e-mail...",
        placeholder_message: "Insira sua mensagem aqui...",
        btn_send: "Enviar Mensagem",
        copyright: "Copyright © 2026 João Vinicius Latczuk. Todos os direitos reservados."
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_timeline: "Timeline",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        btn_talk: "Let's talk",
        home_title_prefix: "Developer",
        typed_strings: ["Full-stack.", "Back-end.", "Front-end."],
        home_sub: "Degree in Information Security focused on Node.js and full-stack web development.",
        btn_works: "My projects",
        btn_cv: "Download CV",
        about_title: "More ",
        about_title_span: "about me",
        about_intro: "Hello, I'm João Vinicius Latczuk, a developer focused on creating complete and efficient solutions for both front-end and back-end.",
        about_desc: "Graduated in Information Security from Fatec Ourinhos and currently pursuing Systems Analysis and Development. I have solid experience with the JavaScript/Node.js ecosystem, relational databases (MySQL), and API/template integration, proven in projects like SiguEscola (municipal school management). Always focused on best practices, performance, and continuous learning.",
        timeline_title: "My ",
        timeline_title_span: "journey",
        t1_title: "IT Technician for Web",
        t1_place: "Technical High School (ETEC Ourinhos)",
        t1_desc: "First formal contact with software development, covering programming logic, web fundamentals (HTML, CSS, JavaScript), databases, and infrastructure.",
        t2_title: "Cultural & Academic Exchange",
        t2_place: "International Experience (Argentina)",
        t2_desc: "Immersion experience focused on Spanish fluency, multicultural adaptability, independence, and problem-solving in dynamic environments.",
        t3_title: "Information Security",
        t3_place: "Bachelor's Degree (FATEC Ourinhos)",
        t3_desc: "Solid background in cybersecurity, network infrastructure, data protection, vulnerability assessment, and secure software development.",
        t4_title: "Web Developer (Intern)",
        t4_place: "SME - Municipal Department of Education",
        t4_desc: "Development and maintenance of the SiguEscola platform using Node.js, EJS, MySQL, and Git to modernize municipal educational management.",
        t5_title: "International Professional Experience",
        t5_place: "The Rangeley Inn & Tavern (Maine, USA)",
        t5_desc: "Worked in corporate hospitality in the United States with daily English communication. Hands-on experience delivering high-standard service, fast problem resolution, and seamless integration in multicultural teams.",
        t6_title: "Systems Analysis and Development",
        t6_place: "Ongoing Degree",
        t6_desc: "Focused on full-stack software development, software engineering, computational intelligence, and modern system architectures.",
        portfolio_title: "My latest ",
        portfolio_title_span: "projects",
        p1_title: "Personal Portfolio",
        p1_desc: "Modern interface featuring dark/light mode support, responsive design, and smooth animations focused on high performance.",
        p2_title: "SiguEscola",
        p2_desc: "Integrated municipal school management system built with Node.js, EJS, MySQL, and version control via Git/GitHub.",
        p3_title: "Aligna",
        p3_desc: "Computer vision application for real-time ergonomic monitoring, posture tracking, and blink detection.",
        tech_used: "Technologies used",
        contact_title: "Let's ",
        contact_title_span: "talk",
        placeholder_name: "Your name",
        placeholder_email: "Email address...",
        placeholder_message: "Insert your message here...",
        btn_send: "Send Message",
        copyright: "Copyright © 2026 João Vinicius Latczuk. All rights reserved."
    }
};

// Declaração da Função changeLanguage
function changeLanguage(lang) {
    const langData = translations[lang] || translations.pt;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    // 1. Atualizar elementos de texto
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    // 2. Atualizar placeholders de formulário
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (langData[key]) {
            element.placeholder = langData[key];
        }
    });

    // 3. Atualizar dinamicamente o link e nome do arquivo PDF do Currículo
    const cvButtons = document.querySelectorAll('.btn-cv-download');
    const isEnglish = (lang === 'en');
    const pdfPath = isEnglish ? './arq/CurriculoEN.pdf' : './arq/Curriculo.pdf';
    const pdfFileName = isEnglish ? 'CurriculoEN.pdf' : 'Curriculo.pdf';

    cvButtons.forEach(btn => {
        btn.setAttribute('href', pdfPath);
        btn.setAttribute('download', pdfFileName);
    });

    // 4. Reiniciar animação do Typed.js
    if (document.querySelector(".input")) {
        if (typedInstance) {
            typedInstance.destroy();
        }
        typedInstance = new Typed(".input", {
            strings: langData.typed_strings,
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1500,
            loop: true
        });
    }

    localStorage.setItem("preferred_lang", lang);
}

// Função para detetar o idioma do sistema do utilizador
function detectUserLanguage() {
    const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return browserLang.startsWith("pt") ? "pt" : "en";
}

// Função chamada ao clicar nas bandeiras do modal
function selectLanguage(lang) {
    changeLanguage(lang);
    const modal = document.getElementById("language-modal");
    if (modal) {
        modal.classList.add("hidden");
    }
}

// 4. Lógica do Tema (Dark / Light Mode)
function updateThemeUI(isDark) {
    if (darkIcon) {
        darkIcon.classList.toggle("ri-moon-fill", isDark);
        darkIcon.classList.toggle("ri-sun-fill", !isDark);
    }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("darkmode");
    updateThemeUI(true);
} else {
    updateThemeUI(false);
}

if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        body.classList.toggle("darkmode");
        const isDark = body.classList.contains("darkmode");

        if (darkIcon) {
            darkIcon.classList.add("animated");
            setTimeout(() => darkIcon.classList.remove("animated"), 500);
        }

        updateThemeUI(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// 5. Scroll Reveal com IntersectionObserver
const fadeElements = document.querySelectorAll(".fade");

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// 6. Inicialização ao Carregar a Página
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("preferred_lang");
    const modal = document.getElementById("language-modal");

    if (savedLang) {
        changeLanguage(savedLang);
        if (modal) {
            modal.classList.add("hidden");
        }
    } else {
        const defaultLang = detectUserLanguage();
        changeLanguage(defaultLang);
        
        if (modal) {
            modal.classList.remove("hidden");
        }
    }
});