"use strict";

const translations = {
  "pt-BR": {
    pageTitle: "Carlos Gabriel — Portfólio",
    metaDescription: "Portfólio de Carlos Gabriel Leite Carretts. Projetos em C#, C++, HTML, CSS e JavaScript.",
    skip: "Pular para o conteúdo",
    navHome: "Início",
    navLabel: "Navegação principal",
    navProjects: "Projetos",
    navAbout: "Sobre",
    navContact: "Contato",
    heroRole: "Estudante de Sistemas de Informação & desenvolvedor em formação.",
    heroIntro: "Gosto de transformar problemas em soluções claras, explorando lógica, organização de código e desenvolvimento web.",
    seeProjects: "Explorar projetos",
    location: "Lages, SC · Brasil",
    learning: "Sempre aprendendo",
    portraitAlt: "Retrato de Carlos Gabriel",
    sectionWork: "TRABALHO",
    projectsTitle: "Projetos em destaque<span class=\"accent-dot\">.</span>",
    projectsLead: "Uma seleção de exercícios e aplicações que demonstram minha evolução em diferentes linguagens.",
    allRepositories: "Todos os repositórios",
    filterLabel: "Filtrar projetos",
    filterAll: "Todos",
    filterLogic: "Lógica & dados",
    filterWeb: "Web",
    projectSingular: "projeto",
    projectPlural: "projetos",
    allInOneDescription: "Aplicação de console que reúne nove utilitários e algoritmos, incluindo cifra de César, Collatz e cálculos tributários, separando menus e lógica.",
    libraryDescription: "Sistema de cadastro de livros e revistas com vetores dinâmicos, validação de entrada, médias por categoria e busca por extremos.",
    hotelDescription: "Simulador de faturamento hoteleiro com categorias de quartos, tarifas adicionais, serviços, impostos e resumo detalhado da conta.",
    taskDescription: "Lista de tarefas interativa com inclusão, conclusão e exclusão de itens, contadores em tempo real e alternância entre temas.",
    tagAnalysis: "Análise de dados",
    tagRules: "Regras de negócio",
    tagValidation: "Validação",
    viewCode: "Ver código",
    sectionAbout: "QUEM SOU",
    aboutTitle: "Curiosidade que vira código<span class=\"accent-dot\">.</span>",
    aboutP1: "Sou estudante de Sistemas de Informação na UNIPLAC, em Lages (SC). Tenho construído minha base em programação por meio de projetos práticos e desafios acadêmicos.",
    aboutP2: "Meu foco está em entender a lógica por trás das soluções, escrever código mais organizado e evoluir continuamente nas áreas de desenvolvimento de software e web.",
    followGithub: "Acompanhe minha evolução no GitHub",
    stackTitle: "Tecnologias em estudo",
    educationTitle: "Formação",
    uniplac: "Sistemas de Informação · cursando",
    senai: "Informática aplicada a ambientes profissionais",
    languagesTitle: "Idiomas",
    languagesValue: "Português (nativo) · Inglês (fluente)",
    sectionContact: "CONTATO",
    contactTitle: "Vamos conversar<span class=\"accent-dot\">?</span>",
    contactLead: "Aberto a trocar ideias, aprender e conhecer oportunidades em tecnologia.",
    sendEmail: "Enviar e-mail",
    footerNote: "Feito com HTML, CSS & JavaScript.",
    backToTop: "Voltar ao topo ↑",
    switchLanguage: "Switch to English",
    darkMode: "Ativar modo escuro",
    lightMode: "Ativar modo claro"
  },
  "en-US": {
    pageTitle: "Carlos Gabriel — Portfolio",
    metaDescription: "Portfolio of Carlos Gabriel Leite Carretts. C#, C++, HTML, CSS and JavaScript projects.",
    skip: "Skip to content",
    navHome: "Home",
    navLabel: "Main navigation",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    heroRole: "Information Systems student & aspiring software developer.",
    heroIntro: "I enjoy turning problems into clear solutions, exploring programming logic, organized code, and web development.",
    seeProjects: "Explore projects",
    location: "Lages, SC · Brazil",
    learning: "Always learning",
    portraitAlt: "Portrait of Carlos Gabriel",
    sectionWork: "SELECTED WORK",
    projectsTitle: "Featured projects<span class=\"accent-dot\">.</span>",
    projectsLead: "A selection of exercises and applications that reflect my progress across different programming languages.",
    allRepositories: "All repositories",
    filterLabel: "Filter projects",
    filterAll: "All",
    filterLogic: "Logic & data",
    filterWeb: "Web",
    projectSingular: "project",
    projectPlural: "projects",
    allInOneDescription: "Console app combining nine utilities and algorithms, including Caesar cipher, Collatz sequences and tax calculations, with separate menus and logic.",
    libraryDescription: "Book and magazine catalog using dynamic vectors, input validation, category averages and min/max searches.",
    hotelDescription: "Hotel billing simulator with room categories, additional fees, services, taxes and an itemized bill summary.",
    taskDescription: "Interactive task manager with add, complete and delete actions, live progress counters and light/dark themes.",
    tagAnalysis: "Data analysis",
    tagRules: "Business logic",
    tagValidation: "Validation",
    viewCode: "View source",
    sectionAbout: "ABOUT ME",
    aboutTitle: "Curiosity turned into code<span class=\"accent-dot\">.</span>",
    aboutP1: "I'm an Information Systems student at UNIPLAC in Lages, Brazil. I'm building my programming fundamentals through hands-on projects and academic challenges.",
    aboutP2: "My focus is understanding the logic behind solutions, writing better-organized code, and constantly developing my software and web development skills.",
    followGithub: "Follow my progress on GitHub",
    stackTitle: "Technologies I'm learning",
    educationTitle: "Education",
    uniplac: "Information Systems · in progress",
    senai: "Applied Informatics for Professional Environments",
    languagesTitle: "Languages",
    languagesValue: "Portuguese (native) · English (fluent)",
    sectionContact: "CONTACT",
    contactTitle: "Let's connect<span class=\"accent-dot\">.</span>",
    contactLead: "Open to sharing ideas, learning, and exploring opportunities in technology.",
    sendEmail: "Send an email",
    footerNote: "Built with HTML, CSS & JavaScript.",
    backToTop: "Back to top ↑",
    switchLanguage: "Mudar para português",
    darkMode: "Turn on dark mode",
    lightMode: "Turn on light mode"
  }
};

