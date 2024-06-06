import './about-us-page-style.css';

const loadAboutUsPage = () => {
    const content = document.querySelector('#content');

    let backgroundBorder = document.createElement('div');
    backgroundBorder.classList.add('background-border');

    let aboutMe = document.createElement('div');
    aboutMe.classList.add('about-me');
    aboutMe.innerHTML = '<div>A small project by <a target=_blank class = "github" href="https://github.com/SKjustSK">SKjustSK</a></div>';

    content.appendChild(backgroundBorder);
    content.appendChild(aboutMe);
    content.appendChild(backgroundBorder.cloneNode(true));
}

export default loadAboutUsPage;