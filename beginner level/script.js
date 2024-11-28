// 1. Dynamic Greeting
function showGreeting() {
    const greetingElement = document.createElement('p');
    const currentHour = new Date().getHours();
    let greeting = "Hello";

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    greetingElement.textContent = `${greeting}! Welcome to my portfolio.`;
    document.querySelector('header').appendChild(greetingElement);
}
showGreeting();

// 2. Skills Filter
document.addEventListener('DOMContentLoaded', () => {
    const skillsList = document.querySelector('#skills ul');
    const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL', 'React'];
    const searchInput = document.createElement('input');

    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search Skills...');
    searchInput.style.marginBottom = '10px';
    skillsList.before(searchInput);

    function updateSkills(filter = '') {
        skillsList.innerHTML = '';
        skills
            .filter(skill => skill.toLowerCase().includes(filter.toLowerCase()))
            .forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
    }

    searchInput.addEventListener('input', () => {
        updateSkills(searchInput.value);
    });

    updateSkills(); // Initialize skills list
});

// 3. Smooth Scroll to Section
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Remove the '#' from href
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// 4. Theme Toggle
const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Toggle Dark Mode';
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.bottom = '20px';
themeToggleButton.style.right = '20px';
themeToggleButton.style.padding = '10px 15px';
themeToggleButton.style.backgroundColor = '#007BFF';
themeToggleButton.style.color = '#fff';
themeToggleButton.style.border = 'none';
themeToggleButton.style.borderRadius = '5px';
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
