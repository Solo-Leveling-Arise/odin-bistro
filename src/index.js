import './style.css';
import {clearContent, toggleTabColor} from './DOM_utilities.js';

import loadHomePage from './home-page/home-page-content.js';
import loadMenuPage from './menu-page/menu-page-content.js';
import loadAboutUsPage from './about-us-page/about-us-page-content.js';

const home = document.querySelector('.home.tab');
const menu = document.querySelector('.menu.tab');
const aboutUs = document.querySelector('.about-us.tab');

const handleTabClick = (tab, loadPage) => {
    clearContent();
    loadPage();
    toggleTabColor(tab);
};

window.onload = () => {  
    handleTabClick(home, loadHomePage);
};

const tabConfigs = [
    {tab: home, loadPage: loadHomePage},
    {tab: menu, loadPage: loadMenuPage},
    {tab: aboutUs, loadPage: loadAboutUsPage},
];

tabConfigs.forEach( ( {tab, loadPage} ) => {
    tab.addEventListener('click', () => {
        handleTabClick(tab, loadPage);
    });
});
