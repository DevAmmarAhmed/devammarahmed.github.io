const loader = document.querySelector(".loader");
const siteHeader = document.querySelector(".site-header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll("[data-reveal]");
const skillCards = document.querySelectorAll(".skill-card");
const counters = document.querySelectorAll(".counter");
const typingText = document.getElementById("typingText");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const langToggle = document.getElementById("langToggle");
const projectsGrid = document.getElementById("projectsGrid");
const projectFilters = document.getElementById("projectFilters");
const projectsCount = document.getElementById("projectsCount");

let activeProjectFilter = "all";

const EMAILJS_PUBLIC_KEY = "8F61kV5kJ7UxoLurq";
const EMAILJS_SERVICE_ID = "service_0wmhhdt";
const EMAILJS_TEMPLATE_ID = "template_3bnqk4y";

const translations = {
  ar: {
    pageTitle: "Ammar Ahmed Ibrahim | Senior .NET Developer & ERP Specialist",
    pageDescription:
      "الموقع الشخصي الاحترافي لعمار أحمد إبراهيم، Senior .NET Developer وERP Specialist وTechnical Project Manager بخبرة في الأنظمة المؤسسية والـ APIs والـ Microservices.",
    skipToContent: "تخطي إلى المحتوى",
    brandRole: "Senior .NET Developer",
    navHome: "الرئيسية",
    navAbout: "نبذة",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navExperience: "الخبرات",
    navServices: "الخدمات",
    navContact: "التواصل",
    heroBadge: "متاح للمشاريع المؤسسية",
    heroLocation: "كفر الشيخ، مصر",
    heroNameAr: "عمار أحمد إبراهيم",
    heroSummary:
      "مطور برمجيات أول متخصص في أنظمة ERP والحلول المؤسسية، بخبرة قوية في بناء تطبيقات قابلة للتوسع باستخدام ASP.NET Core وAngular وMicroservices، مع سجل عملي في إدارة المشاريع التقنية وتحليل متطلبات العملاء وقيادة الفرق.",
    btnCv: "تحميل السيرة الذاتية",
    btnContact: "تواصل معي",
    btnProjects: "عرض المشاريع",
    profileBadgeLabel: "حلول مؤسسية",
    profileBadgeValue: "Senior .NET Developer",
    statYearsLabel: "سنوات الخبرة",
    statYearsText: "خبرة في تطوير الأنظمة المؤسسية، تسليم مشاريع ERP، وقيادة المشاريع التقنية.",
    statFocusLabel: "التركيز الأساسي",
    statFocusValue: "ERP وواجهات APIs قابلة للتوسع",
    statFocusText: "Clean Architecture، workflows تشغيلية، وأنظمة Backend عالية الأداء.",
    aboutEyebrow: "نبذة احترافية",
    aboutTitle: "خبرة تقنية وتجارية تدعم الحلول المؤسسية",
    aboutLead:
      "أقدّم مزيجًا متوازنًا بين الخبرة التقنية العميقة والفهم التجاري العملي، ما يساعد الشركات على تحويل المتطلبات المعقدة إلى أنظمة قابلة للتنفيذ وقابلة للتوسع.",
    aboutWhoTitle: "من أنا",
    aboutP1:
      "أنا عمار أحمد إبراهيم، Senior .NET Developer وERP Specialist وTechnical Project Manager بخبرة تتجاوز 5 سنوات في تصميم وتطوير الأنظمة المؤسسية، وإدارة فرق البرمجة، وتحليل متطلبات العملاء، وتقديم حلول برمجية احترافية تتوافق مع احتياجات السوق والشركات.",
    aboutP2:
      "أتميّز في بناء أنظمة ERP متكاملة، تطوير REST APIs، تطبيق مبادئ Clean Architecture وCQRS، والعمل على Microservices، بالإضافة إلى خبرة في ERP sales consultation وتحويل الاحتياجات التشغيلية إلى قيمة تقنية حقيقية.",
    educationTitle: "التعليم",
    educationYear: "سنة التخرج: 2019",
    languagesTitle: "اللغات",
    languagesPrimary: "العربية (اللغة الأم)",
    languagesSecondary: "الإنجليزية (جيد جدًا)",
    strengthsTitle: "نقاط القوة",
    strengthsPrimary: "أنظمة ERP، قيادة الفرق، تحليل متطلبات العملاء",
    strengthsSecondary: "تسليم المشاريع والتواصل المؤسسي",
    skillsEyebrow: "المهارات التقنية",
    skillsTitle: "تقنيات حديثة لبناء حلول مؤسسية عالية الاعتمادية",
    skillsLead: "مجموعة مهارات عملية تركز على الأداء، قابلية التوسع، وهيكلة الأنظمة المعقدة بشكل احترافي.",
    projectsEyebrow: "أبرز المشاريع",
    projectsTitle: "حلول مؤسسية تم تسليمها بجودة Enterprise",
    projectsLead:
      "مجموعة من الأنظمة والمنصات التي طورتها وقادتها تقنيًا، مع تركيز على ERP والتجارة الإلكترونية والتكاملات والعمليات الميدانية.",
    projectRoleLabel: "دوري",
    projectFeaturesLabel: "أبرز الميزات",
    projectDomainLabel: "المجال",
    projectFeaturedLabel: "مشروع Enterprise",
    projectsCountLabel: "عرض {count} مشروع",
    projectsEmpty: "لا توجد مشاريع في هذا التصنيف.",
    counter1: "سنوات خبرة",
    counter2: "مشاريع مُسلّمة",
    counter3: "متخصص ERP",
    counter3Short: "ERP",
    counter4: "مدير مشروع تقني",
    counter4Short: "TPM",
    expEyebrow: "الخبرات المهنية",
    expTitle: "مسار مهني يجمع بين القيادة والتطوير والتحليل",
    expLead: "أدوار احترافية متكاملة تركز على بناء الأنظمة وقيادة الفرق وفهم احتياجات العملاء والسوق.",
    expYear1: "حاليًا",
    expYear2: "خبرة أساسية",
    expYear3: "قيادة",
    exp1:
      "قيادة تطوير الحلول المؤسسية باستخدام ASP.NET Core وSQL Server وClean Architecture مع التركيز على الأداء والتوسع.",
    exp2:
      "تصميم وتنفيذ حلول ERP شاملة تشمل المحاسبة والمخازن والمشتريات والمبيعات والتقارير وسير العمل التشغيلي.",
    exp3:
      "إدارة فرق التطوير وتحليل متطلبات العملاء وتخطيط التنفيذ ومتابعة التسليم النهائي بما يحقق أهداف العمل.",
    servicesEyebrow: "الخدمات",
    servicesTitle: "خدمات تقنية موجهة للشركات والأنظمة المؤسسية",
    servicesLead:
      "حلول احترافية للشركات التي تحتاج إلى أنظمة قابلة للنمو، تكاملات قوية، وتنفيذ منظم بجودة عالية.",
    service1Title: "تطوير أنظمة ERP",
    service1Text: "تطوير أنظمة ERP مخصصة تغطي العمليات المالية والإدارية والتشغيلية.",
    service2Title: "تطوير تطبيقات الويب",
    service2Text: "بناء تطبيقات ويب احترافية عالية الأداء بواجهات مرنة وتجربة استخدام قوية.",
    service3Title: "تطوير APIs",
    service3Text: "تصميم وتنفيذ REST APIs آمنة وقابلة للتوسع لتكامل الأنظمة والخدمات.",
    service4Title: "هندسة الأنظمة",
    service4Text: "هيكلة الأنظمة باستخدام Clean Architecture وMicroservices وفق أفضل الممارسات.",
    service5Title: "استشارات تقنية",
    service5Text: "استشارات تقنية وتحليل متطلبات الأعمال وربطها بحلول برمجية قابلة للتنفيذ.",
    service6Title: "إدارة المشاريع البرمجية",
    service6Text: "إدارة المشاريع التقنية ومتابعة فرق التطوير لضمان الجودة والالتزام بالتسليم.",
    contactEyebrow: "تواصل معي",
    contactTitle: "جاهز لمناقشة مشروعك القادم",
    contactLead:
      "إذا كنت تبحث عن مطور .NET محترف أو شريك تقني لبناء نظام مؤسسي قوي، يسعدني التواصل معك.",
    contactInfoTitle: "معلومات التواصل",
    phoneLabel: "الهاتف:",
    whatsappText: "◉ محادثة واتساب",
    whatsappFooter: "◉ واتساب",
    emailLabel: "البريد:",
    locationLabel: "الموقع:",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formMessage: "الرسالة",
    formNamePlaceholder: "اكتب اسمك",
    formEmailPlaceholder: "you@example.com",
    formMessagePlaceholder: "اكتب رسالتك هنا",
    formSubmit: "إرسال الرسالة",
    formSending: "جاري الإرسال...",
    formSuccess: "تم إرسال رسالتك بنجاح. سأتواصل معك قريبًا.",
    formError: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    formNameError: "يرجى إدخال اسمك.",
    formEmailError: "يرجى إدخال بريد إلكتروني صالح.",
    formMessageError: "يرجى كتابة رسالة (10 أحرف على الأقل).",
    footerRole: "Senior .NET Developer | ERP Specialist | Technical Project Manager",
    sent: "تم الإرسال",
    langToggleLabel: "Switch to English",
    navToggleOpen: "فتح القائمة",
    navToggleClose: "إغلاق القائمة",
    typing: ["Senior .NET Developer", "ERP Specialist", "Technical Project Manager"]
  },
  en: {
    pageTitle: "Ammar Ahmed Ibrahim | Senior .NET Developer & ERP Specialist",
    pageDescription:
      "Professional portfolio of Ammar Ahmed Ibrahim, Senior .NET Developer, ERP Specialist, and Technical Project Manager with expertise in enterprise systems, APIs, and Microservices.",
    skipToContent: "Skip to content",
    brandRole: "Senior .NET Developer",
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navServices: "Services",
    navContact: "Contact",
    heroBadge: "Available for enterprise projects",
    heroLocation: "Kafr El Sheikh, Egypt",
    heroNameAr: "Ammar Ahmed Ibrahim",
    heroSummary:
      "A highly experienced Senior .NET Developer specializing in ERP systems and enterprise solutions, with strong expertise in building scalable applications using ASP.NET Core, Angular, and Microservices, plus proven experience in project management, requirement analysis, and team leadership.",
    btnCv: "Download CV",
    btnContact: "Contact Me",
    btnProjects: "View Projects",
    profileBadgeLabel: "Enterprise Delivery",
    profileBadgeValue: "Senior .NET Developer",
    statYearsLabel: "Years of Experience",
    statYearsText: "Enterprise development, ERP delivery, and technical project leadership.",
    statFocusLabel: "Core Focus",
    statFocusValue: "ERP & Scalable APIs",
    statFocusText: "Clean Architecture, business workflows, and high-performance backend systems.",
    aboutEyebrow: "Professional Summary",
    aboutTitle: "Technical and business experience for enterprise solutions",
    aboutLead:
      "I bring a balanced mix of deep technical expertise and commercial understanding, helping companies turn complex requirements into scalable and practical systems.",
    aboutWhoTitle: "Who I Am",
    aboutP1:
      "I am Ammar Ahmed Ibrahim, a Senior .NET Developer, ERP Specialist, and Technical Project Manager with more than 5 years of experience in designing enterprise systems, leading software teams, analyzing customer requirements, and delivering professional business-ready software solutions.",
    aboutP2:
      "My strengths include full ERP system development, REST API design, Clean Architecture, CQRS, Microservices, ERP sales consultation, and transforming business requirements into real technical value.",
    educationTitle: "Education",
    educationYear: "Graduation Year: 2019",
    languagesTitle: "Languages",
    languagesPrimary: "Arabic (Native)",
    languagesSecondary: "English (Very Good)",
    strengthsTitle: "Core Strengths",
    strengthsPrimary: "ERP Systems, Team Leadership, Customer Analysis",
    strengthsSecondary: "Project Delivery & Enterprise Communication",
    skillsEyebrow: "Technical Skills",
    skillsTitle: "Modern technologies for reliable enterprise solutions",
    skillsLead: "A practical technical stack focused on performance, scalability, and professional system design.",
    projectsEyebrow: "Featured Projects",
    projectsTitle: "Enterprise solutions delivered at production scale",
    projectsLead:
      "A portfolio of systems and platforms I developed and technically led, with a focus on ERP, e-commerce, integrations, and field operations.",
    projectRoleLabel: "My Role",
    projectFeaturesLabel: "Key Features",
    projectDomainLabel: "Business Domain",
    projectFeaturedLabel: "Enterprise Project",
    projectsCountLabel: "Showing {count} projects",
    projectsEmpty: "No projects found in this category.",
    counter1: "Years Experience",
    counter2: "Projects Delivered",
    counter3: "ERP Specialist",
    counter3Short: "ERP",
    counter4: "Technical Project Manager",
    counter4Short: "TPM",
    expEyebrow: "Professional Experience",
    expTitle: "A career path combining leadership, delivery, and analysis",
    expLead:
      "Integrated professional roles focused on building systems, leading teams, and understanding market and customer needs.",
    expYear1: "Present",
    expYear2: "Core Expertise",
    expYear3: "Leadership",
    exp1:
      "Leading enterprise solution development using ASP.NET Core, SQL Server, and Clean Architecture with strong focus on scalability and performance.",
    exp2:
      "Designing and delivering full ERP solutions covering accounting, inventory, purchasing, sales, reporting, and operational workflows.",
    exp3:
      "Managing development teams, analyzing client requirements, planning execution, and ensuring quality delivery aligned with business goals.",
    servicesEyebrow: "Services",
    servicesTitle: "Professional services for enterprise and business systems",
    servicesLead:
      "Premium services for companies that need scalable systems, strong integrations, and disciplined delivery.",
    service1Title: "ERP Development",
    service1Text: "Custom ERP system development covering financial, administrative, and operational workflows.",
    service2Title: "Web Application Development",
    service2Text: "High-performance web applications with flexible interfaces and a polished user experience.",
    service3Title: "API Development",
    service3Text: "Secure and scalable REST APIs for integrations and connected software ecosystems.",
    service4Title: "System Architecture",
    service4Text: "Solution architecture using Clean Architecture and Microservices best practices.",
    service5Title: "Technical Consultation",
    service5Text: "Technical consultation, business analysis, and turning requirements into executable software plans.",
    service6Title: "Software Project Management",
    service6Text: "Managing software projects and development teams with strong focus on quality and delivery.",
    contactEyebrow: "Contact Me",
    contactTitle: "Ready to discuss your next project",
    contactLead:
      "If you need a professional .NET developer or a technical partner for a strong enterprise solution, I would be glad to connect.",
    contactInfoTitle: "Contact Information",
    phoneLabel: "Phone:",
    whatsappText: "◉ WhatsApp Chat",
    whatsappFooter: "◉ WhatsApp",
    emailLabel: "Email:",
    locationLabel: "Location:",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formNamePlaceholder: "Enter your name",
    formEmailPlaceholder: "you@example.com",
    formMessagePlaceholder: "Write your message here",
    formSubmit: "Send Message",
    formSending: "Sending...",
    formSuccess: "Your message was sent successfully. I will get back to you soon.",
    formError: "Unable to send your message. Please try again.",
    formNameError: "Please enter your name.",
    formEmailError: "Please enter a valid email address.",
    formMessageError: "Please write a message (at least 10 characters).",
    footerRole: "Senior .NET Developer | ERP Specialist | Technical Project Manager",
    sent: "Message Sent",
    langToggleLabel: "Switch to Arabic",
    navToggleOpen: "Open menu",
    navToggleClose: "Close menu",
    typing: ["Senior .NET Developer", "ERP Specialist", "Technical Project Manager"]
  }
};

let currentLang = localStorage.getItem("portfolio-language") || "ar";
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;
let emailJsReady = false;

function t(key) {
  return translations[currentLang][key] || "";
}

function applyTranslations(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dict.pageDescription);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute("content", dict.pageDescription);
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute("content", lang === "ar" ? "ar_EG" : "en_US");
  }

  langToggle.textContent = lang === "ar" ? "EN" : "AR";
  langToggle.setAttribute("aria-label", dict.langToggleLabel);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dict[key]) {
      element.setAttribute("placeholder", dict[key]);
    }
  });

  updateNavToggleLabel();
  localStorage.setItem("portfolio-language", lang);
  renderProjectFilters();
  renderProjects();
}

