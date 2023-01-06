const showButton = document.getElementById('js-show-btn');
const modal = document.getElementById('js-modal');
const closeButton = document.getElementById('js-close-btn');
const submitButton = document.getElementById('js-submit-btn');
const endpoint = 'https://api.json-generator.com/templates/NluaaELSLhVe/data?access_token=zjrk7bmqgvptk4dcs8p8bhs5n9sk7m1ecs65gvq4';


function renderLoading() {
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    loadingImg.classList.add('centering');
    document.getElementById('js-loading').appendChild(loadingImg);
}

function removeLoading() {
    document.getElementById('js-loading').remove();
}

function toggleHideClassOfmodal() {
    modal.classList.toggle('hide');
}

function renderList(listData) {
    const ul = document.getElementById('js-ul');
    const fragment = document.createDocumentFragment();
    for (const item of listData) {
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
    let resultOfFetchData;
    try {
        console.log(number, text);
        resultOfFetchData = await fetchData();
        if (!resultOfFetchData) {
            return;
        }
        renderList(resultOfFetchData);
    } catch (error) {
        console.error(error);
    } finally {
        removeLoading();
    }
}

showButton.addEventListener('click', () => {
    toggleHideClassOfmodal();
    showButton.classList.add('hide');
});

closeButton.addEventListener('click', () => {
    toggleHideClassOfmodal();
    showButton.classList.remove('hide');
});

submitButton.addEventListener('click', () => {
    const trimmedInputNumber = document.getElementById('js-input-number').value.trim();
    const trimmedInputText = document.getElementById('js-input-text').value.trim();
    if (trimmedInputNumber && trimmedInputText) {
        init(trimmedInputNumber, trimmedInputText);
        toggleHideClassOfmodal();
    } else {
        alert('未入力のフォームがあります');
    }
});
