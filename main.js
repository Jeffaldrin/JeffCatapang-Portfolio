document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const projects = [
    {
        title: "E-Commerce Website",
        description: "A responsive online store built using HTML, CSS, and JavaScript. It features shopping cart functionality and a dynamic product display.",
    },
    {
        title: "Weather App",
        description: "A web application that displays real-time weather information. It uses a third-party API to fetch data.",
    },
    {
        title: "To-Do List App",
        description: "A simple and user-friendly to-do list app that allows users to add, edit, and delete tasks. The data is saved in local storage.",
    }
];

const projectContainer = document.querySelector('.projects');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    card.appendChild(title);
    card.appendChild(description);
    projectContainer.appendChild(card);
});