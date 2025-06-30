// Utility: Debounce function for performance
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Language Translations
const translations = {
    en: {
        title: "Esmatullah Akbari - Portfolio",
        "title-skills": "Esmatullah Akbari - Skills",
        "title-certificates": "Esmatullah Akbari - Certificates",
        "title-contact": "Esmatullah Akbari - Contact",
        name: "Esmatullah Akbari",
        "nav-home": "Home",
        "nav-skills": "Skills",
        "nav-certificates": "Certificates",
        "nav-contact": "Contact",
        welcome: "Welcome to My Portfolio",
        "about-1": "I'm Esmatullah Akbari, a multifaceted professional based in Herat, Afghanistan, with expertise in education, administration, communication, MEAL (Monitoring, Evaluation, Accountability, and Learning), and web development. With a strong foundation in English language instruction and academic leadership, I’ve also contributed to organizational growth through administrative coordination and results-based monitoring systems. My experience in communication and MEAL has helped me ensure transparency, impact assessment, and community engagement in development projects.",
        "about-2": "Alongside my work in education and humanitarian sectors, I’m passionate about technology. I’ve developed several websites using HTML, CSS, and JavaScript, and I enjoy using my technical skills to design innovative tools and solutions for educational and community development.",
        "about-3": "I'm always eager to learn, grow, and contribute to meaningful, multidisciplinary projects that make a difference.",
        education: "Education",
        "edu-1": "Bachelor of Arts, English Language & Literature - Herat University (2019-2023)<br>Grade: 92% (A)",
        "edu-2": "High School Graduated - Sultan Ghiasuddin Ghori High School (2007-2018)",
        experience: "Work Experience",
        "exp-1-title": "Head of the English Department & Teacher - Woman Online University (WOU)",
        "exp-1-date": "June 2024 - July 2025",
        "exp-1-1": "Led departmental strategy, planning, and operations.",
        "exp-1-2": "Oversaw academic programs and ensured quality delivery.",
        "exp-1-3": "Managed faculty recruitment, development, and performance.",
        "exp-1-4": "Addressed student needs and promoted academic support.",
        "exp-1-5": "Ensured compliance with standards, budgets, and reporting.",
        "exp-2-title": "Project Field Monitor - IWA - USAID",
        "exp-2-date": "Aug 2024 - Feb 2025",
        "exp-2-1": "Coordinated with authorities and partners for site access and approvals.",
        "exp-2-2": "Conducted field visits to project sites for monitoring and data collection.",
        "exp-2-3": "Used digital tools to collect, translate, and enter qualitative and quantitative data.",
        "exp-2-4": "Ensured data accuracy, completeness, and confidentiality following protocols.",
        "exp-2-5": "Reported issues and followed guidance from project and data quality leads.",
        "exp-3-title": "Admin Assistant - DSON",
        "exp-3-date": "Jan 2024 - Jul 2024",
        "exp-3-1": "Oversaw daily office operations, including procurement of supplies and maintenance of office equipment.",
        "exp-3-2": "Organized meetings, workshops, and training sessions by managing all logistical arrangements and preparing required documentation.",
        "exp-3-3": "Ensured proper filing and archiving of administrative documents in both hard and soft formats.",
        "exp-3-4": "Liaised with government agencies and partner organizations on administrative matters.",
        "exp-3-5": "Supported the Provincial Manager in implementing organizational policies and procedures.",
        "exp-4-title": "Communication Officer - DSON",
        "exp-4-date": "Jan 2023 - Dec 2023",
        "exp-4-1": "Developed and executed communication strategies aligned with organizational goals.",
        "exp-4-2": "Created and managed content across social media, reports, newsletters, and the website.",
        "exp-4-3": "Built media relationships and coordinated press coverage to promote initiatives.",
        "exp-4-4": "Engaged stakeholders through effective messaging and event communications.",
        "exp-4-5": "Monitored communication performance and ensured consistent branding.",
        "exp-5-title": "Community Mobilizer - ASEWO",
        "exp-5-date": "Jan 2022 - Dec 2022",
        "exp-5-1": "Mobilized communities to raise awareness and encourage participation in project activities.",
        "exp-5-2": "Supervised Community Facilitators to ensure effective implementation at the village level.",
        "exp-5-3": "Collected and reported data using digital tools like ODK/KOBO for informed decision-making.",
        "exp-5-4": "Supported formation of community structures, with a focus on women's participation and leadership.",
        "exp-5-5": "Coordinated with local stakeholders and ensured compliance with village-level governance structures.",
        "exp-6-title": "Research Officer - ASLO",
        "exp-6-date": "June 2021 - Dec 2021",
        "exp-6-1": "Participated in training to understand project objectives and data collection tools.",
        "exp-6-2": "Coordinated with local authorities and communities for conducting FGDs in Salma Dam area.",
        "exp-6-3": "Collected qualitative data through FGDs, including photos, audio, and video documentation.",
        "exp-6-4": "Transcribed and translated FGD data into English and prepared participant documentation.",
        "exp-6-5": "Completed and submitted reports and forms in line with ASLO project requirements.",
        achievements: "Projects",
        "project-link": "🏤 Sample Project",
        hobbies: "Hobbies & Interests",
        "hobby-1": "Body Building",
        "hobby-2": "Driving",
        "hobby-3": "Reading Books",
        skills: "Skills",
        "skill-lang-title": "Language Skills",
        "skill-lang-1": "English <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-lang-2": "Persian <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-lang-3": "Pashto <span class='rating'>⭐⭐⭐</span>",
        "skill-web-title": "Web Development",
        "skill-web-1": "HTML <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-web-2": "CSS <span class='rating'>⭐⭐⭐⭐</span>",
        "skill-web-3": "JavaScript <span class='rating'>⭐⭐⭐</span>",
        "skill-comp-title": "Computer Skills",
        "skill-comp-1": "Microsoft Office <span class='rating'>⭐⭐⭐⭐</span>",
        "skill-comp-2": "SPSS <span class='rating'>⭐⭐⭐⭐</span>",
        "skill-comp-3": "KOBO & ODK <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-comp-4": "ArcGIS <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-org-title": "Organizational Skills",
        "skill-org-1": "Leadership and change management",
        "skill-org-2": "Communication and M&E",
        "skill-org-3": "Reporting",
        "skill-org-4": "Team working and motivating",
        "skill-org-5": "Quick learning and Initiating",
        "skill-org-6": "Problem solving and coordination",
        "skill-org-7": "Flexibility",
        "skill-org-8": "Child protection",
        "skill-org-9": "Facilitation",
        "skill-org-10": "Teaching and Training",
        "skill-org-11": "Data Collection, Data analyzing & Data Cleaning",
        "skill-org-12": "Researching",
        "skill-acad-title": "Academic & Teaching Skills",
        "skill-acad-1": "Curriculum development",
        "skill-acad-2": "Lesson planning and delivery for multiple age groups",
        "skill-acad-3": "Designing interactive and engaging learning activities",
        "skill-acad-4": "Classroom management using non-physical discipline methods",
        "skill-acad-5": "Familiarity with bilingual education strategies",
        "skill-acad-6": "Adjusting teaching styles based on student age and learning level",
        "skill-online-title": "Online Platforms Skills",
        "skill-online-1": "Educational Platforms",
        "skill-online-2": "Online Teaching & Presentation",
        "skill-online-3": "Professional & Job-Related Platforms",
        certificates: "Certificates & Achievements",
        "cert-1": "Project Team Management & Communication Training at ASEWO-Herat",
        "cert-2": "Empowering Youth Leaders (ECOSOC) at UN Women-United Nations Office",
        "cert-3": "Advanced Network Security at AWDP-Herat",
        "cert-4": "English for Communication Skills at World English Institute-USA",
        "cert-5": "Human Rights Monitoring at USIP-Herat",
        "cert-6": "WASH Training (WSP) at DACAAR-Herat",
        "cert-7": "ICT Training (Ms. PWE) at USAID-AWDP",
        "cert-8": "Research Methodology Training at IWA-Herat",
        "cert-9": "English Language Skills at SDROA-USA",
        "cert-10": "Senior First Grade Talented Students at Herat University",
        "cert-11": "Computer: ICDL Package at ELCLC Training Center-Herat",
        "cert-12": "Talented Senior Graduates of Herat University",
        "cert-13": "Data Collection Methodology at DACAAR-Herat",
        "cert-14": "Professional Teaching and Training at OSAA-Herat",
        "cert-15": "Management Skills at Herat University-Herat",
        "cert-16": "ESSAY Titled: Resilience in Education: Coping Strategies of Afghan Students in Times of Crisis",
        "cert-17": "Certified Senior EFL Teacher at WOU",
        "cert-18": "Certified Technical Secretary at Online Publication Authority-WOU",
        contact: "Personal Information",
        "contact-email": "Email Address",
        "contact-phone": "Phone",
        "contact-address": "Home Address",
        "contact-whatsapp": "WhatsApp",
        "contact-telegram": "Telegram",
        "contact-email": "es.akbari.ak@gmail.com",
        "contact-phone": "+93 792 013 520",
        "contact-address": "Herat, Afghanistan",
        "contact-form-title": "Send a Message",
        "contact-form-name": "Name",
        "contact-form-email": "Email",
        "contact-form-message": "Message",
        "contact-form-button": "Send",
        "contact-form-error-empty": "Please fill out all fields.",
        "contact-form-error-email": "Please enter a valid email address.",
        "contact-form-success": "Message sent successfully!",
        "contact-form-error": "Failed to send message. Please try again.",
        footer: "© 2025 Esmatullah Akbari. All rights reserved."
    },
    fa: {
        title: "عصمت الله اکبری - پرتفولیو",
        "title-skills": "عصمت الله اکبری - مهارت‌ها",
        "title-certificates": "عصمت الله اکبری - گواهینامه‌ها",
        "title-contact": "عصمت الله اکبری - تماس",
        name: "عصمت الله اکبری",
        "nav-home": "صفحه اصلی",
        "nav-skills": "مهارت‌ها",
        "nav-certificates": "گواهینامه‌ها",
        "nav-contact": "تماس",
        welcome: "به پرتفولیوی من خوش آمدید",
        "about-1": "من عصمت الله اکبری هستم، یک حرفه‌ای چندجانبه مستقر در هرات، افغانستان، با تخصص در آموزش، مدیریت، ارتباطات، نظارت و ارزیابی، و توسعه وب. با پایه‌ای قوی در آموزش زبان انگلیسی و رهبری آکادمیک، همچنین از طریق هماهنگی‌های مدیریتی و سیستم‌های نظارت مبتنی بر نتایج به رشد سازمانی کمک کرده‌ام. تجربه‌ام در ارتباطات و نظارت و ارزیابی به من کمک کرده تا شفافیت، ارزیابی تأثیر، و مشارکت جامعه در پروژه‌های توسعه را تضمین کنم.",
        "about-2": "در کنار فعالیت‌هایم در بخش‌های آموزشی و بشردوستانه، به فناوری علاقه‌مندم. چندین وب‌سایت با استفاده از HTML، CSS و JavaScript توسعه داده‌ام و از به‌کارگیری مهارت‌های فنی‌ام برای طراحی ابزارها و راه‌حل‌های نوآورانه برای توسعه آموزشی و اجتماعی لذت می‌برم.",
        "about-3": "همیشه مشتاق یادگیری، رشد و مشارکت در پروژه‌های چندرشته‌ای معنادار هستم که تأثیرگذار باشند.",
        education: "تحصیلات",
        "edu-1": "لیسانس، زبان و ادبیات انگلیسی - دانشگاه هرات (1398-1402)<br>نمره: 92% (A)",
        "edu-2": "فارغ‌التحصیل دبیرستان - دبیرستان سلطان غیاث‌الدین غوری (1386-1397)",
        experience: "تجربه کاری",
        "exp-1-title": " آمر دیپارتمنت انگلیسی و مدرس - دانشگاه آنلاین زن (WOU)",
        "exp-1-date": "خرداد(جورا) 1403 - تیر(سرطان) 1404",
        "exp-1-1": "رهبری استراتژی، برنامه‌ریزی و عملیات دیپارتمنت.",
        "exp-1-2": "نظارت بر برنامه‌های آکادمیک و اطمینان از ارائه با کیفیت.",
        "exp-1-3": "مدیریت استخدام، توسعه و عملکرد اعضای هیئت علمی.",
        "exp-1-4": "پاسخگویی به نیازهای دانشجویان و ترویج حمایت آکادمیک.",
        "exp-1-5": "اطمینان از رعایت استانداردها، بودجه‌ها و گزارش‌دهی.",
        "exp-2-title": "ناظر میدانی پروژه - IWA - USAID",
        "exp-2-date": "مرداد(اسد) 1403 - بهمن(دلو) 1403",
        "exp-2-1": "هماهنگی با مقامات و شرکا برای دسترسی به سایت‌ها و تأییدیه‌ها.",
        "exp-2-2": "بازدیدهای میدانی از سایت‌های پروژه برای نظارت و جمع‌آوری داده‌ها.",
        "exp-2-3": "استفاده از ابزارهای دیجیتال برای جمع‌آوری، ترجمه و ورود داده‌های کیفی و کمی.",
        "exp-2-4": "اطمینان از دقت، کامل بودن و محرمانگی داده‌ها طبق پروتکل‌ها.",
        "exp-2-5": "گزارش مسائل و پیروی از راهنمایی‌های مسئولین پروژه و کیفیت داده.",
        "exp-3-title": "دستیار اداری - DSON",
        "exp-3-date": "دی(جدی) 1402 - تیر(سرطان) 1403",
        "exp-3-1": "نظارت بر عملیات روزانه دفتر، از جمله تهیه لوازم و نگهداری تجهیزات.",
        "exp-3-2": "سازماندهی جلسات، کارگاه‌ها و دوره‌های آموزشی با مدیریت تمام ترتیبات لجستیکی و تهیه اسناد مورد نیاز.",
        "exp-3-3": "اطمینان از بایگانی مناسب اسناد اداری در قالب‌های کاغذی و دیجیتال.",
        "exp-3-4": "ارتباط با سازمان‌های دولتی و شرکا در امور اداری.",
        "exp-3-5": "حمایت از مدیر استانی در اجرای سیاست‌ها و رویه‌های سازمانی.",
        "exp-4-title": "مسئول ارتباطات - DSON",
        "exp-4-date": "دی(جدی) 1401 - آذر(قوس) 1402",
        "exp-4-1": "توسعه و اجرای استراتژی‌های ارتباطی هم‌راستا با اهداف سازمانی.",
        "exp-4-2": "ایجاد و مدیریت محتوا در رسانه‌های اجتماعی، گزارش‌ها، خبرنامه‌ها و وب‌سایت.",
        "exp-4-3": "ایجاد روابط رسانه‌ای و هماهنگی پوشش خبری برای تبلیغ ابتکارات.",
        "exp-4-4": "تعامل با ذینفعان از طریق پیام‌رسانی مؤثر و ارتباطات رویدادها.",
        "exp-4-5": "نظارت بر عملکرد ارتباطات و اطمینان از برندسازی مداوم.",
        "exp-5-title": "موبایلایزر جامعه - ASEWO",
        "exp-5-date": "دی(جدی) 1400 - آذر(قوس) 1401",
        "exp-5-1": "موبایلایز کردن جوامع برای افزایش آگاهی و تشویق مشارکت در فعالیت‌های پروژه.",
        "exp-5-2": "نظارت بر تسهیل‌کنندگان جامعه برای اطمینان از اجرای مؤثر در سطح روستا.",
        "exp-5-3": "جمع‌آوری و گزارش داده‌ها با استفاده از ابزارهای دیجیتال مانند ODK/KOBO برای تصمیم‌گیری آگاهانه.",
        "exp-5-4": "حمایت از تشکیل ساختارهای جامعه با تمرکز بر مشارکت و رهبری زنان.",
        "exp-5-5": "هماهنگی با ذینفعان محلی و اطمینان از رعایت ساختارهای حکومتی در سطح روستا.",
        "exp-6-title": "افسر تحقیق - ASLO",
        "exp-6-date": "خرداد(جوزا) 1400 - آذر(قوس) 1400",
        "exp-6-1": "شرکت در آموزش برای درک اهداف پروژه و ابزارهای جمع‌آوری داده.",
        "exp-6-2": "هماهنگی با مقامات محلی و جوامع برای برگزاری گروه‌های کانونی در منطقه سد سلما.",
        "exp-6-3": "جمع‌آوری داده‌های کیفی از طریق گروه‌های کانونی، شامل عکس، صدا و مستندات ویدئویی.",
        "exp-6-4": "رونویسی و ترجمه داده‌های گروه‌های کانونی به انگلیسی و تهیه اسناد شرکت‌کنندگان.",
        "exp-6-5": "تکمیل و ارسال گزارش‌ها و فرم‌ها مطابق با الزامات پروژه ASLO.",
        achievements: "پروژه‌ها",
        "project-link": "🏤 پروژه نمونه",
        hobbies: "سرگرمی‌ها و علایق",
        "hobby-1": "بدنسازی",
        "hobby-2": "رانندگی",
        "hobby-3": "مطالعه کتاب",
        skills: "مهارت‌ها",
        "skill-lang-title": "مهارت‌های زبانی",
        "skill-lang-1": "انگلیسی <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-lang-2": "فارسی <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-lang-3": "پشتو <span class='rating'>⭐⭐⭐</span>",
        "skill-web-title": "توسعه وب",
        "skill-web-1": "HTML <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-web-2": "CSS <span class='rating'>⭐⭐⭐⭐</span>",
        "skill-web-3": "JavaScript <span class='rating'>⭐⭐⭐</span>",
        "skill-comp-title": "مهارت‌های کامپیوتری",
        "skill-comp-1": "مایکروسافت آفیس <span class='rating'>⭐⭐⭐⭐</span>",
        "skill-comp-2": "SPSS <span class='rating'>⭐⭐⭐⭐</span>",
        "skill-comp-3": "KOBO و ODK <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-comp-4": "ArcGIS <span class='rating'>⭐⭐⭐⭐⭐</span>",
        "skill-org-title": "مهارت‌های سازمانی",
        "skill-org-1": "رهبری و مدیریت تغییر",
        "skill-org-2": "ارتباطات و نظارت و ارزیابی",
        "skill-org-3": "گزارش‌دهی",
        "skill-org-4": "کار تیمی و انگیزه‌بخشی",
        "skill-org-5": "یادگیری سریع و ابتکار عمل",
        "skill-org-6": "حل مسئله و هماهنگی",
        "skill-org-7": "انعطاف‌پذیری",
        "skill-org-8": "حفاظت از کودکان",
        "skill-org-9": "تسهیلگری",
        "skill-org-10": "آموزش و تدریس",
        "skill-org-11": "جمع‌آوری داده، تجزیه و تحلیل داده و پاک‌سازی داده",
        "skill-org-12": "تحقیق",
        "skill-acad-title": "مهارت‌های آکادمیک و تدریس",
        "skill-acad-1": "توسعه برنامه درسی",
        "skill-acad-2": "برنامه‌ریزی و ارائه درس برای گروه‌های سنی مختلف",
        "skill-acad-3": "طراحی فعالیت‌های آموزشی تعاملی و جذاب",
        "skill-acad-4": "مدیریت کلاس با استفاده از روش‌های انضباطی غیرفیزیکی",
        "skill-acad-5": "آشنایی با استراتژی‌های آموزش دو زبانه",
        "skill-acad-6": "تنظیم سبک‌های تدریس بر اساس سن و سطح یادگیری دانش‌آموزان",
        "skill-online-title": "مهارت‌های پلتفرم‌های آنلاین",
        "skill-online-1": "پلتفرم‌های آموزشی",
        "skill-online-2": "تدریس و ارائه آنلاین",
        "skill-online-3": "پلتفرم‌های حرفه‌ای و مرتبط با شغل",
        certificates: "گواهینامه‌ها و دستاوردها",
        "cert-1": "آموزش مدیریت تیم پروژه و ارتباطات در ASEWO-هرات",
        "cert-2": "توانمندسازی رهبران جوان (ECOSOC) در دفتر سازمان ملل متحد برای زنان",
        "cert-3": "امنیت شبکه پیشرفته در AWDP-هرات",
        "cert-4": "مهارت‌های ارتباطی انگلیسی در مؤسسه جهانی انگلیسی-آمریکا",
        "cert-5": "نظارت بر حقوق بشر در USIP-هرات",
        "cert-6": "آموزش WASH (WSP) در DACAAR-هرات",
        "cert-7": "آموزش فناوری اطلاعات و ارتباطات (Ms. PWE) در USAID-AWDP",
        "cert-8": "آموزش روش‌شناسی تحقیق در IWA-هرات",
        "cert-9": "مهارت‌های زبان انگلیسی در SDROA-آمریکا",
        "cert-10": "دانشجوی ممتاز سال آخر در دانشگاه هرات",
        "cert-11": "کامپیوتر، بسته ICDL در مرکز آموزشی ELCLC-هرات",
        "cert-12": "فارغ‌التحصیل ممتاز دانشگاه هرات",
        "cert-13": "روش‌شناسی جمع‌آوری داده در DACAAR-هرات",
        "cert-14": "تدریس و آموزش حرفه‌ای در OSAA-هرات",
        "cert-15": "مهارت‌های مدیریتی در دانشگاه هرات-هرات",
        "cert-16": "مقاله تحت عنوان: تاب‌آوری در آموزش: استراتژی‌های مقابله‌ای دانش‌آموزان افغان در زمان‌های بحران",
        "cert-17": "مدرس ارشد EFL در WOU",
        "cert-18": "دبیر فنی معتبر در تصدی نشرات آنلاین-WOU",
        contact: "اطلاعات شخصی",
        "contact-email": "آدرس ایمیل",
        "contact-phone": "تلفن",
        "contact-address": "آدرس منزل",
        "contact-whatsapp": "واتساپ",
        "contact-telegram": "تلگرام",
        "contact-email": "es.akbari.ak@gmail.com",
        "contact-phone": "+۹۳ ۷۹۲ ۰۱۳ ۵۲۰",
        "contact-address": "هرات، افغانستان",
        "contact-form-title": "ارسال پیام",
        "contact-form-name": "نام",
        "contact-form-email": "ایمیل",
        "contact-form-message": "پیام",
        "contact-form-button": "ارسال",
        "contact-form-error-empty": "لطفاً تمام فیلدها را پر کنید.",
        "contact-form-error-email": "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
        "contact-form-success": "پیام با موفقیت ارسال شد!",
        "contact-form-error": "ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید.",
        footer: "© 1404 عصمت الله اکبری. تمامی حقوق محفوظ است."
    }
};

