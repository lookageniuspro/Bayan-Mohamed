/* ==========================================================================
   BAYAN MOHAMED ACADEMY - INTERACTIVE CORE ENGINE
   Dynamic Watermark Canvas, DRM Video Protection, Moyasar Webhook Simulator,
   Single Device Guard, and iPad Admin Command Center.
   ========================================================================== */

// --- GLOBAL STATE ---
let currentView = 'student-store';
let isLogged = false;
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
        category: 'finance',
        categoryName: 'التحليل المالي',
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
        category: 'management',
        categoryName: 'إدارة الأعمال',
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
        category: 'marketing',
        categoryName: 'التسويق الرقمي',
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
        category: 'hr',
        categoryName: 'الموارد البشرية',
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
        category: 'management',
        categoryName: 'إدارة الأعمال',
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
        category: 'finance',
        categoryName: 'التحليل المالي',
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
});

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

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh Icons
    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 50);

    // If entering video player, start watermark animation
    if (viewId === 'video-player') {
        startWatermarkLoop();
    }
}

// SCROLL TO CATALOG HELPER
function scrollToCatalog() {
    const el = document.getElementById('course-catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// RENDER COURSE CATALOG
function renderCourseCatalog(courses) {
    const grid = document.getElementById('courses-grid-container');
    if (!grid) return;

    grid.innerHTML = courses.map(c => `
        <div class="course-card">
            <div class="course-thumb-box">
                <img src="${c.thumbnail}" alt="${c.title}" class="course-thumb-img">
                <span class="drm-badge"><i data-lucide="shield-check"></i> ${c.drm}</span>
            </div>
            <div class="course-info">
                <span class="course-cat">${c.categoryName}</span>
                <h3 class="course-title">${c.title}</h3>
                <p class="instructor-name">المحاضر: ${c.instructor}</p>

                ${c.progress > 0 ? `
                    <div class="progress-bar-container" style="margin-bottom: 1rem;">
                        <div class="progress-bar-fill" style="width: ${c.progress}%;"></div>
                    </div>
                ` : ''}

                <div class="course-footer">
                    <span class="price-gold">${c.price}</span>
                    <button class="gold-btn-solid" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="playCourseVideo(${c.id})">
                        <i data-lucide="play-circle"></i> مشاهدة الكورس
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

// FILTER COURSES BY CATEGORY
function filterCourses(category) {
    document.querySelectorAll('.category-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

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
    if (confirm(`هل أنت تأكد من رغبتك في طرد جهاز الطالب (${studentName}) وتسجيل خروجه فوراً؟`)) {
        alert(`تم إلغاء Token وتأمين حساب ${studentName} بنجاح.`);
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
                    <div class="avatar">AS</div>
                    <span>Admin Sarah</span>
                </div>
            </td>
            <td>Beginner of Student</td>
            <td><div class="tbl-progress"><div class="fill" style="width: 85%;"></div></div></td>
            <td>الان (مباشر)</td>
            <td>iPad Pro (185.220.101.42)</td>
            <td><span class="badge-active">Active</span></td>
            <td><button class="kick-btn" onclick="revokeStudentSession('Admin Sarah')">طرد الجهاز</button></td>
        </tr>
        <tr>
            <td>
                <div class="user-cell">
                    <div class="avatar">AM</div>
                    <span>أحمد محمد علي</span>
                </div>
            </td>
            <td>التحليل المالي والمحاسبة</td>
            <td><div class="tbl-progress"><div class="fill" style="width: 45%;"></div></div></td>
            <td>منذ 2 دقيقة</td>
            <td>iPhone 15 Pro (185.220.101.42)</td>
            <td><span class="badge-active">Active</span></td>
            <td><button class="kick-btn" onclick="revokeStudentSession('أحمد محمد علي')">طرد الجهاز</button></td>
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
            <td>منذ 18 دقيقة</td>
            <td>MacBook Air (94.120.44.11)</td>
            <td><span class="badge-completed">Completed</span></td>
            <td><button class="kick-btn" onclick="revokeStudentSession('Aarah Honte')">طرد الجهاز</button></td>
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
        preview.textContent = `الملف المختار: ${file.name} (${(file.size / (1024 * 1024)).toFixed(1)} MB)`;
    }
}

function handleVideoUpload(e) {
    e.preventDefault();
    const titleInput = document.getElementById('upload-title');
    const title = titleInput ? titleInput.value : 'فيديو تعليمي جديد';
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
            statusText.textContent = 'جاري توليد مفاتيح التشفير HLS + DRM v2...';
        } else if (progress === 80) {
            statusText.textContent = 'جاري المعالجة وإتاحة البث الفوري...';
        } else if (progress >= 100) {
            clearInterval(interval);
            statusText.textContent = 'تم تشفير ونشر الفيديو بنجاح!';
            
            setTimeout(() => {
                let videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
                if (selectedVideoFile) {
                    videoUrl = URL.createObjectURL(selectedVideoFile);
                }

                const newCourse = {
                    id: Date.now(),
                    title: title || (selectedVideoFile ? selectedVideoFile.name : 'فيديو مرفوع جديد'),
                    category: 'finance',
                    categoryName: 'مرفوع حديثاً (DRM)',
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
