const showBtn = document.getElementById('js-show-btn');
const modal = document.getElementById('js-modal');
const closeBtn = document.getElementById('js-close-btn');
const submitBtn = document.getElementById('js-submit-btn');
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

function renderList(resolvedData) {
    const ul = document.getElementById('js-ul');
    const fragment = document.createDocumentFragment();
    for (const item of resolvedData) {
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

async function init(num, text) {
    renderLoading();
    let listData;
    try {
        console.log(num, text);
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

showBtn.addEventListener('click', () => {
    modal.classList.add('show');
    showBtn.classList.add('hide');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    showBtn.classList.remove('hide');
});

submitBtn.addEventListener('click', () => {
    const inputNumber = document.getElementById('js-input-number').value;
    const inputText = document.getElementById('js-input-text').value;
    if (inputNumber == '' || inputText == '') {
        alert('未入力のフォームがあります');
    } else {
        init(inputNumber, inputText);
        document.getElementById('js-form').reset();
        modal.classList.remove('show');
    }
});
