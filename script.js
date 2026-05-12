/* ============================================================
   ESMATULLAH AKBARI — PORTFOLIO SCRIPT
   Fully integrated across all 5 pages
   ============================================================ */

'use strict';

/* ── Utility ────────────────────────────────────────────────── */
const debounce = (fn, delay) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
};

/* ── Translations ───────────────────────────────────────────── */
const translations = {
  en: {
    /* Page titles */
    title:                "Esmatullah Akbari",
    "title-resume":       "Resume — Esmatullah Akbari",
    "title-skills":       "Skills — Esmatullah Akbari",
    "title-certificates": "Certificates — Esmatullah Akbari",
    "title-contact":      "Contact — Esmatullah Akbari",

    /* Nav & name */
    name:               "Esmatullah Akbari",
    "nav-home":         "Home",
    "nav-resume":       "Resume",
    "nav-skills":       "Skills",
    "nav-certificates": "Certificates",
    "nav-contact":      "Contact",

    /* Hero */
    "hero-eyebrow": "Educator · Researcher · Writer",
    "hero-text":    "University Lecturer, EFL Teacher, Development Professional & Researcher based in Herat, Afghanistan — bridging education, technology, and community development.",
    "view-resume":  "View Resume",
    "tag-1": "MA in TEFL",
    "tag-2": "EFL Teacher",
    "tag-3": "MEAL Expert",
    "tag-4": "Web Developer",

    /* Stats */
    "stat-years": "Years Experience",
    "stat-certs": "Certificates",
    "stat-langs": "Languages",

    /* About labels */
    "about-label": "About",
    about:         "About Esmatullah",
    "about-1":     "Esmatullah Akbari is a dedicated university lecturer, EFL teacher, and development professional based in Herat, Afghanistan. With a Bachelor of Arts in English Language & Literature from Herat University (graduating with a 92% distinction) and currently advancing toward a Master's in Teaching English as a Foreign Language (TEFL), he has built a distinguished career at the intersection of education, research, and humanitarian work.",
    "about-2":     "As Head of the English Department at Woman Online University (WOU), Esmatullah has led academic strategy, oversaw faculty development, and championed access to quality education. Alongside this, he has served as a Field Monitor for IWA-USAID, a Communication Officer, and a Research Officer — applying rigorous MEAL frameworks and data collection methods to real-world development challenges.",
    "about-3":     "A skilled writer and curriculum designer, Esmatullah brings multilingual fluency (English, Persian, and Pashto) and technical expertise in web development to every endeavor. His life's work is making a lasting positive impact through education, research, and community empowerment.",

    /* Highlights */
    "hl-1-title": "Academic Leader",
    "hl-1-desc":  "Head of English Department · BA with 92% Distinction · Pursuing MA in TEFL",
    "hl-2-title": "Development Professional",
    "hl-2-desc":  "MEAL · Edu · CM · TT · CALL",
    "hl-3-title": "Researcher & Writer",
    "hl-3-desc":  "Published essay on Afghan student resilience · Research Methodology trained",

    /* Projects */
    "proj-label":       "Work",
    achievements:       "Projects",
    "proj-live":        "Live",
    "proj-soon":        "Soon",
    "project-1-title":  "HopeBridge Academy",
    "project-1-desc":   "A web platform dedicated to educational resources, community engagement, and bridging learning gaps in underserved communities.",
    "project-link":     "View Project",
    "project-2-title":  "Coming Soon",
    "project-2-desc":   "New projects in development. Stay tuned for more impactful work in education and technology.",
    "project-link-soon":"Learn More",

    /* Hobbies */
    "hobbies-label": "Personal",
    hobbies:         "Hobbies & Interests",
    "hobby-1":       "Body Building",
    "hobby-2":       "Driving",
    "hobby-3":       "Reading Books",

    /* Resume page */
    "resume-label":    "CV",
    resume:            "Resume",
    "download-resume": "Download Resume",
    education:         "Education",
    "edu-1-title":     "Bachelor of Arts, English Language & Literature",
    "edu-1-place":     "Faculty of Education, Herat University",
    "edu-2-title":     "High School Graduate",
    "edu-2-place":     "Sultan Ghiasuddin Ghori High School",
    "edu-3-title":     "Master of Arts, TEFL",
    "edu-3-place":     "Faculty of Literature & Humanities, Persian Gulf University",
    experience:        "Work Experience",
    "exp-1-date":  "June 2024 – May 2026",
    "exp-1-title": "Head of English Department & Lecturer — WOU",
    "exp-1-1": "Led departmental strategy, planning, and operations.",
    "exp-1-2": "Oversaw academic programs and ensured quality delivery.",
    "exp-1-3": "Managed faculty recruitment, development, and performance.",
    "exp-1-4": "Addressed student needs and promoted academic support.",
    "exp-1-5": "Ensured compliance with standards, budgets, and reporting.",
    "exp-2-date":  "Aug 2024 – Feb 2025",
    "exp-2-title": "Project Field Monitor — IWA / USAID",
    "exp-2-1": "Coordinated with authorities and partners for site access and approvals.",
    "exp-2-2": "Conducted field visits to project sites for monitoring and data collection.",
    "exp-2-3": "Used digital tools to collect, translate, and enter qualitative and quantitative data.",
    "exp-2-4": "Ensured data accuracy, completeness, and confidentiality following protocols.",
    "exp-2-5": "Reported issues and followed guidance from project and data quality leads.",
    "exp-3-date":  "Jan 2024 – Jul 2024",
    "exp-3-title": "Lecturer – Faculty of Education - Herat University",
    "exp-3-1": "Delivered structured English language lectures to undergraduate students.",
    "exp-3-2": "Designed lesson plans, assessments and academic materials.",
    "exp-3-3": "Supported students through feedback, mentoring and academic guidance.",
    "exp-3-4": "Participated in curriculum development and departmental activities.",
    "exp-3-5": "Evaluated student performance and maintained academic records.",
    "exp-4-date":  "Jan 2023 – Dec 2023",
    "exp-4-title": "Communication Officer — DSON",
    "exp-4-1": "Developed and executed communication strategies aligned with organizational goals.",
    "exp-4-2": "Created and managed content across social media, reports, newsletters, and the website.",
    "exp-4-3": "Built media relationships and coordinated press coverage.",
    "exp-4-4": "Engaged stakeholders through effective messaging and event communications.",
    "exp-4-5": "Monitored communication performance and ensured consistent branding.",
    "exp-5-date":  "Jan 2022 – Dec 2022",
    "exp-5-title": "Community Mobilizer — ASEWO",
    "exp-5-1": "Mobilized communities to raise awareness and encourage project participation.",
    "exp-5-2": "Supervised Community Facilitators at the village level.",
    "exp-5-3": "Collected and reported data using ODK/KOBO digital tools.",
    "exp-5-4": "Supported formation of community structures with focus on women's leadership.",
    "exp-5-5": "Coordinated with local stakeholders and governance structures.",
    "exp-6-date":  "June 2021 – Dec 2021",
    "exp-6-title": "Research Officer — ASLO",
    "exp-6-1": "Participated in training to understand project objectives and data collection tools.",
    "exp-6-2": "Coordinated with local authorities for FGDs in the Salma Dam area.",
    "exp-6-3": "Collected qualitative data through FGDs, including audio and video documentation.",
    "exp-6-4": "Transcribed and translated FGD data into English.",
    "exp-6-5": "Completed and submitted reports in line with ASLO project requirements.",

    /* Skills page */
    "skills-label":       "Expertise",
    skills:               "Skills",
    "skill-lang-title":   "Language Skills",
    "skill-lang-1-name":  "English",
    "skill-lang-1-level": "Native / Fluent",
    "skill-lang-2-name":  "Persian (Dari)",
    "skill-lang-2-level": "Native / Fluent",
    "skill-lang-3-name":  "Pashto",
    "skill-lang-3-level": "Intermediate",
    "skill-web-title":    "Web Development",
    "level-expert":       "Expert",
    "level-advanced":     "Advanced",
    "level-intermediate": "Intermediate",
    "skill-comp-title":   "Computer Skills",
    "skill-comp-1-name":  "Microsoft Office",
    "skill-org-title":    "Organizational Skills",
    "skill-org-1": "Leadership & Change Management",
    "skill-org-2": "Communication & M&E",
    "skill-org-3": "Reporting",
    "skill-org-4": "Team Working & Motivating",
    "skill-org-5": "Quick Learning & Initiative",
    "skill-org-6": "Problem Solving & Coordination",
    "skill-org-7": "Flexibility & Adaptability",
    "skill-org-8": "Child Protection",
    "skill-org-9": "Facilitation",
    "skill-org-10": "Teaching & Training",
    "skill-org-11": "Data Collection, Analysis & Cleaning",
    "skill-org-12": "Research & Documentation",
    "skill-acad-title": "Academic & Teaching Skills",
    "skill-acad-1": "Curriculum Development",
    "skill-acad-2": "Multi-level Lesson Planning",
    "skill-acad-3": "Interactive Learning Design",
    "skill-acad-4": "Classroom Management",
    "skill-acad-5": "Bilingual Education Strategies",
    "skill-acad-6": "Adaptive Teaching Styles",
    "skill-online-title": "Online Platform Skills",
    "skill-online-1": "Educational Platforms (LMS, Google Classroom)",
    "skill-online-2": "Online Teaching & Virtual Presentation",
    "skill-online-3": "Professional Platforms (LinkedIn, Formspree)",

    /* Certificates page */
    "cert-label": "Credentials",
    certificates: "Certificates & Achievements",
    "cert-sub":   "A record of professional training, academic recognition, and lifelong commitment to learning.",
    "cert-1":  "Project Team Management & Communication Training",
    "cert-2":  "Empowering Youth Leaders (ECOSOC)",
    "cert-3":  "Advanced Network Security",
    "cert-4":  "English for Communication Skills",
    "cert-5":  "Human Rights Monitoring",
    "cert-6":  "WASH Training (WSP)",
    "cert-7":  "ICT Training (Ms. PWE)",
    "cert-8":  "Research Methodology Training",
    "cert-9":  "English Language Skills",
    "cert-10": "Senior First Grade Talented Student",
    "cert-11": "Computer: ICDL Package",
    "cert-12": "Talented Senior Graduate",
    "cert-13": "Data Collection Methodology",
    "cert-14": "Professional Teaching and Training",
    "cert-15": "Management Skills",
    "cert-16": "Resilience in Education: Coping Strategies of Afghan Students in Times of Crisis",
    "cert-17": "Certified Senior EFL Teacher",
    "cert-18": "Certified Technical Secretary",

    /* Contact page */
    "contact-label":         "Reach Out",
    "contact-title":         "Get in Touch",
    "contact-intro":         "Whether for collaboration, academic partnership, or professional opportunities — Esmatullah is open to connecting.",
    "contact-role":          "University Lecturer · EFL Teacher · Researcher",
    "contact-email-label":   "Email",
    "contact-phone-label":   "Phone",
    "contact-address-label": "Location",
    "contact-address-value": "Herat, Afghanistan",
    "contact-whatsapp-label":"WhatsApp",
    "whatsapp-af":           "Afghanistan (+93)",
    "whatsapp-ir":           "Iran (+98)",
    "contact-form-title":    "Send a Message",
    "contact-form-name":     "Name",
    "contact-form-email":    "Email",
    "contact-form-message":  "Message",
    "contact-form-button":   "Send Message",
    "form-err-empty":        "Please fill out all fields.",
    "form-err-email":        "Please enter a valid email address.",
    "form-success":          "Message sent successfully! Thank you.",
    "form-error":            "Failed to send message. Please try again.",

    /* Footer */
    "footer-tagline": "Educator · Researcher · Writer",
    footer:           "© 2025-2026 Esmatullah Akbari. All rights reserved.",
  },

  fa: {
    title:                "عصمت‌الله اکبری",
    "title-resume":       "رزومه — عصمت‌الله اکبری",
    "title-skills":       "مهارت‌ها — عصمت‌الله اکبری",
    "title-certificates": "گواهینامه‌ها — عصمت‌الله اکبری",
    "title-contact":      "تماس — عصمت‌الله اکبری",
    name:               "عصمت‌الله اکبری",
    "nav-home":         "صفحه اصلی",
    "nav-resume":       "رزومه",
    "nav-skills":       "مهارت‌ها",
    "nav-certificates": "گواهینامه‌ها",
    "nav-contact":      "تماس",
    "hero-eyebrow": "مدرس · پژوهشگر · نویسنده",
    "hero-text":    "استاد دانشگاه، معلم EFL، متخصص توسعه و پژوهشگر مستقر در هرات، افغانستان — پیوند دهنده آموزش، فناوری و توسعه اجتماعی.",
    "view-resume":  "مشاهده رزومه",
    "tag-1": "MA در TEFL",
    "tag-2": "معلم EFL",
    "tag-3": "متخصص MEAL",
    "tag-4": "توسعه‌دهنده وب",
    "stat-years": "سال تجربه",
    "stat-certs": "گواهینامه",
    "stat-langs": "زبان",
    "about-label": "درباره",
    about:         "درباره عصمت‌الله",
    "about-1": "عصمت‌الله اکبری استاد دانشگاه، معلم EFL و متخصص توسعه مستقر در هرات، افغانستان است. او با اخذ لیسانس زبان و ادبیات انگلیسی از دانشگاه هرات با نمره ممتاز ۹۲٪ و در حال پیشرفت به سوی کارشناسی ارشد آموزش زبان انگلیسی به عنوان زبان خارجی (TEFL)، مسیر حرفه‌ای ممتازی را در تقاطع آموزش، پژوهش و کار بشردوستانه طی کرده است.",
    "about-2": "به عنوان آمر دیپارتمنت انگلیسی در دانشگاه آنلاین زن (WOU)، عصمت‌الله استراتژی آکادمیک را هدایت کرده، توسعه اعضای هیئت علمی را نظارت نموده و دسترسی به آموزش با کیفیت را حمایت کرده است. همچنین به عنوان ناظر میدانی برای IWA-USAID، مسئول ارتباطات و افسر تحقیق فعالیت کرده است.",
    "about-3": "عصمت‌الله به عنوان نویسنده و طراح برنامه درسی ماهر، تسلط چندزبانه (انگلیسی، فارسی و پشتو) و تخصص فنی در توسعه وب را در هر تلاشی به کار می‌گیرد.",
    "hl-1-title": "رهبر آکادمیک",
    "hl-1-desc":  "آمر دیپارتمنت انگلیسی · لیسانس با نمره ممتاز ۹۲٪ · در حال تحصیل MA در TEFL",
    "hl-2-title": "متخصص توسعه",
    "hl-2-desc":  "MEAL · Edu · CM · TT · CALL",
    "hl-3-title": "پژوهشگر و نویسنده",
    "hl-3-desc":  "مقاله منتشره درباره تاب‌آوری دانش‌آموزان افغان · آموزش روش‌شناسی تحقیق",
    "proj-label": "کارها",
    achievements: "پروژه‌ها",
    "proj-live":  "زنده",
    "proj-soon":  "به زودی",
    "project-1-title": "آکادمی هوپ‌بریج",
    "project-1-desc":  "پلتفرم وب اختصاص‌یافته به منابع آموزشی، تعامل اجتماعی و پر کردن شکاف‌های یادگیری در جوامع محروم.",
    "project-link":    "مشاهده پروژه",
    "project-2-title": "به زودی",
    "project-2-desc":  "پروژه‌های جدیدی در دست توسعه است. منتظر کارهای تأثیرگذار بیشتر در آموزش و فناوری باشید.",
    "project-link-soon": "بیشتر بدانید",
    "hobbies-label": "شخصی",
    hobbies:         "سرگرمی‌ها و علایق",
    "hobby-1": "بدنسازی",
    "hobby-2": "رانندگی",
    "hobby-3": "مطالعه کتاب",
    "resume-label":    "سوابق",
    resume:            "رزومه",
    "download-resume": "دانلود رزومه",
    education:         "تحصیلات",
    "edu-1-title":     "لیسانس، زبان و ادبیات انگلیسی",
    "edu-1-place":     "دانشکده تعلیم و تربیت، دانشگاه هرات",
    "edu-2-title":     "فارغ‌التحصیل دبیرستان",
    "edu-2-place":     "دبیرستان سلطان غیاث‌الدین غوری",
        "edu-3-title":     "ماستر، آموزش زبان انگلیسی (TEFL)",
    "edu-3-place":     "دانشکده ادبیات و علوم انسانی، دانشگاه خلیج فارس",
    experience:        "تجربه کاری",
    "exp-1-date":  "خرداد ۱۴۰۳ – اردیبهشت ۱۴۰۵",
    "exp-1-title": "آمر دیپارتمنت انگلیسی و مدرس — WOU",
    "exp-1-1": "رهبری استراتژی، برنامه‌ریزی و عملیات دیپارتمنت.",
    "exp-1-2": "نظارت بر برنامه‌های آکادمیک و اطمینان از ارائه با کیفیت.",
    "exp-1-3": "مدیریت استخدام، توسعه و عملکرد اعضای هیئت علمی.",
    "exp-1-4": "پاسخگویی به نیازهای دانشجویان و ترویج حمایت آکادمیک.",
    "exp-1-5": "اطمینان از رعایت استانداردها، بودجه‌ها و گزارش‌دهی.",
    "exp-2-date":  "مرداد ۱۴۰۳ – بهمن ۱۴۰۳",
    "exp-2-title": "ناظر میدانی پروژه — IWA / USAID",
    "exp-2-1": "هماهنگی با مقامات و شرکا برای دسترسی به سایت‌ها.",
    "exp-2-2": "بازدیدهای میدانی از سایت‌های پروژه برای نظارت و جمع‌آوری داده.",
    "exp-2-3": "استفاده از ابزارهای دیجیتال برای جمع‌آوری و ورود داده‌های کیفی و کمی.",
    "exp-2-4": "اطمینان از دقت و محرمانگی داده‌ها طبق پروتکل‌ها.",
    "exp-2-5": "گزارش مسائل و پیروی از راهنمایی‌های مسئولین.",
    "exp-3-date":  "دی ۱۴۰۲ – تیر ۱۴۰۳",
    "exp-3-title": "استاد – دانشکده تعلیم تربیه، دانشگاه هرات",
    "exp-3-1": "ارائه درس‌های منظم زبان انگلیسی به دانشجویان دوره لیسانس.",
    "exp-3-2": "طراحی پلان‌های درسی، ارزیابی‌ها و مواد آموزشی.",
    "exp-3-3": "حمایت از دانشجویان از طریق بازخورد، راهنمایی و مشاوره علمی.",
    "exp-3-4": "اشتراک در توسعه نصاب درسی و فعالیت‌های بخش.",
    "exp-3-5": "ارزیابی عملکرد دانشجویان و نگهداری سوابق تحصیلی.",
    "exp-4-date":  "دی ۱۴۰۱ – آذر ۱۴۰۲",
    "exp-4-title": "مسئول ارتباطات — DSON",
    "exp-4-1": "توسعه و اجرای استراتژی‌های ارتباطی.",
    "exp-4-2": "ایجاد و مدیریت محتوا در رسانه‌های اجتماعی و وب‌سایت.",
    "exp-4-3": "ایجاد روابط رسانه‌ای و هماهنگی پوشش خبری.",
    "exp-4-4": "تعامل با ذینفعان از طریق پیام‌رسانی مؤثر.",
    "exp-4-5": "نظارت بر عملکرد ارتباطات و برندسازی.",
    "exp-5-date":  "دی ۱۴۰۰ – آذر ۱۴۰۱",
    "exp-5-title": "موبایلایزر جامعه — ASEWO",
    "exp-5-1": "موبایلایز کردن جوامع برای افزایش آگاهی.",
    "exp-5-2": "نظارت بر تسهیل‌کنندگان جامعه در سطح روستا.",
    "exp-5-3": "جمع‌آوری داده با ابزارهای ODK/KOBO.",
    "exp-5-4": "حمایت از تشکیل ساختارهای جامعه با تمرکز بر زنان.",
    "exp-5-5": "هماهنگی با ذینفعان محلی و ساختارهای حکومتی.",
    "exp-6-date":  "خرداد ۱۴۰۰ – آذر ۱۴۰۰",
    "exp-6-title": "افسر تحقیق — ASLO",
    "exp-6-1": "شرکت در آموزش برای درک اهداف پروژه.",
    "exp-6-2": "هماهنگی برای برگزاری گروه‌های کانونی در منطقه سد سلما.",
    "exp-6-3": "جمع‌آوری داده‌های کیفی از طریق گروه‌های کانونی.",
    "exp-6-4": "رونویسی و ترجمه داده‌ها به انگلیسی.",
    "exp-6-5": "تکمیل و ارسال گزارش‌ها مطابق الزامات پروژه.",
    "skills-label":       "تخصص‌ها",
    skills:               "مهارت‌ها",
    "skill-lang-title":   "مهارت‌های زبانی",
    "skill-lang-1-name":  "انگلیسی",
    "skill-lang-1-level": "مادری / روان",
    "skill-lang-2-name":  "فارسی (دری)",
    "skill-lang-2-level": "مادری / روان",
    "skill-lang-3-name":  "پشتو",
    "skill-lang-3-level": "متوسط",
    "skill-web-title":    "توسعه وب",
    "level-expert":       "خبره",
    "level-advanced":     "پیشرفته",
    "level-intermediate": "متوسط",
    "skill-comp-title":   "مهارت‌های کامپیوتری",
    "skill-comp-1-name":  "مایکروسافت آفیس",
    "skill-org-title":    "مهارت‌های سازمانی",
    "skill-org-1": "رهبری و مدیریت تغییر",
    "skill-org-2": "ارتباطات و نظارت و ارزیابی",
    "skill-org-3": "گزارش‌دهی",
    "skill-org-4": "کار تیمی و انگیزه‌بخشی",
    "skill-org-5": "یادگیری سریع و ابتکار عمل",
    "skill-org-6": "حل مسئله و هماهنگی",
    "skill-org-7": "انعطاف‌پذیری و سازگاری",
    "skill-org-8": "حفاظت از کودکان",
    "skill-org-9": "تسهیلگری",
    "skill-org-10": "آموزش و تدریس",
    "skill-org-11": "جمع‌آوری، تجزیه‌وتحلیل و پاک‌سازی داده",
    "skill-org-12": "تحقیق و مستندسازی",
    "skill-acad-title": "مهارت‌های آکادمیک و تدریس",
    "skill-acad-1": "توسعه برنامه درسی",
    "skill-acad-2": "برنامه‌ریزی درس چندسطحی",
    "skill-acad-3": "طراحی یادگیری تعاملی",
    "skill-acad-4": "مدیریت کلاس درس",
    "skill-acad-5": "استراتژی‌های آموزش دو زبانه",
    "skill-acad-6": "سبک‌های تدریس تطبیقی",
    "skill-online-title": "مهارت‌های پلتفرم آنلاین",
    "skill-online-1": "پلتفرم‌های آموزشی (LMS، گوگل کلاسروم)",
    "skill-online-2": "تدریس آنلاین و ارائه مجازی",
    "skill-online-3": "پلتفرم‌های حرفه‌ای",
    "cert-label": "مدارک",
    certificates: "گواهینامه‌ها و دستاوردها",
    "cert-sub":   "سابقه‌ای از آموزش حرفه‌ای، تقدیر آکادمیک و تعهد مادام‌العمر به یادگیری.",
    "cert-1":  "آموزش مدیریت تیم پروژه و ارتباطات",
    "cert-2":  "توانمندسازی رهبران جوان (ECOSOC)",
    "cert-3":  "امنیت شبکه پیشرفته",
    "cert-4":  "مهارت‌های ارتباطی انگلیسی",
    "cert-5":  "نظارت بر حقوق بشر",
    "cert-6":  "آموزش WASH (WSP)",
    "cert-7":  "آموزش فناوری اطلاعات و ارتباطات",
    "cert-8":  "آموزش روش‌شناسی تحقیق",
    "cert-9":  "مهارت‌های زبان انگلیسی",
    "cert-10": "دانشجوی ممتاز سال آخر",
    "cert-11": "کامپیوتر: بسته ICDL",
    "cert-12": "فارغ‌التحصیل ممتاز",
    "cert-13": "روش‌شناسی جمع‌آوری داده",
    "cert-14": "تدریس و آموزش حرفه‌ای",
    "cert-15": "مهارت‌های مدیریتی",
    "cert-16": "تاب‌آوری در آموزش: استراتژی‌های مقابله‌ای دانش‌آموزان افغان در بحران",
    "cert-17": "مدرس ارشد EFL معتبر",
    "cert-18": "دبیر فنی معتبر در تصدی نشرات آنلاین",
    "contact-label":         "ارتباط",
    "contact-title":         "تماس بگیرید",
    "contact-intro":         "برای همکاری، مشارکت آکادمیک یا فرصت‌های حرفه‌ای، عصمت‌الله آماده ارتباط است.",
    "contact-role":          "استاد دانشگاه · معلم EFL · پژوهشگر",
    "contact-email-label":   "ایمیل",
    "contact-phone-label":   "تلفن",
    "contact-address-label": "مکان",
    "contact-address-value": "هرات، افغانستان",
    "contact-whatsapp-label": "واتساپ",
    "whatsapp-af":           "افغانستان (+۹۳)",
    "whatsapp-ir":           "ایران (+۹۸)",
    "contact-form-title":    "ارسال پیام",
    "contact-form-name":     "نام",
    "contact-form-email":    "ایمیل",
    "contact-form-message":  "پیام",
    "contact-form-button":   "ارسال پیام",
    "form-err-empty":        "لطفاً تمام فیلدها را پر کنید.",
    "form-err-email":        "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
    "form-success":          "پیام با موفقیت ارسال شد! متشکرم.",
    "form-error":            "ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید.",
    "footer-tagline": "مدرس · پژوهشگر · نویسنده",
    footer:           "© ۱۴۰۵-۱۴۰۴ عصمت‌الله اکبری. تمامی حقوق محفوظ است.",
  }
};