function updateNavToggleLabel() {
  if (!navToggle) return;
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-label", isOpen ? t("navToggleClose") : t("navToggleOpen"));
}

function runTypingEffect() {
  const phrases = translations[currentLang].typing;
  const currentPhrase = phrases[typeIndex];
  typingText.textContent = currentPhrase.slice(0, charIndex);

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex += 1;
  } else if (isDeleting && charIndex > 0) {
    charIndex -= 1;
  } else if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingTimeout = setTimeout(runTypingEffect, 1400);
    return;
  } else {
    isDeleting = false;
    typeIndex = (typeIndex + 1) % phrases.length;
  }

  typingTimeout = setTimeout(runTypingEffect, isDeleting ? 55 : 95);
}

function restartTyping() {
  clearTimeout(typingTimeout);
  typeIndex = 0;
  charIndex = 0;
  isDeleting = false;
  runTypingEffect();
}

function toggleMenu() {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  updateNavToggleLabel();
}

function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
  updateNavToggleLabel();
}

function handleScrollState() {
  if (siteHeader) {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  const headerOffset =
    parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"), 10) + 100;
  const scrollPos = window.scrollY + headerOffset;
  let currentSectionId = sections[0]?.id || "hero";

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  setActiveNav(currentSectionId);
}

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 60));

  const update = () => {
    current += increment;
    if (current >= target) {
      counter.textContent = `${target}+`;
      return;
    }
    counter.textContent = `${current}+`;
    requestAnimationFrame(update);
  };

  update();
}

