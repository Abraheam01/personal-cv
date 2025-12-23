// --- تبديل الوضع الليلي (Dark Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

// التحقق من الوضع المحفوظ سابقاً
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // تغيير الأيقونة
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// --- تأثير ظهور العناصر عند التمرير (Scroll Reveal) ---
const observerOptions = {
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- تأثير الكتابة التلقائية (Typing Effect) ---
const textElement = document.querySelector('.typing-text');
// حركة وميض المؤشر
setInterval(() => {
    textElement.style.borderRight = textElement.style.borderRight === 'transparent' ? '2px solid var(--main-color)' : 'transparent';
}, 500);