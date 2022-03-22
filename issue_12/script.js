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
            throw new Error(`${response.status}:${response.statusText}`);
        }
        const result = await response.json();
        return result.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function fetchListData() {
    startLoading();
    try {
        const listData = await fetchData();
        if (listData.length === 0) {
            console.log('データがありません');
            renderErrorMessage('データがありません');
        }
        return listData;
    } catch (e) {
        console.error(e.message);
        renderErrorMessage(e.message);
    } finally {
        removeLoading();
    }
}

async function showList() {
    const obtainedData = await fetchListData();
    if (obtainedData) {
        renderList(obtainedData);
    }
}

const btn = document.getElementById('js-btn');
btn.addEventListener('click', () => {
    showList();
    btn.remove();
});
