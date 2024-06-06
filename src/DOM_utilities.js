const clearContent = () => {
    let content = document.querySelector('#content');
    content.innerHTML = "";
};

const toggleTabColor = (current_tab) => {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('tab-selected');
    }); 
    current_tab.classList.add('tab-selected');
}

export {clearContent, toggleTabColor};