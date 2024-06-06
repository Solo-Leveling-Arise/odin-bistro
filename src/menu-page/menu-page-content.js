import './menu-page-style.css';

const loadMenuPage = () => {
    const content = document.querySelector('#content');

    let backgroundBorder = document.createElement('div');
    backgroundBorder.classList.add('background-border');

    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let scp7599 = document.createElement('div');
    scp7599.classList.add('scp7599');

    let foodName = document.createElement('div');
    foodName.classList.add('food-name');
    foodName.innerText = 'Egg of Eggcellence';

    let foodDescription = document.createElement('div');
    foodDescription.classList.add('food-description');
    foodDescription.innerText = 'Only Divinities can consume this amalgamation of flesh';

    menuItem.appendChild(scp7599);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    content.appendChild(backgroundBorder);
    content.appendChild(menuItem);
    content.appendChild(backgroundBorder.cloneNode(true));
}

export default loadMenuPage;