/* ==========================================================================
   BAYAN MOHAMED ACADEMY - INTERACTIVE CORE ENGINE
   Dynamic Watermark Canvas, DRM Video Protection, Moyasar Webhook Simulator,
   Single Device Guard, and iPad Admin Command Center.
   ========================================================================== */

// --- GLOBAL STATE ---
let currentView = 'student-store';
let isLogged = false;

/* ==========================================================================
   MULTILINGUAL SYSTEM (ARABIC / ENGLISH)
   ========================================================================== */
let currentLang = 'ar';

const i18n = {
    ar: {
        dir: 'rtl',
        brandSubtitle: 'ACADEMY • التخصصات الإدارية',
        navStudent: 'بوابة الطلاب',
        navPlayer: 'مشغل الفيديو (DRM)',
        navAdmin: 'لوحة المشرف (iPad/الجوال)',
        loginBtn: 'تسجيل الدخول / OTP',
        loggedIn: 'مسجّل الدخول',
        deviceBadge: 'iPhone 15 Pro (نشط)',
        heroPill: 'منصة تعليمية فاخرة لطلاب تخصصات الأعمال',
        heroTitle1: 'Master Business with',
        heroTitle2: 'Bayan Mohamed',
        heroSubtitle: 'تفوق في المواد الإدارية، التحليل المالي، التسويق، والتخطيط الاستراتيجي مع شروحات مبسطة ومحمية بأحدث تقنيات المشاهدة الذكية والتشفير الآمن.',
        heroCta1: 'ابدأ مشاهدة الكورسات',
        heroCta2: 'تصفح المقررات الدراسية',
        chatGreeting: 'مرحباً بك 👋 أنا المساعد الافتراضي الذكي للأستاذة <strong>أ. بيان محمد</strong> 🇸🇦 كيف يمكنني مساعدتك اليوم؟\n\nأستطيع مساعدتك في كل ما يخص الأكاديمية: المقررات، الأسعار، الاشتراك، الدفع، حماية المحتوى، أو أي استفسار آخر. اسألني بأي صيغة تريد!',
        chatPlaceholder: 'اكتب رسالتك هنا...',
        chatTitle: 'مساعد أكاديمية بيان محمد',
        chatStatus: 'متصل الآن',
        footerYearSuffix: 'جميع الحقوق محفوظة.',
        footerTech: 'مشاهدة آمنة بتقنية DRM • تشفير HLS',
        whatsappTooltip: 'تواصل معنا',
        qrCourses: 'المقررات المتاحة',
        qrPayment: 'طريقة الدفع',
        qrSecurity: 'حماية المحتوى',
        qrContact: 'التواصل معنا',
        navLabel: 'التنقل',
        langLabel: 'اللغة',
        // Hero visuals
        drmTitle: 'تشفير HLS + DRM',
        drmDesc: 'حماية 100% ضد IDM والتسجيل',
        studentsTitle: '500+ طالب متزامن',
        studentsDesc: 'أداء سحابي فائق السرعة',
        // Features
        feat1Title: 'علامة مائية ديناميكية',
        feat1Desc: 'بيانات الطالب (الاسم، الجوال، الإيميل) تظهر متحركة طوال فترة المشاهدة لمنع التسريب.',
        feat2Title: 'جهاز واحد للمستخدم',
        feat2Desc: 'نظام Single Device Login تلقائي يضمن عدم مشاركة الحساب وطرد الجلسات المزدوجة.',
        feat3Title: 'دفع فوري عبر Moyasar',
        feat3Desc: 'دعم مدى، Apple Pay، والتحويل البنكي مع تفعيل تلقائي فوري للكورس فور إتمام الدفع.',
        feat4Title: 'لوحة تحكم للـ iPad',
        feat4Desc: 'إدارة المنصة ورفع الفيديوهات مباشرة من الآيباد أو الجوال بسهولة مطلقة.',
        // Stats
        statsTitle: 'إحصائياتي في الأكاديمية',
        statsSub: 'متابعة التطور ومؤشرات الإنجاز الحالية',
        statRegTitle: 'المقررات المسجلة',
        statRegFooter: '4 كورسات مكتملة',
        statHoursTitle: 'ساعات المشاهدة',
        statHoursUnit: 'ساعة',
        statHoursFooter: '+3.5 ساعات هذا الأسبوع',
        statLearnTitle: 'إجمالي التعلم',
        statLearnUnit: 'درس',
        statLearnFooter: 'نسبة تفاعل عالية',
        statRateTitle: 'معدل الإنجاز العام',
        statRateUnit: 'نقطة',
        // Catalog
        catalogTitle: 'المقررات الدراسية المتاحة',
        catalogSub: 'اختر المقرر الدراسي للبدء في المشاهدة أو الاشتراك التلقائي',
        catAll: 'الكل',
        catManagement: 'إدارة الأعمال',
        catFinance: 'التحليل المالي',
        catMarketing: 'التسويق الرقمي',
        catHr: 'الموارد البشرية',
        // Video player
        backToCourses: 'العودة إلى المقررات',
        playerTitle: 'التحليل المالي والمحاسبة الاستراتيجية - الدرس 3: تحليل القوائم المالية والنسب',
        secWatermark: 'العلامة المائية الديناميكية:',
        secWatermarkVal: 'نشطة (تتحرك تلقائياً)',
        secDownload: 'حماية التحميل IDM:',
        secDownloadVal: 'مفعّلة (تشفير مقطعي)',
        secObs: 'حماية تسجيل الشاشة OBS:',
        obsTestBtn: 'اختبار كشف تسجيل الشاشة',
        blackoutTitle: 'تم كشف محاولة تسجيل الشاشة! (OBS / Screen Capture)',
        blackoutDesc: 'يتم حجب الفيديو بشاشة سوداء لحماية حقوق الملكية الفكرية لأكاديمية بيان محمد.',
        closeTest: 'إغلاق الوضع التجريبي للحجب',
        playerNotSupported: 'متصفحك لا يدعم مشغل الفيديو',
        lessonInfoTitle: 'تفاصيل الدرس الثالث: تحليل القوائم المالية والمؤشرات',
        lessonInfoInstructor: 'تقديم المحاضر: أ. بيان محمد | مادة التحليل المالي',
        buyCourse: 'شراء المقرر الكامل (350 ر.س)',
        lessonDesc: 'في هذا الدرس نتعلم كيفية قراءة قائمة الدخل، الميزانية العمومية، وقائمة التدفقات النقدية، وحساب النسبة السريعة ونسبة التداول ومعدل دوران الأصول لدعم القرار الإداري والاستثماري.',
        playlistTitle: 'فصول المقرر الدراسي',
        attachTitle: 'ملحقات ومذكرات الدرس (PDF)',
        // Footer
        footerAboutDesc: 'منصة تعليمية فاخرة ومحمية للتخصصات الإدارية وإدارة الأعمال، نجمع بين الفخامة الذهبية والتكنولوجيا المستقبلية لإلهام طالب البيزنس الطموح.',
        footerQuickTitle: 'روابط سريعة',
        footLinkStudent: 'بوابة الطلاب',
        footLinkPlayer: 'مشغل الفيديو',
        footLinkAdmin: 'لوحة المشرف',
        footLinkCourses: 'المقررات الدراسية',
        footerCoursesTitle: 'المقررات',
        footAllCourses: 'جميع المقررات',
        footerContact: 'تواصل معنا',
        footLocation: 'الرياض، المملكة العربية السعودية',
        footSupport: 'دعم فني 24/7',
        footerPayment: 'وسائل دفع آمنة',
        footerSafe: 'مشاهدة آمنة ومحمية',
        // Admin
        adminWelcomeSub: 'نظام التحكم الشامل لأكاديمية بيان محمد - تحكم كامل بالسعة وإحصائيات الطلاب',
        admMenuAnalytics: 'لوحة التحليلات',
        admMenuUpload: 'رفع فيديوهات (iPad)',
        admMenuStudents: 'إدارة الطلاب والأجهزة',
        admMenuSecurity: 'إعدادات DRM والعلامة المائية',
        admIpadBadge: 'نموذج تحكم الآيباد والجوال',
        admTrendStudents: '+12.5% هذا الشهر',
        admTrendRevenue: 'ربط مباشر Moyasar Webhook',
        admTrendActive: '500 طالب متزامن حالياً',
        admChartSub: 'متابعة المبيعات واشتراكات الطلاب خلال الأشهر الأخيرة',
        admChartLegendSales: 'المبيعات (ر.س)',
        admChartLegendEnroll: 'التسجيلات الجديدة',
        admTableRefresh: 'تحديث اللحظي',
        admKickBtn: 'طرد الجهاز',
        admUploadTag: 'مخصص للرفع المباشر من iPad والجوال',
        admUploadTitle: 'مركز رفع مقاطع الفيديو وتشفير VdoCipher DRM',
        admUploadDesc: 'يمكنك اختيار ملف الفيديو مباشرة من مكتبة الآيباد أو الكاميرا وسيقوم النظام بتجزئته وتشفيره أوتوماتيكياً.',
        admUpTitleLabel: 'عنوان الدرس / الفيديو:',
        admUpTitlePh: 'مثال: الدرس 4 - تحليل نسب السيولة والربحية',
        admUpCourseLabel: 'المقرر الدراسي التابع له:',
        admDropTitle: 'اضغط هنا لاختيار فيديو من الآيباد / الجوال',
        admDropDesc: 'أو اسحب الملف إلى هنا مباشرة (دعم صيغ MP4, MOV, M4V حتى 5 جيجابايت)',
        admDropNone: 'لم يتم اختيار ملف بعد',
        admUploadStatus: 'جاري التشفير والرفع إلى Bunny/VdoCipher...',
        admUploadSubmit: 'تشفير ونشر الفيديو فوراً (DRM)',
        admStuTitle: 'إدارة الجلسات والأجهزة (Single Device Policy)',
        admStuDesc: 'يمكنك هنا طرد أي جهاز طالب نشط، أو حظر تسجيل الدخول المزدوج لضمان حماية المحتوى.',
        admStuPolicyTitle: 'الحد الأقصى للأجهزة المسموحة لكل طالب',
        admStuPolicyDesc: 'عند محاولة الدخول من جهاز ثانٍ، يتم إرسال تنبيه وتسجيل خروج الجهاز الأول تلقائياً.',
        admStuPolicyStatus: '1 جهاز فقط (مفعّل)',
        admStuOtpTitle: 'الربط مع OTP عبر SMS',
        admStuOtpDesc: 'إرسال رمز التفعيل المؤقت ورقم الجهاز الفريد (Device UUID)',
        admStuOtpStatus: 'مزود الخدمة: Twilio/Vonage Active',
        admSecTitle: 'إعدادات العلامة المائية الديناميكية المتحركة',
        admSecDesc: 'التحكم في سرعة تحرك العلامة المائية، حجم الخط، ودرجة الشفافية على فيديوهات الطالب.',
        admSecDataLabel: 'بيانات العلامة المائية المعروضة:',
        admSecCbName: 'اسم الطالب الكامل',
        admSecCbPhone: 'رقم الجوال المسجل',
        admSecCbEmail: 'البريد الإلكتروني',
        admSecCbIp: 'عنوان IP الحالي',
        admSecSpeedLabel: 'سرعة تحرك العلامة المائية على الشاشة:',
        admSecOpacityLabel: 'درجة الشفافية (Opacity):',
        admUpTitleDefault: 'فيديو تعليمي جديد',
        admUpStatus40: 'جاري توليد مفاتيح التشفير HLS + DRM v2...',
        admUpStatus80: 'جاري المعالجة وإتاحة البث الفوري...',
        admUpStatusDone: 'تم تشفير ونشر الفيديو بنجاح!',
        admUpNewTitle: 'فيديو مرفوع جديد',
        admUpNewCat: 'مرفوع حديثاً (DRM)',
        admRevConfirm: (n) => `هل تأكد من رغبتك في طرد جهاز الطالب (${n}) وتسجيل خروجه فوراً؟`,
        admRevAlert: (n) => `تم إلغاء Token وتأمين حساب ${n} بنجاح.`,
        admStuNow: 'الان (مباشر)',
        admStuAgo: (m) => `منذ ${m} دقيقة`,
        admStuKick: 'طرد الجهاز',
        admStuCourseFinance: 'التحليل المالي والمحاسبة',
    },
    en: {
        dir: 'ltr',
        brandSubtitle: 'ACADEMY • Business Specialties',
        navStudent: 'Student Portal',
        navPlayer: 'Video Player (DRM)',
        navAdmin: 'Admin Panel (iPad/Mobile)',
        loginBtn: 'Sign in / OTP',
        loggedIn: 'Signed in',
        deviceBadge: 'iPhone 15 Pro (Active)',
        heroPill: 'A premium education platform for business students',
        heroTitle1: 'Master Business with',
        heroTitle2: 'Bayan Mohamed',
        heroSubtitle: 'Excel in business courses, financial analysis, marketing, and strategic planning with simplified, DRM-protected video explanations.',
        heroCta1: 'Start Watching Courses',
        heroCta2: 'Browse Courses',
        chatGreeting: 'Welcome 👋 I am the smart virtual assistant of <strong>Prof. Bayan Mohamed</strong> 🇸🇦. How can I help you today?\n\nI can help with anything about the academy: courses, pricing, subscriptions, payments, content protection, or any other question. Ask me however you like!',
        chatPlaceholder: 'Type your message here...',
        chatTitle: 'Prof. Bayan Mohamed\'s Assistant',
        chatStatus: 'Online now',
        footerYearSuffix: 'All rights reserved.',
        footerTech: 'Secure DRM viewing • HLS encryption',
        whatsappTooltip: 'Contact us',
        qrCourses: 'Available Courses',
        qrPayment: 'Payment Method',
        qrSecurity: 'Content Protection',
        qrContact: 'Contact Us',
        navLabel: 'Navigation',
        langLabel: 'Language',
        // Hero visuals
        drmTitle: 'HLS + DRM Encryption',
        drmDesc: '100% protection against IDM & recording',
        studentsTitle: '500+ Concurrent Students',
        studentsDesc: 'Ultra-fast cloud performance',
        // Features
        feat1Title: 'Dynamic Watermark',
        feat1Desc: 'Student data (name, phone, email) moves across the video throughout playback to prevent leaks.',
        feat2Title: 'Single Device per User',
        feat2Desc: 'Automatic Single Device Login prevents account sharing and kicks duplicate sessions.',
        feat3Title: 'Instant Payment via Moyasar',
        feat3Desc: 'Supports Mada, Apple Pay & bank transfer with instant automatic course activation.',
        feat4Title: 'iPad Control Panel',
        feat4Desc: 'Manage the platform and upload videos directly from your iPad or phone easily.',
        // Stats
        statsTitle: 'My Academy Stats',
        statsSub: 'Track progress and current achievement indicators',
        statRegTitle: 'Enrolled Courses',
        statRegFooter: '4 courses completed',
        statHoursTitle: 'Hours Watched',
        statHoursUnit: 'hours',
        statHoursFooter: '+3.5 hours this week',
        statLearnTitle: 'Total Learning',
        statLearnUnit: 'lessons',
        statLearnFooter: 'High engagement rate',
        statRateTitle: 'Overall Completion',
        statRateUnit: 'points',
        // Catalog
        catalogTitle: 'Available Courses',
        catalogSub: 'Choose a course to start watching or auto-subscribe',
        catAll: 'All',
        catManagement: 'Business Management',
        catFinance: 'Financial Analysis',
        catMarketing: 'Digital Marketing',
        catHr: 'Human Resources',
        // Video player
        backToCourses: 'Back to Courses',
        playerTitle: 'Financial Analysis & Strategic Accounting - Lesson 3: Financial Statements & Ratios Analysis',
        secWatermark: 'Dynamic watermark:',
        secWatermarkVal: 'Active (auto-moving)',
        secDownload: 'IDM download protection:',
        secDownloadVal: 'Enabled (segmented encryption)',
        secObs: 'OBS screen recording protection:',
        obsTestBtn: 'Test screen-recording detection',
        blackoutTitle: 'Screen recording attempt detected! (OBS / Screen Capture)',
        blackoutDesc: 'The video has been blocked with a black screen to protect Bayan Mohamed Academy\u2019s intellectual property.',
        closeTest: 'Close the blocking demo mode',
        playerNotSupported: 'Your browser does not support the video player',
        lessonInfoTitle: 'Lesson 3 Details: Financial Statements & Indicators Analysis',
        lessonInfoInstructor: 'Delivered by: Prof. Bayan Mohamed | Financial Analysis',
        buyCourse: 'Buy Full Course (SAR 350)',
        lessonDesc: 'In this lesson we learn how to read the income statement, balance sheet, and cash flow statement, and calculate the quick ratio, current ratio, and asset turnover to support managerial and investment decisions.',
        playlistTitle: 'Course Chapters',
        attachTitle: 'Lesson Attachments & Notes (PDF)',
        // Footer
        footerAboutDesc: 'A luxury, protected education platform for business management specialties — blending golden elegance with futuristic technology to inspire the ambitious business student.',
        footerQuickTitle: 'Quick Links',
        footLinkStudent: 'Student Portal',
        footLinkPlayer: 'Video Player',
        footLinkAdmin: 'Admin Panel',
        footLinkCourses: 'Courses',
        footerCoursesTitle: 'Courses',
        footAllCourses: 'All Courses',
        footerContact: 'Contact Us',
        footLocation: 'Riyadh, Saudi Arabia',
        footSupport: '24/7 technical support',
        footerPayment: 'Secure Payment Methods',
        footerSafe: 'Secure & Protected Viewing',
        // Admin
        adminWelcomeSub: 'Comprehensive control system for Bayan Mohamed Academy - full capacity control and student statistics',
        admMenuAnalytics: 'Analytics Dashboard',
        admMenuUpload: 'Upload Videos (iPad)',
        admMenuStudents: 'Manage Students & Devices',
        admMenuSecurity: 'DRM & Watermark Settings',
        admIpadBadge: 'iPad / Mobile Control Model',
        admTrendStudents: '+12.5% this month',
        admTrendRevenue: 'Direct Moyasar Webhook',
        admTrendActive: '500 concurrent students now',
        admChartSub: 'Track sales and student subscriptions over recent months',
        admChartLegendSales: 'Sales (SAR)',
        admChartLegendEnroll: 'New Enrollments',
        admTableRefresh: 'Live refresh',
        admKickBtn: 'Kick device',
        admUploadTag: 'For direct upload from iPad & Mobile',
        admUploadTitle: 'Video Upload Center & VdoCipher DRM Encryption',
        admUploadDesc: 'Choose a video directly from your iPad library or camera and the system will segment and encrypt it automatically.',
        admUpTitleLabel: 'Lesson / Video Title:',
        admUpTitlePh: 'Example: Lesson 4 - Liquidity & Profitability Ratios Analysis',
        admUpCourseLabel: 'Course:',
        admDropTitle: 'Click here to choose a video from iPad / Mobile',
        admDropDesc: 'Or drag the file here directly (supports MP4, MOV, M4V up to 5GB)',
        admDropNone: 'No file selected yet',
        admUploadStatus: 'Encrypting and uploading to Bunny/VdoCipher...',
        admUploadSubmit: 'Encrypt & Publish Video Now (DRM)',
        admStuTitle: 'Session & Device Management (Single Device Policy)',
        admStuDesc: 'Here you can kick any active student device, or block duplicate logins to ensure content protection.',
        admStuPolicyTitle: 'Maximum allowed devices per student',
        admStuPolicyDesc: 'On a second-device login attempt, an alert is sent and the first device is logged out automatically.',
        admStuPolicyStatus: '1 device only (Enabled)',
        admStuOtpTitle: 'OTP via SMS binding',
        admStuOtpDesc: 'Send the temporary activation code and the unique device number (Device UUID)',
        admStuOtpStatus: 'Provider: Twilio/Vonage Active',
        admSecTitle: 'Dynamic Moving Watermark Settings',
        admSecDesc: 'Control watermark movement speed, font size, and transparency on student videos.',
        admSecDataLabel: 'Watermark data to display:',
        admSecCbName: 'Full student name',
        admSecCbPhone: 'Registered phone number',
        admSecCbEmail: 'Email address',
        admSecCbIp: 'Current IP address',
        admSecSpeedLabel: 'Watermark movement speed on screen:',
        admSecOpacityLabel: 'Opacity:',
        admUpTitleDefault: 'New educational video',
        admUpStatus40: 'Generating HLS + DRM v2 encryption keys...',
        admUpStatus80: 'Processing and enabling instant streaming...',
        admUpStatusDone: 'Video encrypted and published successfully!',
        admUpNewTitle: 'Newly uploaded video',
        admUpNewCat: 'Recently uploaded (DRM)',
        admRevConfirm: (n) => `Are you sure you want to kick out student device (${n}) and log them out immediately?`,
        admRevAlert: (n) => `Token revoked and account ${n} secured successfully.`,
        admStuNow: 'Now (Live)',
        admStuAgo: (m) => `${m} minutes ago`,
        admStuKick: 'Kick Device',
        admStuCourseFinance: 'Financial Analysis & Accounting',
    }
};