// Initialize Language
const initLanguage = () => {
    const savedLang = localStorage.getItem('language') || 'en';
    document.documentElement.lang = savedLang;
    document.getElementById('language-select').value = savedLang;
    updateContent(savedLang);
};

// Update Content Based on Language
const updateContent = (lang) => {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    // Update document title
    const titleKey = document.querySelector('title').getAttribute('data-lang-key');
    document.title = translations[lang][titleKey] || translations[lang].title;
};

// Handle Language Change
const handleLanguageChange = (e) => {
    const lang = e.target.value;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateContent(lang);
    // Announce language change for accessibility
    showNotification(lang === 'fa' ? 'زبان به فارسی تغییر کرد' : 'Language changed to English', 'success');
};

// Show Notification
const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
};

// Scroll Reveal Animation
const revealSections = () => {
    const sections = document.querySelectorAll('.section-hidden');
    const observerOptions = {
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
};

// Back-to-Top Button
const initBackToTop = () => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.textContent = document.documentElement.lang === 'fa' ? 'بازگشت به بالا' : 'Back to Top';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);

    const toggleButton = () => {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', debounce(toggleButton, 100));
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Update button text on language change
    document.getElementById('language-select').addEventListener('change', () => {
        button.textContent = document.documentElement.lang === 'fa' ? 'بازگشت به بالا' : 'Back to Top';
    });
};