/* ── Language ───────────────────────────────────────────────── */
function getCurrentLang() {
  return localStorage.getItem('lang') || 'en';
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update html attributes
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'fa' ? 'rtl' : 'ltr';

  // Update page title
  const titleEl = document.querySelector('title');
  if (titleEl && titleEl.getAttribute('data-lang-key')) {
    const key = titleEl.getAttribute('data-lang-key');
    if (t[key]) titleEl.textContent = t[key];
  }

  // Update all keyed elements
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (!key || !t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // Sync select
  const sel = document.getElementById('language-select');
  if (sel) sel.value = lang;
}

function initLanguage() {
  const lang = getCurrentLang();
  applyLanguage(lang);

  const sel = document.getElementById('language-select');
  if (!sel) return;
  sel.addEventListener('change', e => {
    const chosen = e.target.value;
    localStorage.setItem('lang', chosen);
    applyLanguage(chosen);
    showNotification(chosen === 'fa' ? 'زبان به فارسی تغییر کرد' : 'Language changed to English', 'success');
  });
}

/* ── Dark Mode ──────────────────────────────────────────────── */
function initDarkMode() {
  const btn = document.querySelector('.dark-mode-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') {
    document.documentElement.classList.add('dark-mode');
    btn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    btn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    showNotification(isDark ? 'Dark mode on' : 'Light mode on', 'success');
  });
}