function applyLanguage(lang) {
    currentLang = lang;

    const t = i18n[lang];

    // Direction
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    // Toggle active lang button (mobile drawer flags)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `m-lang-${lang}`);
    });

    // Desktop language toggle label shows the target language
    const hdrLabel = document.getElementById('header-lang-label');
    if (hdrLabel) hdrLabel.textContent = lang === 'en' ? 'AR' : 'EN';

    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 30);

    // Re-render the dynamically generated course catalog in the current language
    if (typeof renderCourseCatalog === 'function' && document.getElementById('courses-grid-container')) {
        renderCourseCatalog(coursesData);
    }

    // Persist
    try { localStorage.setItem('bma_lang', lang); } catch(e) {}

    // Re-render if chat open
    const panel = document.getElementById('chat-panel');
    if (panel && panel.classList.contains('open')) {
        initChat();
    }
}

let studentUser = {
    name: 'أحمد محمد علي',
    phone: '+966 50 987 6543',
    email: 'ahmed@bayan-mohamed.edu.sa',
    ip: '185.220.101.42',
    device: 'iPhone 15 Pro (الرياض)'
};

// Watermark Motion State
let watermarkState = {
    x: 50,
    y: 50,
    dx: 1.8,
    dy: 1.4,
    speed: 4,
    opacity: 0.45
};