const STORAGE_THEME = "portfolio-theme";
const STORAGE_LANGUAGE = "portfolio-language";
const root = document.documentElement;
const languageButton = document.getElementById("language-toggle");
const themeButton = document.getElementById("theme-toggle");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const cards = Array.from(document.querySelectorAll(".project-card"));
const countLabel = document.getElementById("project-count");

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* Storage may be blocked. */ }
}
let language = safeGet(STORAGE_LANGUAGE) === "en-US" ? "en-US" : "pt-BR";

function updateCount() {
  const count = cards.filter(card => !card.hidden).length;
  const dictionary = translations[language];
  countLabel.textContent = String(count).padStart(2, "0") + " " +
    (count === 1 ? dictionary.projectSingular : dictionary.projectPlural);
}

function updateThemeButton() {
  const dark = root.dataset.theme === "dark";
  const name = translations[language][dark ? "lightMode" : "darkMode"];
  themeButton.setAttribute("aria-label", name);
  themeButton.setAttribute("title", name);
  themeButton.setAttribute("aria-pressed", String(dark));
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute("content", dark ? "#101319" : "#f7f8fa");
}

function applyLanguage(next) {
  language = next;
  const dictionary = translations[language];
  root.lang = language;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (!Object.hasOwn(dictionary, key)) return;
    // Only two carefully scoped headings contain translated inline accent markup.
    if (key === "projectsTitle" || key === "aboutTitle" || key === "contactTitle") {
      node.innerHTML = dictionary[key];
    } else {
      node.textContent = dictionary[key];
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(node => {
    node.setAttribute("aria-label", dictionary[node.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(node => {
    node.setAttribute("alt", dictionary[node.dataset.i18nAlt]);
  });
  languageButton.textContent = language === "pt-BR" ? "EN" : "PT";
  languageButton.setAttribute("aria-label", dictionary.switchLanguage);
  languageButton.setAttribute("title", dictionary.switchLanguage);
  updateCount();
  updateThemeButton();
  safeSet(STORAGE_LANGUAGE, language);
}

languageButton.addEventListener("click", () => {
  applyLanguage(language === "pt-BR" ? "en-US" : "pt-BR");
});
themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  safeSet(STORAGE_THEME, root.dataset.theme);
  updateThemeButton();
});
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    cards.forEach(card => {
      card.hidden = selected !== "all" && card.dataset.category !== selected;
    });
    updateCount();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(language);
