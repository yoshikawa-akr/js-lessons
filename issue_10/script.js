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

function getListData() {
    return new Promise((resolve) => {
        const lists = [{
            to: "bookmark.html",
            img: "1.png",
            alt: "画像1",
            text: "ブックマーク"
        }, {
            to: "message.html",
            img: "2.png",
            alt: "画像2",
            text: "メッセージ"
        }]
        setTimeout(() => {
            resolve(lists);
        }, 3000);
    });
}

async function tryGetListData() {
    startLoading();
    try {
        return await getListData();
    } catch (error) {
        console.error(error);
    } finally {
        stopLoading();
    }
}

async function showList() {
    const result = await tryGetListData();
    createLists(result);
}
showList();