// Form Validation and Submission
const initForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const lang = document.documentElement.lang;
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const message = form.querySelector('#message').value.trim();

        // Validation
        if (!name || !email || !message) {
            showNotification(translations[lang]['contact-form-error-empty'], 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showNotification(translations[lang]['contact-form-error-email'], 'error');
            return;
        }

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form)
            });

            if (response.ok) {
                showNotification(translations[lang]['contact-form-success'], 'success');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification(translations[lang]['contact-form-error'], 'error');
        }
    });
};

// Image Error Handling
const handleImageErrors = () => {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'fallback-image.jpg'; // Ensure you have a fallback image
            img.alt = document.documentElement.lang === 'fa' ? 'تصویر در دسترس نیست' : 'Image not available';
        });
    });
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
    setTimeout(() => document.body.classList.remove('loading'), 1000);

    initLanguage();
    document.getElementById('language-select').addEventListener('change', handleLanguageChange);
    revealSections();
    initBackToTop();
    initForm();
    handleImageErrors();

    // Accessibility: Announce page load
    const announce = document.createElement('div');
    announce.setAttribute('aria-live', 'polite');
    announce.style.position = 'absolute';
    announce.style.left = '-9999px';
    announce.textContent = document.documentElement.lang === 'fa' ? 'صفحه بارگذاری شد' : 'Page loaded';
    document.body.appendChild(announce);
    setTimeout(() => announce.remove(), 1000);
});

// Handle Window Resize
window.addEventListener('resize', debounce(() => {
    // Re-apply animations or layout adjustments if needed
    revealSections();
}, 100));
// Hamburger Menu Toggle
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Hamburger menu toggled');
        });
    } else {
        console.error('Hamburger or nav-links not found');
    }
}

// Add to DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script started');
    initLanguage();
    initHamburgerMenu(); // Add this line
    const langSelect = document.getElementById('language-select');
    langSelect.addEventListener('change', handleLanguageChange);
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
