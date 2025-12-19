// click تحديد الزر
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Interactivity script
// إضافة مستمع للحدث (Event Listener)
toggleButton.addEventListener('click', () => {
    // تبديل كلاس الوضع الليلي
    body.classList.toggle('dark-mode');

    // تغيير نص الزر بناءً على الوضع الحالي
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
});
