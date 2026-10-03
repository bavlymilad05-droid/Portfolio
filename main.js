/**
 * ============================================================================
 * BAVLY MILAD NAEEM — MAIN SCRIPT & BILINGUAL ENGINE
 * Handles:
 * - Full Arabic (RTL) & English (LTR) language toggling
 * - Dark & Light mode theme switching
 * - Smooth scroll & active navigation tracking
 * - 1-Click contact details copying & toast messages
 * - Interactive contact form handling
 * ============================================================================
 */

// Comprehensive Bilingual Translations Dictionary
const translations = {
  en: {
    // Navigation
    navBrand: "BAVLY.AI",
    navAbout: "About Me",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    navGetInTouch: "Get In Touch",

    // Hero Section
    heroTag: "⚡ Hardware & AI Automation",
    heroName: "Bavly Milad Naeem",
    heroRole: "Electronics & AI Automation Engineer",
    heroSubtitle: "Blending a strong foundation in digital logic, hardware implementation, and PCB design with advanced AI workflow automation.",
    heroCtaProjects: "View Projects",
    heroCtaContact: "Contact Me",
    heroStatCgpa: "3.76 / 4.00",
    heroStatCgpaLabel: "MUST University CGPA",
    heroStatFocus: "Hardware + AI",
    heroStatFocusLabel: "Dual Engineering Edge",
    heroStatLoc: "Cairo, Egypt",
    heroStatLocLabel: "Current Base",
    heroBadgeHardware: "Hardware Synthesis",
    heroBadgeAi: "AI Automation (n8n)",

    // About Me Section
    aboutTag: "01 // Profile",
    aboutTitle: "Bridging Silicon with Intelligence",
    aboutBio1: "Bachelor of Science student in Electronics and Communication Engineering at MUST University (CGPA: 3.76/4.00). Passionate about bridging hardware and software, with specialized training in building automated processes and AI-powered solutions.",
    aboutBio2: "From architecting multi-stage analog PCB amplifiers to engineering complex event-driven autonomous n8n workflows, I approach technical challenges with deep analytical rigor and systematic troubleshooting.",
    aboutHighlight1Title: "Academic Excellence",
    aboutHighlight1Desc: "Consistently top-ranked with a 3.76/4.00 CGPA in Electronics & Communication Engineering.",
    aboutHighlight2Title: "Hardware & PCB Mastery",
    aboutHighlight2Desc: "Hands-on experience in schematic capture, circuit simulation, and precision multilayer routing.",
    aboutHighlight3Title: "Autonomous AI Workflows",
    aboutHighlight3Desc: "Specialized in n8n automation, API integrations, and deploying practical AI agents for workflows.",

    // Skills Section
    skillsTag: "02 // Technical Arsenal",
    skillsTitle: "Core Competencies & Tools",
    skillsSubtitle: "A balanced skill stack spanning circuit design, mathematical computing, programming, and cloud workflow automations.",
    skillN8nDesc: "Autonomous workflow orchestration, webhook triggers, multi-system synchronization & LLM agent pipelines.",
    skillAltiumDesc: "Schematic capture, PCB layout, layer stackup, impedance matching, and differential routing.",
    skillMatlabDesc: "Digital signal processing, matrix operations, analog/digital filter design & circuit simulations.",
    skillAutocadDesc: "Precision 2D/3D technical drafting, electrical schematics layout, and physical dimensioning.",
    skillCppDesc: "Object-oriented programming, algorithmic efficiency, logic control, and embedded logic basics.",
    skillApiDesc: "RESTful architecture, OAuth authentication, JSON parsing, and full cross-platform connectivity.",
    skillOfficeDesc: "Comprehensive technical reporting, Excel data analytics, modeling, and executive presentations.",
    badgeAutomation: "AI & Workflows",
    badgeHardware: "Electronics & EDA",
    badgeAnalysis: "Simulation",
    badgeCad: "Drafting",
    badgeDev: "Programming",
    badgeIntegration: "Connectivity",
    badgeProductivity: "Documentation",

    // Experience & Education Section
    expTag: "03 // Career & Academics",
    expTitle: "Experience & Education",
    expSubtitle: "Milestones in professional internships, specialized engineering training, and university academics.",
    expDepiDate: "July 2026 – Dec 2026",
    expDepiRole: "AI Automation Engineering Intern",
    expDepiCompany: "Digital Egypt Pioneers Initiative (DEPI)",
    expDepiDesc: "Completed an intensive internship focused on enterprise workflow automation using n8n. Designed automated data pipelines, integrated third-party REST APIs, and architected AI-driven solutions to optimize complex technical procedures.",
    expEriDate: "June 2026 – July 2026",
    expEriRole: "PCB Design Trainee",
    expEriCompany: "Electronics Research Institute (ERI)",
    expEriDesc: "Gained professional hands-on experience in schematic capture, PCB layout, and routing. Designed and implemented CE amplifiers, multistage amplifiers, and regulated power supplies with rigorous adherence to signal integrity standards.",
    expMustDate: "Sept 2024 – July 2029",
    expMustRole: "Bachelor of Science in Electronics & Communication Engineering",
    expMustCompany: "Misr University for Science & Technology (MUST)",
    expMustDesc: "Pursuing Bachelor's degree with an outstanding academic performance (CGPA: 3.76/4.00). Comprehensive coursework covering semiconductor devices, digital logic, communications theory, microprocessors, and electromagnetic fields.",

    // Projects Section
    projTag: "04 // Engineering Showcase",
    projTitle: "Featured Technical Projects",
    projSubtitle: "Real-world hardware designs and digital systems tested for reliability, precision, and performance.",
    proj1Title: "Reaction Time Race Game",
    proj1Desc: "Developed a 555 Timer IC-based 'Fastest Finger First' game to test reaction speed. Engineered circuit timing networks, debounce logic, and output state indicators, focusing on technical troubleshooting and reliable circuit operation.",
    proj1Tag1: "NE555 Timer IC",
    proj1Tag2: "Analog Timing",
    proj1Tag3: "Circuit Debugging",
    proj1SimTitle: "Interactive 555-Timer Simulator",
    proj1SimPrompt: "Click to Start Test",
    proj1SimSub: "Simulates 555 RC charging cycle & reaction capture",
    proj1StatTime: "Reaction Time:",
    proj1StatRank: "Performance:",
    proj1StatBest: "Best Score:",

    proj2Title: "Universal Combinational Logic System",
    proj2Desc: "Designed and implemented a modular logic system built purely from discrete basic gates (AND, OR, NOT, XOR). Seamlessly incorporates a Full Adder, Full Subtractor, 2:1 Multiplexer, and 2:4 Decoder without pre-built IC modules.",
    proj2Tag1: "Digital Logic Design",
    proj2Tag2: "Discrete Gates",
    proj2Tag3: "Arithmetic Circuits",
    proj2SimTitle: "Interactive Gate Logic Simulator",
    proj2InputA: "Input A",
    proj2InputB: "Input B",
    proj2InputCin: "Carry In (Cin / Bin)",
    proj2InputSel: "MUX Select (S)",
    proj2OutSum: "Full Adder Sum",
    proj2OutCarry: "Full Adder Carry",
    proj2OutDiff: "Full Subtractor Diff",
    proj2OutBorrow: "Subtractor Borrow",
    proj2OutMux: "2:1 MUX Output (Y)",
    proj2OutDec: "2:4 Decoder Line",

    // Contact & Footer
    contactTag: "05 // Connect",
    contactTitle: "Initiate Communication",
    contactSubtitle: "Looking to collaborate on AI workflow automation, circuit design, or discuss prospective opportunities? Reach out below.",
    contactLocLabel: "Location",
    contactLocVal: "Shoubra, Cairo, Egypt",
    contactEmailLabel: "Email",
    contactEmailVal: "bavlymilad05@gmail.com",
    contactPhoneLabel: "Phone",
    contactPhoneVal: "+201201866156",
    contactLinkedinLabel: "LinkedIn Profile",
    contactLinkedinVal: "linkedin.com/in/bavly-milad-n",
    contactFormTitle: "Send a Direct Message",
    formNameLabel: "Your Name",
    formNamePlaceholder: "e.g. John Doe",
    formEmailLabel: "Your Email Address",
    formEmailPlaceholder: "e.g. john@example.com",
    formSubjectLabel: "Subject",
    formSubjectPlaceholder: "Project Collaboration / Job Opportunity",
    formMsgLabel: "Message",
    formMsgPlaceholder: "Describe your project or inquiry in detail...",
    formSubmitBtn: "Transmit Message ⚡",
    formSending: "Transmitting...",
    formSuccessMsg: "Thank you! Your message transmission has been queued successfully.",
    footerCopy: "© 2026 Bavly Milad Naeem. Engineered with precision.",
    toastCopied: "Copied to clipboard!"
  },

  ar: {
    // Navigation
    navBrand: "بافلي.ذكاء",
    navAbout: "نبذة عني",
    navSkills: "المهارات",
    navExperience: "الخبرة والتعليم",
    navProjects: "المشاريع",
    navContact: "تواصل معي",
    navGetInTouch: "تواصل الآن",

    // Hero Section
    heroTag: "⚡ هندسة الإلكترونيات وأتمتة الذكاء الاصطناعي",
    heroName: "بافلي ميلاد نعيم",
    heroRole: "مهندس إلكترونيات وأتمتة الذكاء الاصطناعي",
    heroSubtitle: "الدمج الاحترافي بين الأسس الراسخة في المنطق الرقمي، والتنفيذ العتادي، وتصميم لوحات الدوائر المطبوعة (PCB)، مع أحدث تقنيات أتمتة مسارات العمل بالذكاء الاصطناعي.",
    heroCtaProjects: "استعراض المشاريع",
    heroCtaContact: "تواصل معي",
    heroStatCgpa: "3.76 / 4.00",
    heroStatCgpaLabel: "المعدل التراكمي (جامعة MUST)",
    heroStatFocus: "عتاد + ذكاء اصطناعي",
    heroStatFocusLabel: "تكامل هندسي مزدوج",
    heroStatLoc: "القاهرة، مصر",
    heroStatLocLabel: "الموقع الحالي",
    heroBadgeHardware: "تصميم وتنفيذ العتاد",
    heroBadgeAi: "أتمتة الذكاء الاصطناعي (n8n)",

    // About Me Section
    aboutTag: "01 // السيرة الشخصية",
    aboutTitle: "الربط بين العتاد الصلب والذكاء البرمجي",
    aboutBio1: "طالب بكالوريوس في هندسة الإلكترونيات والاتصالات بجامعة مصر للعلوم والتكنولوجيا (MUST) بمعدل تراكمي ممتاز 3.76 / 4.00. شغوف بالجمع المتكامل بين الأنظمة العتادية والبرمجية، مع تدريب متخصص ومكثف في بناء مسارات العمل المؤتمتة والحلول المدعومة بالذكاء الاصطناعي.",
    aboutBio2: "من تصميم مكبرات الإشارة التناظرية متعددة المراحل على لوحات الدوائر المطبوعة (PCB)، إلى هندسة مسارات أتمتة ذاتية متطورة باستخدام n8n وربط واجهات برمجة التطبيقات (APIs)، أتعامل مع التحديات الهندسية بمنهجية تحليلية دقيقة واستكشاف أخطاء ممنهج.",
    aboutHighlight1Title: "تفوق أكاديمي متميز",
    aboutHighlight1Desc: "حاصل على معدل تراكمي 3.76 / 4.00 في هندسة الإلكترونيات والاتصالات.",
    aboutHighlight2Title: "احتراف تصميم وتصنيع الـ PCB",
    aboutHighlight2Desc: "خبرة عملية في رسم المخططات، ومحاكاة الدوائر، والتوجيه الدقيق متعدد الطبقات.",
    aboutHighlight3Title: "مسارات عمل ذاتية بالذكاء الاصطناعي",
    aboutHighlight3Desc: "متخصص في أتمتة نُظم n8n، وتكامل الـ APIs، وبناء مساعدين أذكياء للمهام المتقدمة.",

    // Skills Section
    skillsTag: "02 // الترسانة التقنية",
    skillsTitle: "المهارات والأدوات الهندسية",
    skillsSubtitle: "مجموعة مهارات متوازنة تجمع بين تصميم الدوائر الإلكترونية، الحوسبة الرياضية، البرمجة، وأتمتة مسارات العمل السحابية.",
    skillN8nDesc: "بناء مسارات العمل المؤتمتة، معالجة الـ Webhooks، مزامنة الأنظمة المتعددة ودمج نماذج الذكاء الاصطناعي الكبيرة.",
    skillAltiumDesc: "رسم المخططات الإلكترونية، تخطيط الـ PCB، ضبط المعاوقة، والتوجيه التفاضلي للإشارات عالية السرعة.",
    skillMatlabDesc: "معالجة الإشارات الرقمية، العمليات المصفوفية، تصميم المرشحات التناظرية والرقمية ومحاكاة الدوائر.",
    skillAutocadDesc: "الرسم الهندسي الدقيق ثنائي وثلاثي الأبعاد، وتخطيط المخططات الكهربائية والقياسات الفيزيائية.",
    skillCppDesc: "البرمجة كائنية التوجه (OOP)، كفاءة الخوارزميات، والتحكم المنطقي في الأنظمة المدمجة.",
    skillApiDesc: "معمارية RESTful، مصادقة بروتوكولات OAuth، معالجة بيانات JSON والتكامل الشامل بين المنصات.",
    skillOfficeDesc: "إعداد التقارير الفنية المتقدمة، تحليل ونمذجة البيانات في Excel، والعروض التقديمية الاحترافية.",
    badgeAutomation: "أتمتة وذكاء اصطناعي",
    badgeHardware: "إلكترونيات وتصميم",
    badgeAnalysis: "محاكاة وتحليل",
    badgeCad: "رسم هندسي",
    badgeDev: "برمجة",
    badgeIntegration: "تكامل الأنظمة",
    badgeProductivity: "توثيق وإنتاجية",

    // Experience & Education Section
    expTag: "03 // المسار المهني والأكاديمي",
    expTitle: "الخبرات المهنية والتعليم",
    expSubtitle: "محطات في التدريب المهني المتخصص، والخبرة العملية في المؤسسات البحثية والجامعية.",
    expDepiDate: "يوليو 2026 – ديسمبر 2026",
    expDepiRole: "هندسة أتمتة الذكاء الاصطناعي (متدرب)",
    expDepiCompany: "مبادرة رواد مصر الرقمية (DEPI)",
    expDepiDesc: "إتمام تدريب مكثف يركز على أتمتة مسارات العمل المؤسسية باستخدام n8n. تصميم خطوط معالجة البيانات الآلية، دمج واجهات برمجة التطبيقات (APIs)، وهندسة حلول ذكية لرفع كفاءة الإجراءات التقنية.",
    expEriDate: "يونيو 2026 – يوليو 2026",
    expEriRole: "تدريب تصميم لوحات الدوائر المطبوعة (PCB)",
    expEriCompany: "معهد بحوث الإلكترونيات (ERI)",
    expEriDesc: "اكتساب خبرة عملية احترافية في التقاط المخططات، وتخطيط لوحات الـ PCB، والتوجيه الإلكتروني. تصميم مكبرات الباعث المشترك (CE)، والمكبرات متعددة المراحل، ومصادر القدرة المنظمة مع الالتزام التام بمعايير سلامة الإشارة.",
    expMustDate: "سبتمبر 2024 – يوليو 2029",
    expMustRole: "بكالوريوس هندسة الإلكترونيات والاتصالات",
    expMustCompany: "جامعة مصر للعلوم والتكنولوجيا (MUST)",
    expMustDesc: "دراسة البكالوريوس مع تحقيق أداء أكاديمي فائق (معدل تراكمي: 3.76 / 4.00). دراسة متقدمة في أشباه الموصلات، المنطق الرقمي، نظريات الاتصالات، المعالجات الدقيقة، والمجالات الكهرومغناطيسية.",

    // Projects Section
    projTag: "04 // معرض المشاريع",
    projTitle: "المشاريع الهندسية البارزة",
    projSubtitle: "تصاميم عتادية وأنظمة رقمية تم اختبارها بدقة لضمان الاعتمادية والأداء العالي.",
    proj1Title: "لعبة سباق سرعة رد الفعل (Fastest Finger First)",
    proj1Desc: "تطوير لعبة قياس سرعة رد الفعل تعتمد على دائرة المؤقت المتكاملة 555 Timer IC. تصميم شبكات التوقيت التناظرية، ومنع ارتداد الإشارة (Debounce)، ومؤشرات الحالة الخرجية مع التركيز على الاستكشاف الفني للأخطاء وضمان موثوقية التشغيل.",
    proj1Tag1: "المؤقت المتكامل 555 IC",
    proj1Tag2: "توقيت تناظري",
    proj1Tag3: "استكشاف وتصحيح الدوائر",
    proj1SimTitle: "محاكي تفاعلي للمؤقت 555",
    proj1SimPrompt: "اضغط لبدء الاختبار",
    proj1SimSub: "يحاكي دورة شحن مكثف الـ RC ورصد سرعة الاستجابة",
    proj1StatTime: "زمن الاستجابة:",
    proj1StatRank: "التقييم:",
    proj1StatBest: "أفضل رقم:",

    proj2Title: "نظام المنطق التوافقي الشامل (Combinational Logic)",
    proj2Desc: "تصميم وتنفيذ نظام منطقي تركيبي متكامل مبني بالكامل من البوابات المنطقية الأساسية المستقلة (AND, OR, NOT, XOR). يشتمل النظام على جامع كامل (Full Adder)، وطارح كامل (Full Subtractor)، ومضاعف إرسال (Multiplexer 2:1)، ومفكك تشفير (Decoder 2:4) دون استخدام دوائر متكاملة جاهزة.",
    proj2Tag1: "تصميم المنطق الرقمي",
    proj2Tag2: "بوابات منطقية منفصلة",
    proj2Tag3: "دوائر الحساب الرقمي",
    proj2SimTitle: "محاكي الدوائر المنطقية التفاعلي",
    proj2InputA: "المدخل A",
    proj2InputB: "المدخل B",
    proj2InputCin: "الحمل / الاستعارة (Cin)",
    proj2InputSel: "اختيار الموزع (S)",
    proj2OutSum: "ناتج الجمع (Sum)",
    proj2OutCarry: "حمل الجمع (Carry)",
    proj2OutDiff: "فرق الطرح (Diff)",
    proj2OutBorrow: "استعارة الطرح (Borrow)",
    proj2OutMux: "خرج الموزع 2:1 (Y)",
    proj2OutDec: "الخط النشط لمفكك 2:4",

    // Contact & Footer
    contactTag: "05 // التواصل",
    contactTitle: "بدء التواصل المباشر",
    contactSubtitle: "هل ترغب في التعاون في مشاريع أتمتة الذكاء الاصطناعي، تصميم الدوائر الإلكترونية، أو مناقشة فرص العمل المتاحة؟ يسعدني تواصلك.",
    contactLocLabel: "الموقع الجغرافي",
    contactLocVal: "شبرا، القاهرة، جمهورية مصر العربية",
    contactEmailLabel: "البريد الإلكتروني",
    contactEmailVal: "bavlymilad05@gmail.com",
    contactPhoneLabel: "رقم الهاتف",
    contactPhoneVal: "+201201866156",
    contactLinkedinLabel: "حساب لينكد إن",
    contactLinkedinVal: "linkedin.com/in/bavly-milad-n",
    contactFormTitle: "إرسال رسالة مباشرة",
    formNameLabel: "الاسم الكامل",
    formNamePlaceholder: "مثال: أحمد محمد",
    formEmailLabel: "البريد الإلكتروني",
    formEmailPlaceholder: "مثال: name@example.com",
    formSubjectLabel: "الموضوع",
    formSubjectPlaceholder: "فرصة تعاون / مشروع هندسي",
    formMsgLabel: "الرسالة",
    formMsgPlaceholder: "اكتب تفاصيل استفسارك أو مشروعك هنا...",
    formSubmitBtn: "إرسال الرسالة الآن ⚡",
    formSending: "جاري الإرسال...",
    formSuccessMsg: "تم استلام رسالتك بنجاح! سأتواصل معك في أقرب وقت.",
    footerCopy: "© 2026 بافلي ميلاد نعيم. صُمم وهُندس بكل دقة واحترافية.",
    toastCopied: "تم النسخ إلى الحافظة بنجاح!"
  }
};

