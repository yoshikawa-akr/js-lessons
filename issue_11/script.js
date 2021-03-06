function startLoading() {
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    document.getElementById('js-loading').appendChild(loadingImg);
}

function removeLoading() {
    document.getElementById('js-loading').remove();
}

function createLists(resolvedData) {
    const ul = document.getElementById('js-ul');
    const fragment = document.createDocumentFragment();
    for (const item of resolvedData) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.href = item.to;
        a.textContent = item.text;
        img.src = item.img;
        img.alt = item.alt;

        fragment.appendChild(li).appendChild(a).appendChild(img);
    }
    ul.appendChild(fragment);
}

function displayMessage(error) {
    const ul = document.getElementById('js-ul');
    ul.textContent = error;
}

async function fetchData() {
    try {
        const url = 'https://api.json-generator.com/templates/NluaaELSLhVe/data?access_token=ambjpfxjl00e50wa639kwndq1ofq3iuykdrv98ge';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('サーバーエラーです');
        }
        const result = await response.json();
        return result.data;
    } catch (responseError) {
        console.error(responseError);
        displayMessage(responseError);
    }
}

async function fetchListData() {
    startLoading();
    try {
        const listData = await fetchData();
        if (listData.length === 0) {
            displayMessage('データがありません');
            console.log('データがありません');
        }
        return listData;
    } catch (listDataError) {
        console.error(listDataError);
    } finally {
        removeLoading();
    }
}

async function showList() {
    const result = await fetchListData();
    createLists(result);
}
showList();