/* ── Hamburger ──────────────────────────────────────────────── */
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Scroll Reveal ──────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
}

/* ── Skill Bar Animation ─────────────────────────────────────── */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const width  = target.getAttribute('data-width') || '0';
        target.style.width = width + '%';
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  fills.forEach(fill => observer.observe(fill));
}

/* ── Back to Top ────────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const onScroll = debounce(() => {
    btn.classList.toggle('visible', window.scrollY > 320);
  }, 80);

  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Notification ───────────────────────────────────────────── */
function showNotification(msg, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.className  = `notification ${type}`;
  el.textContent = msg;
  el.setAttribute('role', 'alert');
  document.body.appendChild(el);

  setTimeout(() => {
    el.classList.add('fade-out');
    setTimeout(() => el.remove(), 400);
  }, 3200);
}

/* ── Contact Form ───────────────────────────────────────────── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const lang = getCurrentLang();
    const t    = translations[lang];

    const nameVal    = form.querySelector('#name')?.value.trim()    || '';
    const emailVal   = form.querySelector('#email')?.value.trim()   || '';
    const messageVal = form.querySelector('#message')?.value.trim() || '';

    if (!nameVal || !emailVal || !messageVal) {
      showNotification(t['form-err-empty'], 'error'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      showNotification(t['form-err-email'], 'error'); return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const origText  = submitBtn.innerHTML;
    submitBtn.disabled   = true;
    submitBtn.innerHTML  = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (res.ok) {
        showNotification(t['form-success'], 'success');
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      showNotification(t['form-error'], 'error');
    } finally {
      submitBtn.disabled  = false;
      submitBtn.innerHTML = origText;
    }
  });
}

/* ── Header scroll shadow ────────────────────────────────────── */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', debounce(() => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,0,0,0.10)'
      : 'none';
  }, 60), { passive: true });
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initDarkMode();
  initHamburger();
  initScrollReveal();
  initSkillBars();
  initBackToTop();
  initContactForm();
  initHeaderScroll();
});
