import './home-page-style.css';

const loadHomePage = () => {
    const content = document.querySelector('#content');
    
    let backgroundBorder = document.createElement('div');
    backgroundBorder.classList.add('background-border');

    let homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    let title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'Welcome to The Odin Bistro';

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = 'Where Gods fullfill their gluttonous desires.';

    homeContent.appendChild(title);
    homeContent.appendChild(description);

    content.appendChild(backgroundBorder);
    content.appendChild(homeContent);
    content.appendChild(backgroundBorder.cloneNode(true));
};

export default loadHomePage;