function animateSkillBar(card) {
  const progress = card.dataset.progress;
  const bar = card.querySelector(".skill-bar span");
  const barContainer = card.querySelector(".skill-bar");

  if (bar && !bar.dataset.animated) {
    bar.style.width = `${progress}%`;
    bar.dataset.animated = "true";
  }

  if (barContainer) {
    barContainer.setAttribute("aria-valuenow", progress);
  }
}

function getCategoryLabel(categoryId) {
  const category = PROJECT_CATEGORIES.find((item) => item.id === categoryId);
  return category ? category.label[currentLang] : categoryId;
}

function getTechBadgeClass(tech) {
  const core = ["ASP.NET Core", ".NET 8", "Angular", "SQL Server", "Entity Framework Core", "Clean Architecture"];
  const integrations = ["Firebase", "Agora SDK", "Moyasar"];

  if (core.includes(tech)) return "tech-badge--core";
  if (integrations.includes(tech)) return "tech-badge--integration";
  return "tech-badge--api";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getFilteredProjects() {
  if (activeProjectFilter === "all") {
    return PORTFOLIO_PROJECTS;
  }
  return PORTFOLIO_PROJECTS.filter((project) => project.category === activeProjectFilter);
}

function updateProjectsCount(count) {
  if (!projectsCount) return;
  projectsCount.textContent = t("projectsCountLabel").replace("{count}", String(count));
}

function renderProjectFilters() {
  if (!projectFilters || typeof PROJECT_CATEGORIES === "undefined") return;

  projectFilters.innerHTML = PROJECT_CATEGORIES.map((category) => {
    const isActive = category.id === activeProjectFilter;
    return `<button type="button" class="projects-filter${isActive ? " active" : ""}" data-filter="${category.id}" role="tab" aria-selected="${isActive}">${escapeHtml(category.label[currentLang])}</button>`;
  }).join("");

  projectFilters.querySelectorAll(".projects-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectFilter = button.dataset.filter || "all";
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  if (!projectsGrid || typeof PORTFOLIO_PROJECTS === "undefined") return;

  const projects = getFilteredProjects();
  updateProjectsCount(projects.length);

  if (projects.length === 0) {
    projectsGrid.innerHTML = `<p class="projects-empty">${escapeHtml(t("projectsEmpty"))}</p>`;
    return;
  }

  projectsGrid.innerHTML = projects
    .map((project) => {
      const content = project.content[currentLang];
      const categoryLabel = getCategoryLabel(project.category);
      const featuredClass = project.featured ? " project-card--featured" : "";
      const featuredBadge = project.featured
        ? `<span class="project-card__badge project-card__badge--featured">${escapeHtml(t("projectFeaturedLabel"))}</span>`
        : "";

      const features = content.features
        .map((feature) => `<li>${escapeHtml(feature)}</li>`)
        .join("");

      const tags = project.technologies
        .map(
          (tech) =>
            `<span class="tech-badge ${getTechBadgeClass(tech)}">${escapeHtml(tech)}</span>`
        )
        .join("");

      return `
        <article class="glass-card project-card project-card--${project.theme}${featuredClass}" data-category="${project.category}" data-reveal="up">
          <div class="project-card__header">
            <div class="project-card__media">
              <span class="project-card__abbr">${escapeHtml(project.abbr)}</span>
              <div class="project-card__badges">
                <span class="project-card__badge">${escapeHtml(categoryLabel)}</span>
                ${featuredBadge}
              </div>
            </div>
          </div>
          <div class="project-card__body">
            <h3>${escapeHtml(content.name)}</h3>
            <p class="project-card__description">${escapeHtml(content.description)}</p>
            <div class="project-card__meta">
              <div class="project-card__meta-item">
                <span class="project-card__meta-label">${escapeHtml(t("projectRoleLabel"))}</span>
                <span class="project-card__meta-value">${escapeHtml(content.role)}</span>
              </div>
              <div class="project-card__meta-item">
                <span class="project-card__meta-label">${escapeHtml(t("projectDomainLabel"))}</span>
                <span class="project-card__meta-value">${escapeHtml(content.domain)}</span>
              </div>
              <div class="project-card__meta-item">
                <span class="project-card__meta-label">${escapeHtml(t("projectFeaturesLabel"))}</span>
                <ul class="project-card__features">${features}</ul>
              </div>
            </div>
            <div class="project-card__tags">${tags}</div>
          </div>
        </article>
      `;
    })
    .join("");

  projectsGrid.querySelectorAll("[data-reveal]").forEach((element) => {
    element.classList.remove("revealed");
    revealObserver.observe(element);
  });
}

function initProjectsShowcase() {
  renderProjectFilters();
  renderProjects();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("revealed");

      if (entry.target.classList.contains("skill-card")) {
        animateSkillBar(entry.target);
      }

      if (entry.target.classList.contains("projects-stat")) {
        const counter = entry.target.querySelector(".counter");
        if (counter && !counter.dataset.started) {
          counter.dataset.started = "true";
          animateCounter(counter);
        }
      }

      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
);

revealElements.forEach((element) => revealObserver.observe(element));
skillCards.forEach((card) => revealObserver.observe(card));
document.querySelectorAll(".stat-card").forEach((card) => revealObserver.observe(card));
document.querySelectorAll(".projects-stat").forEach((card) => revealObserver.observe(card));

function setFormStatus(message, type) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.className = "form-status";
  if (type) {
    formStatus.classList.add(`form-status--${type}`);
  }
}

function clearFieldErrors() {
  contactForm?.querySelectorAll(".form-error").forEach((el) => {
    el.textContent = "";
  });
  contactForm?.querySelectorAll(".is-invalid").forEach((el) => {
    el.classList.remove("is-invalid");
  });
}

function validateForm() {
  clearFieldErrors();
  let isValid = true;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  if (!nameInput.value.trim()) {
    document.getElementById("name-error").textContent = t("formNameError");
    nameInput.classList.add("is-invalid");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById("email-error").textContent = t("formEmailError");
    emailInput.classList.add("is-invalid");
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    document.getElementById("message-error").textContent = t("formMessageError");
    messageInput.classList.add("is-invalid");
    isValid = false;
  }

  return isValid;
}

async function handleContactSubmit(event) {
  event.preventDefault();
  setFormStatus("");

  if (!validateForm()) {
    return;
  }

  const submitButton = contactForm.querySelector("button[type='submit']");
  const originalText = t("formSubmit");
  submitButton.disabled = true;
  submitButton.textContent = t("formSending");

  const templateParams = {
    from_name: document.getElementById("name").value.trim(),
    from_email: document.getElementById("email").value.trim(),
    subject: "New Contact Form Submission",
    message: document.getElementById("message").value.trim(),
    time: new Date().toLocaleString()
  };

  try {
    if (!emailJsReady && typeof emailjs !== "undefined") {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      emailJsReady = true;
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    setFormStatus(t("formSuccess"), "success");
    contactForm.reset();
  } catch (error) {
    console.error(error);
    setFormStatus(t("formError"), "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
}

function initEmailJs() {
  if (typeof emailjs === "undefined") return;
  emailjs.init(EMAILJS_PUBLIC_KEY);
  emailJsReady = true;
}

window.addEventListener("load", () => {
  applyTranslations(currentLang);
  restartTyping();
  handleScrollState();
  initEmailJs();
  initProjectsShowcase();
  setActiveNav(window.location.hash.replace("#", "") || "hero");
  setTimeout(() => loader?.classList.add("hidden"), 650);
});

window.addEventListener("scroll", handleScrollState, { passive: true });

navToggle?.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

langToggle?.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyTranslations(currentLang);
  restartTyping();
  closeMenu();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Node)) return;

  if (navMenu.classList.contains("open") && !navMenu.contains(target) && !navToggle.contains(target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu.classList.contains("open")) {
    closeMenu();
    navToggle.focus();
  }
});

contactForm?.addEventListener("submit", handleContactSubmit);

contactForm?.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.classList.remove("is-invalid");
    const errorId = field.getAttribute("aria-describedby");
    if (errorId) {
      const errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.textContent = "";
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", href);
  });
});