let watermarkAnimId = null;
let isOBSProtected = false;

// Courses Mock Data (Targeting University Business Students)
const coursesData = [
    {
        id: 1,
        title: 'التحليل المالي والمحاسبة الاستراتيجية للشركات',
        titleEn: 'Financial Analysis & Strategic Accounting for Companies',
        category: 'finance',
        categoryName: 'التحليل المالي',
        categoryNameEn: 'Financial Analysis',
        instructor: 'أ. بيان محمد',
        price: '350 ر.س',
        rawPrice: 350,
        progress: 85,
        hours: 18,
        lessonsCount: 14,
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        drm: 'VdoCipher DRM HLS'
    },
    {
        id: 2,
        title: 'إدارة الأعمال الدولية والتخطيط الاستراتيجي',
        titleEn: 'International Business Management & Strategic Planning',
        category: 'management',
        categoryName: 'إدارة الأعمال',
        categoryNameEn: 'Business Management',
        instructor: 'د. خالد السعيد',
        price: '420 ر.س',
        rawPrice: 420,
        progress: 40,
        hours: 24,
        lessonsCount: 18,
        thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
        drm: 'Bunny Stream DRM'
    },
    {
        id: 3,
        title: 'التسويق الرقمي الحديث وبناء العلامة التجارية',
        titleEn: 'Modern Digital Marketing & Brand Building',
        category: 'marketing',
        categoryName: 'التسويق الرقمي',
        categoryNameEn: 'Digital Marketing',
        instructor: 'أ. سارة المنصور',
        price: '290 ر.س',
        rawPrice: 290,
        progress: 10,
        hours: 15,
        lessonsCount: 12,
        thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        drm: 'VdoCipher DRM HLS'
    },
    {
        id: 4,
        title: 'إدارة الموارد البشرية والقيادة التنفيذية',
        titleEn: 'Human Resources Management & Executive Leadership',
        category: 'hr',
        categoryName: 'الموارد البشرية',
        categoryNameEn: 'Human Resources',
        instructor: 'أ. بيان محمد',
        price: '380 ر.س',
        rawPrice: 380,
        progress: 0,
        hours: 20,
        lessonsCount: 16,
        thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        drm: 'VdoCipher DRM HLS'
    },
    {
        id: 5,
        title: 'سلاسل الإمداد واللوجستيات الفعالة',
        titleEn: 'Supply Chain & Effective Logistics',
        category: 'management',
        categoryName: 'إدارة الأعمال',
        categoryNameEn: 'Business Management',
        instructor: 'د. فهد الشمري',
        price: '310 ر.س',
        rawPrice: 310,
        progress: 60,
        hours: 16,
        lessonsCount: 10,
        thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        drm: 'Bunny Stream DRM'
    },
    {
        id: 6,
        title: 'مبادئ الاقتصاد الجزئي والكلي للمدراء',
        titleEn: 'Principles of Micro & Macro Economics for Managers',
        category: 'finance',
        categoryName: 'التحليل المالي',
        categoryNameEn: 'Financial Analysis',
        instructor: 'د. عمر العتيبي',
        price: '340 ر.س',
        rawPrice: 340,
        progress: 100,
        hours: 22,
        lessonsCount: 15,
        thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
        drm: 'VdoCipher DRM HLS'
    }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Render Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Render Courses Catalog
    renderCourseCatalog(coursesData);

    // Initialize Dynamic Watermark Canvas
    initDynamicWatermark();

    // Setup Video Controls Listener
    setupVideoPlayerControls();

    // Animated Business Quotes Rotator
    initQuoteRotator();

    // Hero Opening Typewriter (English)
    initHeroTypewriter();

    // Animated Stat Counters
    initAnimatedCounters();

    // Footer Dynamic Year
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Load saved language preference (default: ar)
    let savedLang = null;
    try { savedLang = localStorage.getItem('bma_lang'); } catch(e) {}
    applyLanguage(savedLang === 'en' ? 'en' : 'ar');

    // Initialize Chat Translator
    initChatTranslator();
});

