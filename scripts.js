const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for dark mode preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        body.classList.replace('bg-gray-100', 'bg-gray-900');
        body.classList.replace('text-gray-800', 'text-gray-100');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('bg-gray-900', 'bg-gray-100');
        body.classList.replace('text-gray-100', 'text-gray-800');
        localStorage.setItem('theme', 'light');
    }
});
