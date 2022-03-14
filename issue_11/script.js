function startLoading() {
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    document.getElementById('js-loading').appendChild(loadingImg);
}

function stopLoading() {
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

async function callJson() {
    const url = 'https://api.json-generator.com/templates/NluaaELSLhVe/data?access_token=ambjpfxjl00e50wa639kwndq1ofq3iuykdrv98ge';
    const response = await fetch(url);
    const result = await response.json();
    return result.data;
}

async function tryGetJsonData() {
    startLoading();
    try {
        return await callJson();
    } catch (error) {
        console.error(error);
    } finally {
        stopLoading();
    }
}

async function showList() {
    const result = await tryGetJsonData();
    createLists(result);
}
showList();
