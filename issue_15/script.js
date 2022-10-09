const showButton = document.getElementById('js-show-btn');
const modal = document.getElementById('js-modal');
const closeButton = document.getElementById('js-close-btn');
const submitButton = document.getElementById('js-submit-btn');
const endpoint = 'https://api.json-generator.com/templates/NluaaELSLhVe/data?access_token=zjrk7bmqgvptk4dcs8p8bhs5n9sk7m1ecs65gvq4';


function renderLoading() {
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    document.getElementById('js-loading').appendChild(loadingImg);
}

function removeLoading() {
    document.getElementById('js-loading').remove();
}

function renderList(listDataGroup) {
    const ul = document.getElementById('js-ul');
    const fragment = document.createDocumentFragment();
    for (const item of listDataGroup) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.href = item.a;
        a.textContent = item.text;
        img.src = item.img;
        img.alt = item.alt;

        fragment.appendChild(li).appendChild(a).appendChild(img);
    }
    ul.appendChild(fragment);
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

async function init(number, text) {
    renderLoading();
    let listData;
    try {
        console.log(number, text);
        listData = await fetchData();
        if (!listData) {
            return;
        }
        renderList(listData);
    } catch (error) {
        console.error(error);
    } finally {
        removeLoading();
    }
}

showButton.addEventListener('click', () => {
    modal.classList.add('show');
    showButton.classList.add('hide');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
    showButton.classList.remove('hide');
});

submitButton.addEventListener('click', () => {
    const inputNumber = document.getElementById('js-input-number').value.trim();
    const inputText = document.getElementById('js-input-text').value.trim();
    if (inputNumber && inputText) {
        init(inputNumber, inputText);
        document.getElementById('js-form').reset();
        modal.classList.remove('show');
    } else {
        alert('未入力のフォームがあります');
    }
});
