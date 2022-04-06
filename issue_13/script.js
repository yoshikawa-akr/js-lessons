const modalBtnWrapper = document.getElementById('js-modal-btn__wrapper');
const modalBtn = document.getElementById('js-modal-btn');
const modalWrapper = document.getElementById('js-modal__wrapper');
const modalBack = document.getElementById('js-modal-back');
const closeBtn = document.getElementById('js-close-btn');
const requestBtn = document.getElementById('js-request-btn');
const modalButtonElements = [modalBtn, modalBack, closeBtn];

for (let i = 0; i < modalButtonElements.length; i++) {
    modalButtonElements[i].addEventListener('click', () => {
        modalBtnWrapper.classList.toggle('hide');
        modalWrapper.classList.toggle('show');
    });
}

requestBtn.addEventListener('click', () => {
    init();
    modalWrapper.remove();
});

function startLoading() {
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

function renderErrorMessage(messageText) {
    document.getElementById('js-ul').textContent = messageText;
}

async function fetchData() {
    try {
        const url = 'https://api.json-generator.com/templates/NluaaELSLhVe/data?access_token=ambjpfxjl00e50wa639kwndq1ofq3iuykdrv98ge';
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`${response.status}:${response.statusText}`);
            renderErrorMessage(`${response.status}:${response.statusText}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error);
        renderErrorMessage(`${error.name}:${error.message}`);
    }
}

async function init() {
    startLoading();
    let listData;
    try {
        listData = await fetchData();
        if (!listData) {
            return;
        }
    } catch (error) {
        console.error(error.message);
        renderErrorMessage(error.message);
    } finally {
        removeLoading();
    }
    if (listData.length === 0) {
        console.log('データがありません');
        renderErrorMessage('データがありません');
    }
    renderList(listData);
}