/* ==========================================================================
   HERO OPENING TYPEWRITER (English sentences, types & erases)
   ========================================================================== */
const heroPhrases = [
    'A specialized education platform for business & entrepreneurship.',
    'Master Business with Prof. Bayan Mohamed.',
    'Learn financial analysis, marketing & strategic planning.',
    'Build your entrepreneurial career with confidence.',
    'Courses with premium quality and full content protection.'
];

function initHeroTypewriter() {
    const el = document.getElementById('hero-typewriter');
    if (!el) return;

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    const typeSpeed = 55;
    const deleteSpeed = 28;
    const holdTime = 1800;

    function tick() {
        const current = heroPhrases[phraseIdx % heroPhrases.length];

        if (!deleting) {
            charIdx++;
            el.textContent = current.substring(0, charIdx);
            if (charIdx === current.length) {
                deleting = true;
                setTimeout(tick, holdTime);
                return;
            }
            setTimeout(tick, typeSpeed);
        } else {
            charIdx--;
            el.textContent = current.substring(0, charIdx);
            if (charIdx === 0) {
                deleting = false;
                phraseIdx++;
                setTimeout(tick, 250);
                return;
            }
            setTimeout(tick, deleteSpeed);
        }
    }

    el.textContent = '';
    setTimeout(tick, 300);
}

/* ==========================================================================
   NEW: ANIMATED BUSINESS QUOTES ROTATOR
   ========================================================================== */
const businessQuotes = [
    'النجاح يبدأ بقرار.',
    'التحليل المالي هو بوصلة النجاح.',
    'القائد العظيم يصنع الفرص.',
    'المعرفة استثمار يدرّ أعلى عائد.',
    'خطوتك الأولى نحو المستقبل تبدأ هنا.',
    'التميز ليس صدفة، بل قرار يومي.',
    'أتقن المال، وامتلك القرار.',
    'المستقبل لمن يتعلم اليوم.',
    'التخطيط الجيد نصف النجاح.',
    'عقول تصنع قادة أعمال.'
];

function initQuoteRotator() {
    const display = document.getElementById('quote-display');
    const progress = document.getElementById('quote-progress');
    if (!display) return;

    let idx = 0;
    const quoteDuration = 4000;

    function showQuote(i) {
        display.style.animation = 'none';
        void display.offsetWidth;
        display.style.animation = 'quoteFade 0.6s ease';
        display.textContent = businessQuotes[i % businessQuotes.length];

        if (progress) {
            progress.style.transition = 'none';
            progress.style.width = '0%';
            void progress.offsetWidth;
            progress.style.transition = `width ${quoteDuration}ms linear`;
            progress.style.width = '100%';
        }
    }

    showQuote(idx);
    setInterval(() => {
        idx = (idx + 1) % businessQuotes.length;
        showQuote(idx);
    }, quoteDuration);
}

/* ==========================================================================
   NEW: ANIMATED STATS COUNTERS (SCROLL TRIGGERED)
   ========================================================================== */
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-value[data-count]');
    if (!counters.length) return;

    const animateCount = (el) => {
        const target = parseFloat(el.getAttribute('data-count'));
        const isDecimal = target % 1 !== 0;
        const duration = 1600;
        const start = performance.now();

        function step(now) {
            const pct = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - pct, 3);
            const value = target * eased;
            el.textContent = isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString('en-US');
            if (pct < 1) requestAnimationFrame(step);
            else el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString('en-US');
        }
        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
}

// VIEW SWITCHER ENGINE
function switchView(viewId) {
    currentView = viewId;
    
    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    
    // Show target section
    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update Nav Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (viewId === 'student-store') document.getElementById('nav-student')?.classList.add('active');
    if (viewId === 'video-player') document.getElementById('nav-player')?.classList.add('active');
    if (viewId === 'admin-dashboard') document.getElementById('nav-admin')?.classList.add('active');

    // Sync mobile drawer nav active states
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-mnav') === viewId);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh Icons
    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 50);

    // If entering video player, start watermark animation
    if (viewId === 'video-player') {
        startWatermarkLoop();
    }
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function toggleMobileMenu(force) {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const btn = document.getElementById('hamburger-btn');
    if (!menu) return;

    const willOpen = (typeof force === 'boolean') ? force : !menu.classList.contains('open');

    menu.classList.toggle('open', willOpen);
    overlay?.classList.toggle('open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
    if (btn) btn.classList.toggle('active', willOpen);

    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 60);
}

function closeMobileMenu() {
    toggleMobileMenu(false);
}

function mobileGoTo(viewId) {
    closeMobileMenu();
    setTimeout(() => switchView(viewId), 120);
}

