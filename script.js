const loader = document.querySelector(".loader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll("[data-reveal]");
const skillCards = document.querySelectorAll(".skill-card");
const counters = document.querySelectorAll(".counter");
const typingText = document.getElementById("typingText");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.querySelector(".contact-form");
const langToggle = document.getElementById("langToggle");

const translations = {
  ar: {
    pageTitle: "Ammar Ahmed Ibrahim | Senior .NET Developer & ERP Specialist",
    brandRole: "Senior .NET Developer",
    navHome: "الرئيسية",
    navAbout: "نبذة",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navExperience: "الخبرات",
    navServices: "الخدمات",
    navContact: "التواصل",
    heroLocation: "كفر الشيخ، مصر",
    heroNameAr: "عمار أحمد إبراهيم",
    heroSummary: "مطور برمجيات أول متخصص في أنظمة ERP والحلول المؤسسية، بخبرة قوية في بناء تطبيقات قابلة للتوسع باستخدام ASP.NET Core وAngular وMicroservices، مع سجل عملي في إدارة المشاريع التقنية وتحليل متطلبات العملاء وقيادة الفرق.",
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
    aboutLead: "أقدّم مزيجًا متوازنًا بين الخبرة التقنية العميقة والفهم التجاري العملي، ما يساعد الشركات على تحويل المتطلبات المعقدة إلى أنظمة قابلة للتنفيذ وقابلة للتوسع.",
    aboutWhoTitle: "من أنا",
    aboutP1: "أنا عمار أحمد إبراهيم، Senior .NET Developer وERP Specialist وTechnical Project Manager بخبرة تتجاوز 5 سنوات في تصميم وتطوير الأنظمة المؤسسية، وإدارة فرق البرمجة، وتحليل متطلبات العملاء، وتقديم حلول برمجية احترافية تتوافق مع احتياجات السوق والشركات.",
    aboutP2: "أتميّز في بناء أنظمة ERP متكاملة، تطوير REST APIs، تطبيق مبادئ Clean Architecture وCQRS، والعمل على Microservices، بالإضافة إلى خبرة في ERP sales consultation وتحويل الاحتياجات التشغيلية إلى قيمة تقنية حقيقية.",
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
    projectsTitle: "حلول برمجية عملية لقطاعات متعددة",
    projectsLead: "مشاريع مؤسسية مصممة لتحسين العمليات، دعم التوسع، وتقديم تجربة تشغيل قوية للشركات والعملاء.",
    projectErp: "نظام ERP متكامل لإدارة الحسابات والمبيعات والمشتريات والمخزون والموردين والعملاء والتقارير المالية.",
    projectHr: "نظام موارد بشرية متكامل يدير الحضور والانصراف والرواتب والإجازات والبيانات الوظيفية مع تكامل بصمة.",
    projectEcom: "منظومة تجارة إلكترونية تشمل الموقع والتطبيق ولوحة التحكم وتطبيق التوصيل مع إدارة الطلبات والدفع والتتبع.",
    projectDelivery: "نظام لإدارة حركة الطلبات والتوصيل يربط العمليات الميدانية بالواجهات البرمجية والتقارير التشغيلية.",
    projectRestaurant: "نظام لإدارة المطاعم يشمل الطلبات والمنتجات والمستخدمين والتقارير لتحسين سرعة التشغيل ودقة المتابعة.",
    projectDelegates: "نظام متخصص لإدارة المندوبين ومتابعة الطلبات والتحركات وربط البيانات التشغيلية عبر APIs مرنة.",
    projectDalel: "منصة تفاعلية تدعم المكالمات الصوتية والمرئية والدردشة الفورية والدفع الإلكتروني عبر تكامل Agora.",
    expEyebrow: "الخبرات المهنية",
    expTitle: "مسار مهني يجمع بين القيادة والتطوير والتحليل",
    expLead: "أدوار احترافية متكاملة تركز على بناء الأنظمة وقيادة الفرق وفهم احتياجات العملاء والسوق.",
    exp1: "قيادة تطوير الحلول المؤسسية باستخدام ASP.NET Core وSQL Server وClean Architecture مع التركيز على الأداء والتوسع.",
    exp2: "تصميم وتنفيذ حلول ERP شاملة تشمل المحاسبة والمخازن والمشتريات والمبيعات والتقارير وسير العمل التشغيلي.",
    exp3: "إدارة فرق التطوير وتحليل متطلبات العملاء وتخطيط التنفيذ ومتابعة التسليم النهائي بما يحقق أهداف العمل.",
    servicesEyebrow: "الخدمات",
    servicesTitle: "خدمات تقنية موجهة للشركات والأنظمة المؤسسية",
    servicesLead: "حلول احترافية للشركات التي تحتاج إلى أنظمة قابلة للنمو، تكاملات قوية، وتنفيذ منظم بجودة عالية.",
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
    counter1: "سنوات خبرة",
    counter2: "مشاريع مكتملة",
    counter3: "متخصص ERP",
    counter4: "إدارة فرق",
    contactEyebrow: "تواصل معي",
    contactTitle: "جاهز لمناقشة مشروعك القادم",
    contactLead: "إذا كنت تبحث عن مطور .NET محترف أو شريك تقني لبناء نظام مؤسسي قوي، يسعدني التواصل معك.",
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
    footerRole: "Senior .NET Developer | ERP Specialist | Technical Project Manager",
    sent: "تم الإرسال",
    typing: [
      "Senior .NET Developer",
      "ERP Specialist",
      "Technical Project Manager"
    ]
  },
  en: {
    pageTitle: "Ammar Ahmed Ibrahim | Senior .NET Developer & ERP Specialist",
    brandRole: "Senior .NET Developer",
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navServices: "Services",
    navContact: "Contact",
    heroLocation: "Kafr El Sheikh, Egypt",
    heroNameAr: "Ammar Ahmed Ibrahim",
    heroSummary: "A highly experienced Senior .NET Developer specializing in ERP systems and enterprise solutions, with strong expertise in building scalable applications using ASP.NET Core, Angular, and Microservices, plus proven experience in project management, requirement analysis, and team leadership.",
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
    aboutLead: "I bring a balanced mix of deep technical expertise and commercial understanding, helping companies turn complex requirements into scalable and practical systems.",
    aboutWhoTitle: "Who I Am",
    aboutP1: "I am Ammar Ahmed Ibrahim, a Senior .NET Developer, ERP Specialist, and Technical Project Manager with more than 5 years of experience in designing enterprise systems, leading software teams, analyzing customer requirements, and delivering professional business-ready software solutions.",
    aboutP2: "My strengths include full ERP system development, REST API design, Clean Architecture, CQRS, Microservices, ERP sales consultation, and transforming business requirements into real technical value.",
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
    projectsTitle: "Practical software solutions for multiple sectors",
    projectsLead: "Enterprise-grade projects designed to improve operations, support growth, and deliver a strong business experience.",
    projectErp: "A full ERP system covering accounting, sales, purchases, inventory, suppliers, customers, and financial reporting.",
    projectHr: "A complete HR system managing attendance, salaries, vacations, and employee records with fingerprint integration.",
    projectEcom: "A complete e-commerce ecosystem including website, app, dashboard, and delivery app with orders, payments, and tracking.",
    projectDelivery: "A delivery operations system that manages order movement, field workflows, and operational reporting through APIs.",
    projectRestaurant: "A restaurant management system covering orders, products, users, and reports for faster and more accurate operations.",
    projectDelegates: "A specialized representatives system for managing delegates, order movement, and operational data through flexible APIs.",
    projectDalel: "An interactive platform supporting voice calls, video calls, live chat, and online payments through Agora integration.",
    expEyebrow: "Professional Experience",
    expTitle: "A career path combining leadership, delivery, and analysis",
    expLead: "Integrated professional roles focused on building systems, leading teams, and understanding market and customer needs.",
    exp1: "Leading enterprise solution development using ASP.NET Core, SQL Server, and Clean Architecture with strong focus on scalability and performance.",
    exp2: "Designing and delivering full ERP solutions covering accounting, inventory, purchasing, sales, reporting, and operational workflows.",
    exp3: "Managing development teams, analyzing client requirements, planning execution, and ensuring quality delivery aligned with business goals.",
    servicesEyebrow: "Services",
    servicesTitle: "Professional services for enterprise and business systems",
    servicesLead: "Premium services for companies that need scalable systems, strong integrations, and disciplined delivery.",
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
    counter1: "Years Experience",
    counter2: "Projects Completed",
    counter3: "ERP Specialist",
    counter4: "Team Management",
    contactEyebrow: "Contact Me",
    contactTitle: "Ready to discuss your next project",
    contactLead: "If you need a professional .NET developer or a technical partner for a strong enterprise solution, I would be glad to connect.",
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
    footerRole: "Senior .NET Developer | ERP Specialist | Technical Project Manager",
    sent: "Message Sent",
    typing: [
      "Senior .NET Developer",
      "ERP Specialist",
      "Technical Project Manager"
    ]
  }
};

let currentLang = localStorage.getItem("portfolio-language") || "ar";
let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function applyTranslations(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = dict.pageTitle;
  langToggle.textContent = lang === "ar" ? "EN" : "AR";

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

  localStorage.setItem("portfolio-language", lang);
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
}

function closeMenu() {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}

function handleScrollState() {
  let currentSectionId = "";
  sections.forEach((section) => {
    const offsetTop = section.offsetTop - 140;
    const offsetHeight = section.offsetHeight;
    if (window.scrollY >= offsetTop && window.scrollY < offsetTop + offsetHeight) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSectionId}`;
    link.classList.toggle("active", isActive);
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("revealed");

    if (entry.target.classList.contains("skill-card")) {
      const progress = entry.target.dataset.progress;
      const bar = entry.target.querySelector(".skill-bar span");
      if (bar && !bar.dataset.animated) {
        bar.style.width = `${progress}%`;
        bar.dataset.animated = "true";
      }
    }

    if (entry.target.classList.contains("stat-card")) {
      const counter = entry.target.querySelector(".counter");
      if (counter && !counter.dataset.started) {
        counter.dataset.started = "true";
        animateCounter(counter);
      }
    }

    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});

revealElements.forEach((element) => observer.observe(element));
skillCards.forEach((card) => observer.observe(card));
document.querySelectorAll(".stat-card").forEach((card) => observer.observe(card));

window.addEventListener("load", () => {
  applyTranslations(currentLang);
  restartTyping();
  handleScrollState();
  setTimeout(() => loader?.classList.add("hidden"), 700);
});

window.addEventListener("scroll", handleScrollState);

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

  if (
    navMenu.classList.contains("open") &&
    !navMenu.contains(target) &&
    !navToggle.contains(target)
  ) {
    closeMenu();
  }
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button[type='submit']");
  const originalText = translations[currentLang].formSubmit;
  button.textContent = translations[currentLang].sent;
  button.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    button.textContent = originalText;
    button.disabled = false;
  }, 1800);
});

emailjs.init("8F61kV5kJ7UxoLurq");

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: "New Contact Form Submission",
        message: document.getElementById("message").value,
        time: new Date().toLocaleString()
    };

    try {
        await emailjs.send(
            "service_0wmhhdt",
            "template_3bnqk4y",
            templateParams
        );

        alert("Message sent successfully!");
    } catch (error) {
        console.error(error);
        alert("Failed to send message.");
    }
});
