/**
 * Portfolio projects catalog — bilingual content for project showcase.
 * Categories align with CV business domains.
 */
const PROJECT_CATEGORIES = [
  { id: "all", label: { ar: "جميع المشاريع", en: "All Projects" } },
  { id: "erp", label: { ar: "أنظمة ERP", en: "ERP Systems" } },
  { id: "hr", label: { ar: "أنظمة الموارد البشرية", en: "HR Systems" } },
  { id: "crm", label: { ar: "أنظمة CRM", en: "CRM Systems" } },
  { id: "ecommerce", label: { ar: "حلول التجارة الإلكترونية", en: "E-Commerce Solutions" } },
  { id: "delivery-logistics", label: { ar: "التوصيل واللوجستيات", en: "Delivery & Logistics" } },
  { id: "restaurant", label: { ar: "أنظمة المطاعم", en: "Restaurant Systems" } },
  { id: "mobile-api", label: { ar: "المنصات والتطبيقات", en: "Mobile & API Platforms" } }
];

const PORTFOLIO_PROJECTS = [
  {
    id: "enterprise-erp",
    category: "erp",
    featured: true,
    theme: "erp",
    abbr: "ERP",
    technologies: ["ASP.NET Core", ".NET 8", "Angular", "SQL Server", "Entity Framework Core", "Clean Architecture"],
    content: {
      ar: {
        name: "Enterprise ERP System",
        description:
          "منصة ERP مؤسسية متكاملة لإدارة العمليات المالية والتشغيلية والمخزون والمبيعات والمشتريات ضمن بيئة واحدة قابلة للتوسع.",
        role: "Senior .NET Developer & Technical Project Manager",
        domain: "Enterprise Resource Planning",
        features: [
          "المحاسبة والتقارير المالية",
          "المبيعات والمشتريات والمخزون",
          "إدارة الموردين والعملاء",
          "سير عمل تشغيلي قابل للتخصيص"
        ]
      },
      en: {
        name: "Enterprise ERP System",
        description:
          "A unified enterprise ERP platform for finance, operations, inventory, sales, and procurement within a scalable business environment.",
        role: "Senior .NET Developer & Technical Project Manager",
        domain: "Enterprise Resource Planning",
        features: [
          "Accounting & financial reporting",
          "Sales, purchasing & inventory",
          "Supplier & customer management",
          "Configurable operational workflows"
        ]
      }
    }
  },
  {
    id: "ecommerce-erp",
    category: "erp",
    featured: true,
    theme: "ecom-erp",
    abbr: "E-ERP",
    technologies: ["ASP.NET Core", ".NET 8", "Angular", "SQL Server", "REST APIs", "Clean Architecture", "Moyasar"],
    content: {
      ar: {
        name: "E-Commerce ERP",
        description:
          "حل ERP مرتبط بالتجارة الإلكترونية يربط الطلبات الرقمية بالمخزون والمحاسبة ودورة Order-to-Cash بشكل آلي.",
        role: "Senior .NET Developer & ERP Specialist",
        domain: "Retail & Enterprise Commerce",
        features: [
          "مزامنة المخزون مع المتجر الإلكتروني",
          "إدارة الطلبات والفوترة والتحصيل",
          "تكامل المدفوعات الإلكترونية",
          "تقارير مبيعات وتشغيل موحدة"
        ]
      },
      en: {
        name: "E-Commerce ERP",
        description:
          "An ERP solution integrated with e-commerce, connecting digital orders with inventory, accounting, and automated order-to-cash cycles.",
        role: "Senior .NET Developer & ERP Specialist",
        domain: "Retail & Enterprise Commerce",
        features: [
          "Inventory sync with online store",
          "Order, invoicing & collection management",
          "Online payment integration",
          "Unified sales & operations reporting"
        ]
      }
    }
  },
  {
    id: "crm-system",
    category: "crm",
    featured: true,
    theme: "crm",
    abbr: "CRM",
    technologies: ["ASP.NET Core", ".NET 8", "Angular", "SQL Server", "Entity Framework Core", "REST APIs"],
    content: {
      ar: {
        name: "CRM System",
        description:
          "نظام CRM لإدارة علاقات العملاء ومسار المبيعات ومتابعة الفرص والتواصل مع فرق المبيعات والدعم.",
        role: "Senior .NET Developer & ERP Specialist",
        domain: "Customer Relationship Management",
        features: [
          "ملفات العملاء وسجل التفاعلات",
          "إدارة الفرص ومراحل البيع",
          "متابعة المهام والمتابعات",
          "تكامل مع وحدة المبيعات في ERP"
        ]
      },
      en: {
        name: "CRM System",
        description:
          "A CRM system for customer relationship management, sales pipeline tracking, and coordinated sales and support operations.",
        role: "Senior .NET Developer & ERP Specialist",
        domain: "Customer Relationship Management",
        features: [
          "Customer profiles & interaction history",
          "Lead & opportunity pipeline management",
          "Task & follow-up tracking",
          "Integration with ERP sales module"
        ]
      }
    }
  },
  {
    id: "mobile-erp",
    category: "mobile-api",
    featured: true,
    theme: "mobile-erp",
    abbr: "M-ERP",
    technologies: ["ASP.NET Core", ".NET 8", "REST APIs", "Firebase", "SQL Server", "Entity Framework Core"],
    content: {
      ar: {
        name: "Mobile ERP",
        description:
          "تطبيق ERP متنقل يمكّن الفرق الميدانية والإدارية من الوصول للبيانات التشغيلية والموافقات في الوقت الفعلي.",
        role: "Senior .NET Developer & API Architect",
        domain: "Mobile Enterprise Operations",
        features: [
          "عرض المخزون والطلبات لحظيًا",
          "موافقات تشغيلية عبر الجوال",
          "REST APIs آمنة وقابلة للتوسع",
          "إشعارات فورية عبر Firebase"
        ]
      },
      en: {
        name: "Mobile ERP",
        description:
          "A mobile ERP application enabling field and management teams to access operational data and approvals in real time.",
        role: "Senior .NET Developer & API Architect",
        domain: "Mobile Enterprise Operations",
        features: [
          "Real-time inventory & order visibility",
          "Mobile operational approvals",
          "Secure, scalable REST APIs",
          "Instant notifications via Firebase"
        ]
      }
    }
  },
  {
    id: "hr-management",
    category: "hr",
    featured: true,
    theme: "hr",
    abbr: "HR",
    technologies: ["ASP.NET Core", ".NET 8", "SQL Server", "Entity Framework Core", "REST APIs"],
    content: {
      ar: {
        name: "HR Management System",
        description:
          "نظام موارد بشرية متكامل لإدارة بيانات الموظفين والحضور والرواتب والإجازات مع تكامل أجهزة البصمة.",
        role: "Senior .NET Developer & Technical Project Manager",
        domain: "Human Resources",
        features: [
          "الحضور والانصراف وتكامل البصمة",
          "إدارة الرواتب والإجازات",
          "سجل الموظفين والبيانات الوظيفية",
          "تقارير HR تشغيلية"
        ]
      },
      en: {
        name: "HR Management System",
        description:
          "A complete HR management system for employee records, attendance, payroll, and leave management with fingerprint device integration.",
        role: "Senior .NET Developer & Technical Project Manager",
        domain: "Human Resources",
        features: [
          "Attendance & fingerprint integration",
          "Payroll & leave management",
          "Employee records & job data",
          "Operational HR reporting"
        ]
      }
    }
  },
  {
    id: "ecommerce-platform",
    category: "ecommerce",
    featured: false,
    theme: "ecom",
    abbr: "ECOM",
    technologies: ["ASP.NET Core", "Angular", "SQL Server", "REST APIs", "Moyasar", "Clean Architecture"],
    content: {
      ar: {
        name: "E-Commerce Platform",
        description:
          "منظومة تجارة إلكترونية متعددة القنوات تشمل المتجر والتطبيق ولوحة التحكم وتطبيق التوصيل.",
        role: "Senior .NET Developer & ERP Specialist",
        domain: "Multi-Channel E-Commerce",
        features: [
          "متجر ويب وتطبيق جوال",
          "لوحة تحكم وتطبيق توصيل",
          "إدارة الطلبات والدفع والتتبع",
          "تكامل مع عمليات المخزون والتسليم"
        ]
      },
      en: {
        name: "E-Commerce Platform",
        description:
          "A multi-channel e-commerce ecosystem including web store, mobile app, admin dashboard, and delivery application.",
        role: "Senior .NET Developer & ERP Specialist",
        domain: "Multi-Channel E-Commerce",
        features: [
          "Web store & mobile application",
          "Admin dashboard & delivery app",
          "Order, payment & tracking management",
          "Inventory & fulfillment integration"
        ]
      }
    }
  },
  {
    id: "delivery-system",
    category: "delivery-logistics",
    featured: false,
    theme: "delivery",
    abbr: "DLV",
    technologies: ["ASP.NET Core", "REST APIs", "SQL Server", "Entity Framework Core"],
    content: {
      ar: {
        name: "Delivery System",
        description:
          "نظام تشغيلي لإدارة حركة الطلبات والتوصيل وربط العمليات الميدانية بالواجهات البرمجية والتقارير.",
        role: "Senior .NET Developer",
        domain: "Delivery Operations",
        features: [
          "تتبع الطلبات والمسارات",
          "ربط المندوبين بالعمليات",
          "REST APIs للتكامل",
          "تقارير تشغيلية لحظية"
        ]
      },
      en: {
        name: "Delivery System",
        description:
          "An operational delivery system managing order movement, field workflows, and API-driven operational reporting.",
        role: "Senior .NET Developer",
        domain: "Delivery Operations",
        features: [
          "Order & route tracking",
          "Field courier operations linkage",
          "Integration-ready REST APIs",
          "Real-time operational reports"
        ]
      }
    }
  },
  {
    id: "mandobeen-system",
    category: "delivery-logistics",
    featured: false,
    theme: "delegates",
    abbr: "MND",
    technologies: ["ASP.NET Core", "REST APIs", "SQL Server", "Entity Framework Core"],
    content: {
      ar: {
        name: "Mandobeen System",
        description:
          "نظام متخصص لإدارة المندوبين ومتابعة الطلبات والتحركات وربط البيانات التشغيلية عبر واجهات برمجية مرنة.",
        role: "Senior .NET Developer",
        domain: "Field Sales & Logistics",
        features: [
          "إدارة المندوبين والمناطق",
          "متابعة الطلبات والتحركات",
          "APIs للتكامل مع ERP",
          "تقارير أداء ميداني"
        ]
      },
      en: {
        name: "Mandobeen System",
        description:
          "A specialized representatives system for managing field agents, order movement, and operational data through flexible APIs.",
        role: "Senior .NET Developer",
        domain: "Field Sales & Logistics",
        features: [
          "Representative & territory management",
          "Order & movement tracking",
          "ERP integration APIs",
          "Field performance reporting"
        ]
      }
    }
  },
  {
    id: "restaurant-system",
    category: "restaurant",
    featured: false,
    theme: "restaurant",
    abbr: "RST",
    technologies: ["ASP.NET Core", "REST APIs", "SQL Server", "Entity Framework Core"],
    content: {
      ar: {
        name: "Restaurant Management System",
        description:
          "نظام لإدارة المطاعم يشمل الطلبات والمنتجات والمستخدمين والتقارير لتحسين سرعة التشغيل ودقة المتابعة.",
        role: "Senior .NET Developer",
        domain: "Food & Beverage Operations",
        features: [
          "إدارة الطلبات والمنتجات",
          "صلاحيات المستخدمين والفروع",
          "تقارير مبيعات وتشغيل",
          "REST APIs للتكامل"
        ]
      },
      en: {
        name: "Restaurant Management System",
        description:
          "A restaurant management system covering orders, products, users, and reports for faster and more accurate operations.",
        role: "Senior .NET Developer",
        domain: "Food & Beverage Operations",
        features: [
          "Order & product management",
          "User roles & branch control",
          "Sales & operations reporting",
          "REST APIs for integration"
        ]
      }
    }
  },
  {
    id: "daleel-platform",
    category: "mobile-api",
    featured: true,
    theme: "dalel",
    abbr: "DAL",
    technologies: ["ASP.NET Core", ".NET 8", "REST APIs", "Agora SDK", "Moyasar", "Firebase"],
    content: {
      ar: {
        name: "Daleel Platform",
        description:
          "منصة تفاعلية تدعم المكالمات الصوتية والمرئية والدردشة الفورية والدفع الإلكتروني عبر تكامل Agora وMoyasar.",
        role: "Senior .NET Developer & API Architect",
        domain: "Interactive Digital Platform",
        features: [
          "مكالمات صوتية ومرئية (Agora SDK)",
          "دردشة فورية وإشعارات Firebase",
          "دفع إلكتروني عبر Moyasar",
          "REST APIs Backend على ASP.NET Core"
        ]
      },
      en: {
        name: "Daleel Platform",
        description:
          "An interactive platform supporting voice/video calls, live chat, and online payments through Agora and Moyasar integrations.",
        role: "Senior .NET Developer & API Architect",
        domain: "Interactive Digital Platform",
        features: [
          "Voice & video calls (Agora SDK)",
          "Live chat & Firebase notifications",
          "Online payments via Moyasar",
          "ASP.NET Core REST API backend"
        ]
      }
    }
  }
];
