const ul = document.getElementById('js-ul');
const endpoint = 'https://api.json-generator.com/templates/5-2NhpTqkaV4/data?access_token=mihb6ib9irdyvy1iwbqg804flfdpm6kxdwtoum6x';

function createNewElements(tagName, className) {
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    return newElement;
}

function displayErrorMessage() {
    const errorMessage = createNewElements('p', 'error-message');
    errorMessage.textContent = 'Communication failed on the server side.';
    ul.appendChild(errorMessage);
}

async function fetchData() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            console.error(`${response.status}:${response.statusText}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error);
    }
}


const renderTabs = (tabElements) => {
    const fragment = new DocumentFragment();
    for (const tabElement of tabElements) {
        const tabList = createNewElements('li', 'tab-list');
        tabList.textContent = tabElement.category;
        fragment.appendChild(tabList);
    }
    ul.appendChild(fragment);
}

async function init() {
    let res;
    try {
        res = await fetchData();
        if (!res) {
            displayErrorMessage();
        }
    } catch (error) {
        console.error(error);
    }
    renderTabs(res);
}
init();