/* --- Global State & Initialization --- */
let currentLang = localStorage.getItem('bavly_lang') || 'en';
let currentTheme = localStorage.getItem('bavly_theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme & language
  applyTheme(currentTheme);
  setLanguage(currentLang);

  // Setup Event Listeners
  initNavigation();
  initThemeToggle();
  initLanguageToggle();
  initCopyActions();
  initContactForm();
  initBackToTop();
});

/* --- Language Switching Engine --- */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bavly_lang', lang);

  const htmlEl = document.documentElement;
  const isAr = lang === 'ar';

  htmlEl.setAttribute('lang', lang);
  htmlEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Update button active text
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.textContent = isAr ? 'EN' : 'العربية';
    langToggleBtn.setAttribute('title', isAr ? 'Switch to English' : 'التحويل إلى العربية');
  }

  // Update all [data-i18n] keys
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(input => {
    const key = input.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      input.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Trigger any dynamic demo text updates
  if (window.refreshReactionTexts) {
    window.refreshReactionTexts();
  }
}

function initLanguageToggle() {
  const btn = document.getElementById('langToggleBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(nextLang);
  });
}

/* --- Dark / Light Theme Engine --- */
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('bavly_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

/* --- Navigation & Mobile Menu --- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-link');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-active');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* --- 1-Click Copy with Toast --- */
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function initCopyActions() {
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const msg = translations[currentLang]?.toastCopied || 'Copied to clipboard!';
        showToast(msg);
      });
    });
  });
}

/* --- Back to Top Button --- */
function initBackToTop() {
  const topBtn = document.getElementById('backToTopBtn');
  if (!topBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Contact Form Handler --- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = translations[currentLang]?.formSending || 'Transmitting...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      form.reset();

      const successMsg = translations[currentLang]?.formSuccessMsg || 'Thank you! Your message has been sent.';
      showToast(successMsg);

      if (statusDiv) {
        statusDiv.style.display = 'block';
        statusDiv.style.color = 'var(--neon-pink)';
        statusDiv.textContent = successMsg;
        setTimeout(() => {
          statusDiv.style.display = 'none';
        }, 5000);
      }
    }, 1200);
  });
}