// SCROLL TO CATALOG HELPER
function scrollToCatalog() {
    // Ensure we are on the student store view so the catalog is visible
    switchView('student-store');
    setTimeout(() => {
        const el = document.getElementById('course-catalog-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
}

// GO TO CATEGORY (from footer / nav) - switches to store, filters, and scrolls
function goToCategory(category) {
    switchView('student-store');
    if (!document.getElementById('course-catalog-section')) return;
    // Activate matching tab
    const tabs = document.querySelectorAll('.category-tabs .tab-btn');
    tabs.forEach(btn => {
        btn.classList.toggle('active', (btn.getAttribute('data-cat') || 'all') === category);
    });
    // Render filtered / all courses
    if (category === 'all') {
        renderCourseCatalog(coursesData);
    } else {
        renderCourseCatalog(coursesData.filter(c => c.category === category));
    }
    setTimeout(() => {
        const el = document.getElementById('course-catalog-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
}

// RENDER COURSE CATALOG
function renderCourseCatalog(courses) {
    const grid = document.getElementById('courses-grid-container');
    if (!grid) return;

    const isEn = currentLang === 'en';
    const catText = c => isEn ? (c.categoryNameEn || c.categoryName) : c.categoryName;
    const titleText = c => isEn ? (c.titleEn || c.title) : c.title;
    const instructorLabel = isEn ? 'Instructor:' : 'المحاضر:';
    const watchLabel = isEn ? 'Watch Course' : 'مشاهدة الكورس';

    grid.innerHTML = courses.map(c => `
        <div class="course-card">
            <div class="course-thumb-box">
                <img src="${c.thumbnail}" alt="${titleText(c)}" class="course-thumb-img">
                <span class="drm-badge"><i data-lucide="shield-check"></i> ${c.drm}</span>
            </div>
            <div class="course-info">
                <span class="course-cat">${catText(c)}</span>
                <h3 class="course-title">${titleText(c)}</h3>
                <p class="instructor-name">${instructorLabel} ${c.instructor}</p>

                ${c.progress > 0 ? `
                    <div class="progress-bar-container" style="margin-bottom: 1rem;">
                        <div class="progress-bar-fill" style="width: ${c.progress}%;"></div>
                    </div>
                ` : ''}

                <div class="course-footer">
                    <span class="price-gold">${c.price}</span>
                    <button class="gold-btn-solid" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="playCourseVideo(${c.id})">
                        <i data-lucide="play-circle"></i> ${watchLabel}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

// FILTER COURSES BY CATEGORY
function filterCourses(category, el) {
    const tabs = document.querySelectorAll('.category-tabs .tab-btn');
    tabs.forEach(btn => {
        const isTarget = el ? btn === el : btn.getAttribute('data-cat') === category;
        btn.classList.toggle('active', isTarget);
    });

    if (category === 'all') {
        renderCourseCatalog(coursesData);
    } else {
        const filtered = coursesData.filter(c => c.category === category);
        renderCourseCatalog(filtered);
    }
}

/* ==========================================================================
   SECURITY FEATURE 1: DYNAMIC ANIMATED WATERMARK CANVAS ENGINE
   ========================================================================== */
function initDynamicWatermark() {
    const canvas = document.getElementById('watermarkCanvas');
    const wrapper = document.getElementById('video-wrapper');
    if (!canvas || !wrapper) return;

    // Resize canvas to match wrapper bounds
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;

    window.addEventListener('resize', () => {
        if (canvas && wrapper) {
            canvas.width = wrapper.clientWidth;
            canvas.height = wrapper.clientHeight;
        }
    });
}

function startWatermarkLoop() {
    const canvas = document.getElementById('watermarkCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function animate() {
        if (currentView !== 'video-player') return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update Position
        watermarkState.x += watermarkState.dx * (watermarkState.speed / 3);
        watermarkState.y += watermarkState.dy * (watermarkState.speed / 3);

        // Bounce Boundaries
        if (watermarkState.x <= 20 || watermarkState.x >= canvas.width - 240) {
            watermarkState.dx *= -1;
        }
        if (watermarkState.y <= 40 || watermarkState.y >= canvas.height - 40) {
            watermarkState.dy *= -1;
        }

        // Draw Watermark Box
        ctx.save();
        ctx.globalAlpha = watermarkState.opacity;
        ctx.font = 'bold 13px Cairo, sans-serif';
        ctx.fillStyle = '#FFE082';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 8;

        const textLine1 = `الطالب: ${studentUser.name} (${studentUser.phone})`;
        const textLine2 = `IP: ${studentUser.ip} | ${studentUser.email}`;

        ctx.fillText(textLine1, watermarkState.x, watermarkState.y);
        ctx.fillText(textLine2, watermarkState.x, watermarkState.y + 18);
        ctx.restore();

        watermarkAnimId = requestAnimationFrame(animate);
    }

    if (watermarkAnimId) cancelAnimationFrame(watermarkAnimId);
    watermarkAnimId = requestAnimationFrame(animate);
}

// SECURITY FEATURE 2: OBS / SCREEN RECORDER BLACKOUT TOGGLE
function toggleOBSProtection() {
    isOBSProtected = !isOBSProtected;
    const overlay = document.getElementById('obs-blackout-overlay');
    const btn = document.getElementById('obs-toggle-btn');
    
    if (isOBSProtected) {
        overlay.classList.add('active');
        if (btn) btn.textContent = 'إيقاف وضع اختبار حجب التسجيل';
    } else {
        overlay.classList.remove('active');
        if (btn) btn.textContent = 'اختبار كشف تسجيل الشاشة';
    }
}

// VIDEO CONTROLS LOGIC
function setupVideoPlayerControls() {
    const video = document.getElementById('main-course-video');
    const progressFill = document.getElementById('video-progress-fill');
    const timeDisplay = document.getElementById('time-display');

    if (!video) return;

    video.addEventListener('timeupdate', () => {
        if (video.duration) {
            const perc = (video.currentTime / video.duration) * 100;
            if (progressFill) progressFill.style.width = `${perc}%`;

            const curMins = Math.floor(video.currentTime / 60);
            const curSecs = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
            const durMins = Math.floor(video.duration / 60);
            const durSecs = Math.floor(video.duration % 60).toString().padStart(2, '0');

            if (timeDisplay) {
                timeDisplay.textContent = `${curMins}:${curSecs} / ${durMins}:${durSecs}`;
            }
        }
    });
}

function togglePlayPause() {
    const video = document.getElementById('main-course-video');
    const btn = document.getElementById('play-pause-btn');
    if (!video) return;

    if (video.paused) {
        video.play();
        if (btn) btn.innerHTML = `<i data-lucide="pause"></i>`;
    } else {
        video.pause();
        if (btn) btn.innerHTML = `<i data-lucide="play"></i>`;
    }
    if (window.lucide) lucide.createIcons();
}

function seekVideo(e) {
    const video = document.getElementById('main-course-video');
    const slider = e.currentTarget;
    if (!video || !slider) return;

    const rect = slider.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
}

function changePlaybackSpeed() {
    const video = document.getElementById('main-course-video');
    const btn = document.getElementById('speed-btn');
    if (!video || !btn) return;

    const speeds = [1.0, 1.25, 1.5, 2.0];
    let nextIdx = (speeds.indexOf(video.playbackRate) + 1) % speeds.length;
    video.playbackRate = speeds[nextIdx];
    btn.textContent = `${video.playbackRate}x`;
}

function toggleFullScreen() {
    const wrapper = document.getElementById('video-wrapper');
    if (!wrapper) return;
    if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(err => alert(`خطأ شاشة كاملة: ${err.message}`));
    } else {
        document.exitFullscreen();
    }
}

/* ==========================================================================
   ADMIN DASHBOARD ENGINE (Matching Image 2)
   ========================================================================== */
function switchAdminTab(el, tabId) {
    document.querySelectorAll('.admin-menu .menu-item').forEach(item => item.classList.remove('active'));
    el.classList.add('active');

    document.querySelectorAll('.admin-tab-pane').forEach(pane => pane.classList.remove('active'));
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');

    if (window.lucide) lucide.createIcons();
}

function revokeStudentSession(studentName) {
    if (confirm(i18n[currentLang].admRevConfirm(studentName))) {
        alert(i18n[currentLang].admRevAlert(studentName));
        refreshStudentActivity();
    }
}

function refreshStudentActivity() {
    const tbody = document.getElementById('student-activity-tbody');
    if (!tbody) return;

    // Simulate refreshed list
    tbody.innerHTML = `
        <tr>
            <td>
                <div class="user-cell">
                    <div class="avatar">BM</div>
                    <span>Prof. Bayan Mohamed</span>
                </div>
            </td>
            <td>Beginner of Student</td>
            <td><div class="tbl-progress"><div class="fill" style="width: 85%;"></div></div></td>
            <td>${i18n[currentLang].admStuNow}</td>
            <td>iPad Pro (185.220.101.42)</td>
            <td><span class="badge-active">Active</span></td>
            <td><button class="kick-btn" onclick="revokeStudentSession('Prof. Bayan Mohamed')">${i18n[currentLang].admStuKick}</button></td>
        </tr>
        <tr>
            <td>
                <div class="user-cell">
                    <div class="avatar">AM</div>
                    <span>أحمد محمد علي</span>
                </div>
            </td>
            <td>${i18n[currentLang].admStuCourseFinance}</td>
            <td><div class="tbl-progress"><div class="fill" style="width: 45%;"></div></div></td>
            <td>${i18n[currentLang].admStuAgo(2)}</td>
            <td>iPhone 15 Pro (185.220.101.42)</td>
            <td><span class="badge-active">Active</span></td>
            <td><button class="kick-btn" onclick="revokeStudentSession('أحمد محمد علي')">${i18n[currentLang].admStuKick}</button></td>
        </tr>
        <tr>
            <td>
                <div class="user-cell">
                    <div class="avatar">AH</div>
                    <span>Aarah Honte</span>
                </div>
            </td>
            <td>Completed Learner</td>
            <td><div class="tbl-progress"><div class="fill" style="width: 100%;"></div></div></td>
            <td>${i18n[currentLang].admStuAgo(18)}</td>
            <td>MacBook Air (94.120.44.11)</td>
            <td><span class="badge-completed">Completed</span></td>
            <td><button class="kick-btn" onclick="revokeStudentSession('Aarah Honte')">${i18n[currentLang].admStuKick}</button></td>
        </tr>
    `;
    if (window.lucide) lucide.createIcons();
}

// COURSE VIDEO PLAYER CONTROLLER
function playCourseVideo(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const videoEl = document.getElementById('main-course-video');
    const headerTitle = document.querySelector('.course-meta-title h2');
    const lessonTitle = document.querySelector('.lesson-info-card h3');
    const instructorTag = document.querySelector('.instructor-tag');

    if (videoEl) {
        if (course.videoUrl) {
            videoEl.src = course.videoUrl;
        } else {
            videoEl.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
        }
        videoEl.load();
        videoEl.play().catch(() => {});
    }

    if (headerTitle) headerTitle.textContent = `${course.title} - الدرس الأول`;
    if (lessonTitle) lessonTitle.textContent = `تفاصيل: ${course.title}`;
    if (instructorTag) instructorTag.textContent = `تقديم المحاضر: ${course.instructor}`;

    switchView('video-player');
}

// IPAD VIDEO UPLOAD HANDLER
let selectedVideoFile = null;

function triggerFilePicker() {
    const fileInput = document.getElementById('ipad-file-input');
    if (fileInput) fileInput.click();
}

function onFileSelected(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('selected-file-label');
    if (file && preview) {
        selectedVideoFile = file;
        const mb = (file.size / (1024 * 1024)).toFixed(1);
        preview.textContent = currentLang === 'en'
            ? `Selected file: ${file.name} (${mb} MB)`
            : `الملف المختار: ${file.name} (${mb} MB)`;
    }
}

function handleVideoUpload(e) {
    e.preventDefault();
    const titleInput = document.getElementById('upload-title');
    const title = titleInput ? titleInput.value : i18n[currentLang].admUpTitleDefault;
    const progressBox = document.getElementById('upload-progress-box');
    const fill = document.getElementById('upload-progress-fill');
    const statusText = document.getElementById('upload-status-text');
    const percText = document.getElementById('upload-perc-text');

    if (!progressBox || !fill) return;

    progressBox.style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        fill.style.width = `${progress}%`;
        percText.textContent = `${progress}%`;

        if (progress === 40) {
            statusText.textContent = i18n[currentLang].admUpStatus40;
        } else if (progress === 80) {
            statusText.textContent = i18n[currentLang].admUpStatus80;
        } else if (progress >= 100) {
            clearInterval(interval);
            statusText.textContent = i18n[currentLang].admUpStatusDone;
            
            setTimeout(() => {
                let videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
                if (selectedVideoFile) {
                    videoUrl = URL.createObjectURL(selectedVideoFile);
                }

                const newCourse = {
                    id: Date.now(),
                    title: title || (selectedVideoFile ? selectedVideoFile.name : i18n[currentLang].admUpNewTitle),
                    category: 'finance',
                    categoryName: i18n[currentLang].admUpNewCat,
                    instructor: 'أ. بيان محمد',
                    price: '350 ر.س',
                    rawPrice: 350,
                    progress: 0,
                    hours: 1,
                    lessonsCount: 1,
                    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
                    drm: 'VdoCipher DRM Encrypted',
                    videoUrl: videoUrl
                };

                coursesData.unshift(newCourse);
                renderCourseCatalog(coursesData);

                alert(`✨ تم رفع وتشفير الدرس ("${newCourse.title}") بنجاح!\nسيتم التوجيه الآن لمشغل الفيديو لتجربته.`);
                
                progressBox.style.display = 'none';
                fill.style.width = '0%';
                document.getElementById('ipad-upload-form')?.reset();
                selectedVideoFile = null;
                const preview = document.getElementById('selected-file-label');
                if (preview) preview.textContent = 'لم يتم اختيار ملف بعد';

                playCourseVideo(newCourse.id);
            }, 400);
        }
    }, 200);
}

// SECURITY WATERMARK SETTINGS UPDATER
function updateWatermarkSettings() {
    const speed = document.getElementById('wm-speed-range')?.value;
    const opacity = document.getElementById('wm-opacity-range')?.value;

    if (speed) watermarkState.speed = parseInt(speed);
    if (opacity) watermarkState.opacity = parseInt(opacity) / 100;
}

/* ==========================================================================
   MODALS: OTP AUTHENTICATION & MOYASAR PAYMENTS
   ========================================================================== */
function openOTPModal() {
    document.getElementById('otp-modal')?.classList.add('active');
}
function closeOTPModal() {
    document.getElementById('otp-modal')?.classList.remove('active');
}

function sendOTPCode() {
    const phone = document.getElementById('user-phone-input')?.value;
    if (!phone || phone.length < 8) {
        alert('الرجاء إدخال رقم جوال صحيح مكون من 9 أرقام');
        return;
    }
    document.getElementById('otp-step-1').style.display = 'none';
    document.getElementById('otp-step-2').style.display = 'block';
    alert(`تم إرسال رمز التحقق SMS التلقائي إلى الرقم: +966 ${phone}`);
}

function moveOTPFocus(el, idx) {
    if (el.value.length === 1 && idx < 4) {
        const nextInput = el.parentElement.children[idx];
        if (nextInput) nextInput.focus();
    }
}

function verifyOTPAndLogin() {
    isLogged = true;
    closeOTPModal();
    const userLabel = document.getElementById('user-display-name');
    if (userLabel) userLabel.textContent = studentUser.name;
    alert(`تم تسجيل دخولك بنجاح من جهازك: ${studentUser.device}`);
}

// MOYASAR PAYMENT MODAL
let activePayCourse = '';
let activePayPrice = 0;

function openMoyasarModal(courseTitle, price) {
    activePayCourse = courseTitle;
    activePayPrice = price;

    const titleEl = document.getElementById('pay-course-name');
    const priceEl = document.getElementById('pay-course-price');

    if (titleEl) titleEl.textContent = courseTitle;
    if (priceEl) priceEl.textContent = `${price} ر.س`;

    document.getElementById('moyasar-modal')?.classList.add('active');
}

function closeMoyasarModal() {
    document.getElementById('moyasar-modal')?.classList.remove('active');
}
// Close any open modal when clicking on the dimmed backdrop (outside the card)
document.addEventListener('click', (e) => {
    if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
        const backdrop = e.target;
        const isPayment = backdrop.id === 'moyasar-modal';
        const isOtp = backdrop.id === 'otp-modal';
        const isDevice = backdrop.id === 'device-modal';
        if (isPayment) closeMoyasarModal();
        if (isOtp) closeOTPModal();
        if (isDevice) closeDeviceModal();
    }
});
// Close open modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.getElementById('moyasar-modal')?.classList.contains('active')) {
            closeMoyasarModal();
        }
        if (document.getElementById('otp-modal')?.classList.contains('active')) {
            closeOTPModal();
        }
        if (document.getElementById('device-modal')?.classList.contains('active')) {
            closeDeviceModal();
        }
    }
});

function switchPayTab(method) {
    document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.querySelectorAll('.pay-pane').forEach(p => p.classList.remove('active'));
    const pane = document.getElementById(`pay-tab-${method}`);
    if (pane) pane.classList.add('active');
}

function processMoyasarPayment() {
    const btn = document.getElementById('submit-pay-btn');
    if (btn) btn.innerHTML = `<span>جاري معالجة الطلب عبر Moyasar API...</span>`;

    setTimeout(() => {
        closeMoyasarModal();
        if (btn) btn.innerHTML = `<span>إتمام الدفع والتفعيل التلقائي الفوري</span>`;
        
        alert(`✨ تمت عملية الدفع بنجاح عبر بوابة Moyasar!\nتم تفعيل كورس (${activePayCourse}) لحسابك تلقائياً وبدء التشفير.`);
        switchView('video-player');
    }, 1500);
}

// DEVICE GUARD MODAL
function showDeviceGuardModal() {
    document.getElementById('device-modal')?.classList.add('active');
}
function closeDeviceModal() {
    document.getElementById('device-modal')?.classList.remove('active');
}

/* ==========================================================================
   PROFESSIONAL AI ASSISTANT CHATBOT (Bilingual AR / EN)
   Virtual assistant for Prof. Bayan Mohamed Academy.
   ========================================================================== */

// Quick reply chips (bilingual)
const chatQuickReplies = {
    ar: ['المقررات المتاحة', 'طريقة الدفع', 'حماية المحتوى', 'كيف أشترك؟'],
    en: ['Available courses', 'Payment method', 'Content protection', 'How to subscribe?']
};

function initChatTranslator() {
    // Re-translate dynamically created chat elements on language change
    if (typeof window !== 'undefined') {
        window.addEventListener('storage', () => {});
    }
}

function toggleChat(force) {
    const panel = document.getElementById('chat-panel');
    const launcher = document.querySelector('.chat-launcher');
    if (!panel) return;

    const willOpen = (typeof force === 'boolean') ? force : !panel.classList.contains('open');

    if (willOpen) {
        panel.classList.add('open');
        launcher?.classList.add('open-mode');
        const badge = launcher?.querySelector('.launcher-badge');
        if (badge) badge.style.display = 'none';

        // First open: initialize conversation
        if (!panel.dataset.init) {
            panel.dataset.init = '1';
            initChat();
        }
        setTimeout(() => {
            const input = document.getElementById('chat-input');
            if (input) input.focus();
        }, 350);
    } else {
        panel.classList.remove('open');
        launcher?.classList.remove('open-mode');
    }
    if (window.lucide) lucide.createIcons();
}

function initChat() {
    const body = document.getElementById('chat-body');
    if (!body) return;
    body.innerHTML = '';
    showBotTyping(() => {
        addBotMessage(i18n[currentLang].chatGreeting);
    });
    renderQuickReplies();
}

function renderQuickReplies() {
    const container = document.getElementById('chat-quick-replies');
    if (!container) return;
    const chips = chatQuickReplies[currentLang] || [];
    container.innerHTML = chips.map(c => `<button class="qr-chip" onclick="handleQuickReply('${c}')">${c}</button>`).join('');
}

function handleQuickReply(text) {
    addUserMessage(text);
    processChat(text);
}

function addUserMessage(text) {
    const body = document.getElementById('chat-body');
    if (!body) return;
    const msg = document.createElement('div');
    msg.className = 'chat-msg user';
    msg.textContent = text;
    body.appendChild(msg);
    scrollChatBottom();
}

function addBotMessage(html) {
    const body = document.getElementById('chat-body');
    if (!body) return;
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.innerHTML = html;
    body.appendChild(msg);
    scrollChatBottom();
}

function showBotTyping(callback) {
    const body = document.getElementById('chat-body');
    if (!body) return;
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot';
    typing.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
    body.appendChild(typing);
    scrollChatBottom();
    setTimeout(() => {
        typing.remove();
        if (callback) callback();
    }, 900);
}

function scrollChatBottom() {
    const body = document.getElementById('chat-body');
    if (body) body.scrollTop = body.scrollHeight;
}

function handleChatKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendChatMessage();
    }
    const input = document.getElementById('chat-input');
    if (input) {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    input.style.height = 'auto';
    addUserMessage(text);
    processChat(text);
}

/* ===== BILINGUAL CHATBOT KNOWLEDGE / ENGINE ===== */
const chatKB = {
    ar: {
        courses: {
            keywords: ['مقرر', 'مقررات', 'كورس', 'كورسات', 'دورات', 'دروس', 'مواد', 'مادة', 'تعليم', 'محاضره', 'محاضرة', 'درس', 'classes', 'courses', 'lecture', 'lesson'],
            reply: '📚 <strong>المقررات المتاحة في الأكاديمية:</strong>\n\n• التحليل المالي والمحاسبة الاستراتيجية (350 ر.س)\n• إدارة الأعمال الدولية والتخطيط الاستراتيجي (420 ر.س)\n• التسويق الرقمي وبناء العلامة التجارية (290 ر.س)\n• إدارة الموارد البشرية والقيادة التنفيذية (380 ر.س)\n• سلاسل الإمداد واللوجستيات (310 ر.س)\n• مبادئ الاقتصاد للمدراء (340 ر.س)\n\nيمكنك تصفحها من قسم <strong>المقررات الدراسية</strong> مباشرة.'
        },
        payment: {
            keywords: ['دفع', 'الدفع', 'سعر', 'الاسعار', 'أسعار', 'تكلفة', 'اشتراك', 'مدى', 'فيزا', 'apple', 'تحويل', 'باي', 'دفع', 'payment', 'price', 'cost', 'moyasar'],
            reply: '💳 <strong>طريقة الدفع:</strong>\n\nنوفر دفعاً فورياً وآمناً عبر بوابة <strong>Moyasar</strong> وندعم:\n\n• مدى (Mada)\n• Apple Pay\n• التحويل البنكي (الراجحي)\n\nبمجرد إتمام الدفع يتم <strong>تفعيل الكورس تلقائياً وفوراً</strong> على حسابك. هل تريد التفاصيل؟'
        },
        subscribe: {
            keywords: ['اشترك', 'اشتراك', 'كيف اشترك', 'سجل', 'تسجيل', 'انضم', 'عضوية', 'تحتاج حساب', 'subscribe', 'signup', 'join'],
            reply: '✅ <strong>للتسجيل والاشتراك:</strong>\n\n1. اضغط على زر <strong>"تسجيل الدخول / OTP"</strong> أعلى الصفحة\n2. أدخل رقم جوالك لاستلام رمز التحقق (SMS)\n3. بعد تفعيل الحساب، انتقل إلى المقرر الذي تريده واضغط <strong>اشتراك / مشاهدة</strong>\n4. أكمل الدفع عبر Moyasar وسيُفعّل الكورس فوراً 🚀'
        },
        security: {
            keywords: ['حما', 'تشفير', 'حماية', 'drm', 'تسجيل', 'تصوير', 'علامة مائية', 'سرقة', 'حد جهاز', 'جهاز واحد', 'اشتراك مزدوج', 'security', 'protection', 'drm', 'watermark', 'record'],
            reply: '🛡️ <strong>حماية المحتوى:</strong>\n\n• تشفير <strong>HLS + DRM</strong> عبر VdoCipher لمنع التحميل (IDM)\n• <strong>علامة مائية ديناميكية</strong> متحركة تعرض اسمك وجوالك و IP أثناء المشاهدة\n• <strong>شاشة سوداء</strong> تلقائية عند كشف محاولة تسجيل الشاشة (OBS)\n• تسجيل الدخول <strong>بجهاز واحد</strong> فقط لمنع مشاركة الحساب\n\nجميع الأجهزة المتزامنة تُراقب بشكل لحظي.'
        },
        contact: {
            keywords: ['تواصل', 'اتصال', 'اتصل', 'رقم', 'جوال', 'هاتف', 'واتساب', 'ايميل', 'بريد', 'دعم', 'فريق', 'contact', 'phone', 'email', 'whatsapp', 'support', 'reach'],
            reply: '📞 <strong>طرق التواصل مع الأكاديمية:</strong>\n\n• واتساب: <strong dir="ltr">+966 56 005 6445</strong>\n• البريد: <strong>support@bayan-mohamed.edu.sa</strong>\n• الموقع: الرياض، السعودية\n• الدعم الفني متاح 24/7\n\nيمكنك الضغط على زر الواتساب الأخضر أسفل يسار الشاشة للتواصل المباشر.'
        },
        about: {
            keywords: ['بيان', 'من هي', 'عني', 'عن الأكاديمية', 'الأكاديمية', 'منصة', 'الاستاذة', 'محمد', 'مين', 'about', 'who is', 'academy', 'platform'],
            reply: '🎓 <strong>عن أكاديمية بيان محمد:</strong>\n\nمنصة تعليمية فاخرة تقدم شروحات مبسطة ومحمية للتخصصات الإدارية وإدارة الأعمال لطلاب الجامعات. الأستاذة بيان محمد تقدم محتوى غني في التحليل المالي، التسويق، التخطيط الاستراتيجي، والموارد البشرية بأسلوب عملي يربط النظرية بتطبيقات السوق.'
        },
        identity: {
            keywords: ['من انت', 'من انتي', 'اسمك', 'اسمك ايه', 'مين انت', 'ازايك', 'انت مين', 'مين انتي', 'شنو انت', 'انت شو', 'ما انت', 'who are you', 'what is your name', 'your name', 'what are you', 'مساعد', 'مساعدة', 'بوت', 'الاسم', 'عرف بنفسك', 'تعرف بنفسك'],
            reply: '👋 أنا <strong>المساعد الافتراضي الذكي للأستاذة أ. بيان محمد</strong>.\n\nصُنعت لمساعدتك في كل ما يخص الأكاديمية — من المقررات والأسعار إلى الاشتراك والدفع وحماية المحتوى. أنا هنا للإجابة على أي سؤال أو توجيهك للقسم الصحيح في أي وقت. 💛'
        },
        greeting: {
            keywords: ['مرحبا', 'اهلا', 'السلام', 'هاي', 'هلا', 'صباح', 'مساء', 'سلام', 'hello', 'hi', 'hey', 'مرحباً', 'أهلاً'],
            reply: 'أهلاً بك 🌟 يسعدني مساعدتك! يمكنك سؤالي عن المقررات، الأسعار، طريقة الاشتراك، الدفع، أو حماية المحتوى. ماذا تريد أن تعرف؟'
        },
        thanks: {
            keywords: ['شكرا', 'ممتاز', 'يعطيك', 'تسلم', 'thank', 'thanks', 'great', 'ابشر'],
            reply: 'العفو! 😊 سعيد بمساعدتك. إن كان لديك أي استفسار آخر فأنا هنا لخدمتك. بالتوفيق في مسيرتك التعليمية!'
        },
        default: '🤔 لم أفهم طلبك تماماً. يمكنني مساعدتك في:\n\n• 📚 المقررات المتاحة والأسعار\n• 💳 طريقة الدفع والاشتراك\n• 🛡️ حماية المحتوى والتشفير\n• 📞 التواصل مع الأكاديمية\n\nجرّب صياغة سؤالك بطريقة أخرى، أو استخدم الاختصارات أعلاه.'
    },
    en: {
        courses: {
            keywords: ['course', 'courses', 'subject', 'subjects', 'classes', 'curriculum', 'curriculums', 'learn', 'lesson', 'lessons'],
            reply: '📚 <strong>Courses available at the Academy:</strong>\n\n• Financial Analysis & Strategic Accounting (SAR 350)\n• International Business & Strategic Planning (SAR 420)\n• Digital Marketing & Brand Building (SAR 290)\n• Human Resources & Executive Leadership (SAR 380)\n• Supply Chain & Effective Logistics (SAR 310)\n• Principles of Economics for Managers (SAR 340)\n\nYou can browse them directly in the <strong>Courses</strong> section.'
        },
        payment: {
            keywords: ['payment', 'pay', 'price', 'prices', 'cost', 'subscribe', 'mada', 'visa', 'apple', 'transfer', 'bank', 'moyasar'],
            reply: '💳 <strong>Payment Method:</strong>\n\nWe offer fast and secure payment through <strong>Moyasar</strong> gateway, supporting:\n\n• Mada\n• Apple Pay\n• Bank transfer (Al Rajhi)\n\nOnce payment completes, your course is <strong>activated instantly</strong> on your account.'
        },
        subscribe: {
            keywords: ['signup', 'sign up', 'register', 'join', 'enroll', 'enrolment', 'account', 'how to subscribe'],
            reply: '✅ <strong>To sign up & subscribe:</strong>\n\n1. Click the <strong>"Sign in / OTP"</strong> button at the top\n2. Enter your phone number to receive an SMS code\n3. After activation, go to your desired course and click <strong>Subscribe / Watch</strong>\n4. Complete payment via Moyasar and the course activates instantly 🚀'
        },
        security: {
            keywords: ['security', 'protection', 'drm', 'encryption', 'watermark', 'record', 'recording', 'download', 'screen capture', 'single device', 'device limit'],
            reply: '🛡️ <strong>Content Protection:</strong>\n\n• <strong>HLS + DRM</strong> encryption via VdoCipher prevents downloading (IDM)\n• <strong>Dynamic watermarks</strong> showing your name, phone & IP during playback\n• <strong>Automatic black screen</strong> when screen recording (OBS) is detected\n• <strong>Single-device</strong> login only to prevent account sharing\n\nAll concurrent sessions are monitored in real time.'
        },
        contact: {
            keywords: ['contact', 'phone', 'email', 'whatsapp', 'support', 'reach', 'talk', 'number'],
            reply: '📞 <strong>Ways to contact the Academy:</strong>\n\n• WhatsApp: <strong dir="ltr">+966 56 005 6445</strong>\n• Email: <strong>support@bayan-mohamed.edu.sa</strong>\n• Location: Riyadh, Saudi Arabia\n• 24/7 technical support\n\nYou can also click the green WhatsApp button at the bottom left of the screen.'
        },
        about: {
            keywords: ['bayan', 'who is', 'about', 'academy', 'platform', 'professor', 'teacher', 'instructor'],
            reply: '🎓 <strong>About Bayan Mohamed Academy:</strong>\n\nA premium education platform offering simplified, protected explanations for university business students. Prof. Bayan Mohamed delivers rich content in financial analysis, marketing, strategic planning, and HR — bridging theory with real market applications.'
        },
        identity: {
            keywords: ['who are you', 'your name', 'what is your name', 'who r u', 'what are you', 'who is this', 'assistant', 'bot', 'help me', 'introduce yourself', 'tell me about yourself'],
            reply: '👋 I am the <strong>smart virtual assistant of Prof. Bayan Mohamed</strong>.\n\nI\'m here to help you with everything about the Academy — from courses and pricing to subscriptions, payments, and content protection. Ask me anything, and I\'ll guide you to the right place anytime. 💛'
        },
        greeting: {
            keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'greetings'],
            reply: 'Hello there 🌟 Glad to help! Ask me about courses, pricing, how to subscribe, payment, or content protection. What would you like to know?'
        },
        thanks: {
            keywords: ['thank', 'thanks', 'great', 'awesome', 'perfect', 'nice'],
            reply: 'You\'re welcome! 😊 Happy to help. If you have any other questions, I\'m here for you. Best of luck in your learning journey!'
        },
        default: '🤔 I didn\'t quite understand. I can help you with:\n\n• 📚 Available courses & pricing\n• 💳 Payment & subscription\n• 🛡️ Content protection & encryption\n• 📞 Contacting the Academy\n\nPlease rephrase your question, or use the shortcuts above.'
    }
};

// Normalize text for smart matching (Arabic diacritics, alef variants, taa marbuta, yaa, punctuation)
function normalizeText(str) {
    return String(str || '')
        .toLowerCase()
        .replace(/[\u064B-\u0652\u0670]/g, '')        // remove diacritics/tashkeel
        .replace(/[أإآا]/g, 'ا')                       // normalize alef
        .replace(/ة/g, 'ه')                            // taa marbuta -> haa
        .replace(/[يى]/g, 'ي')                         // normalize yaa
        .replace(/ؤ/g, 'و')                            // waw with hamza
        .replace(/ئ/g, 'ي')                            // yaa with hamza
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')             // strip punctuation/emoji, keep letters+numbers
        .replace(/\s+/g, ' ')
        .trim();
}

function processChat(userText) {
    const norm = normalizeText(userText);
    const kb = chatKB[currentLang];

    // Score-based matching: longer keywords weigh more to avoid generic false positives.
    // Order matters for ties; run identity first so "مساعد" style self-intros are caught.
    const topics = ['identity', 'thanks', 'greeting', 'subscribe', 'payment', 'security', 'contact', 'courses', 'about'];

    let bestTopic = null;
    let bestScore = 0;

    if (norm) {
        for (const t of topics) {
            const topic = kb[t];
            if (!topic || !topic.keywords) continue;
            let score = 0;
            for (const k of topic.keywords) {
                const nk = normalizeText(k);
                if (!nk) continue;
                if (norm.includes(nk)) score += Math.min(3, nk.length); // longer keyword = stronger signal
            }
            if (score > bestScore) {
                bestScore = score;
                bestTopic = t;
            }
        }
    }

    // Smart fallback: partial/weak match -> greeting; no confident match -> default help menu
    if (!norm || bestScore < 2) {
        const fallback = bestScore >= 1 && bestTopic ? kb[bestTopic].reply : kb.default;
        showBotTyping(() => addBotMessage(fallback));
        return;
    }

    const reply = kb[bestTopic].reply;
    showBotTyping(() => addBotMessage(reply));
}

// Language switcher current-lang helper (called from HTML)
function setLanguage(lang) {
    applyLanguage(lang);
}

