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
        const p = document.createElement('p');
        const img = document.createElement('img');

        p.textContent = item.text;
        img.src = item.img;
        img.alt = item.alt;

        fragment.appendChild(li).appendChild(p).appendChild(img);
    }
    ul.appendChild(fragment);
}

function getListData() {
    return new Promise((resolve) => {
        const lists = [{
            img: "1.png",
            alt: "画像1",
            text: "ブックマーク"
        }, {
            img: "2.png",
            alt: "画像2",
            text: "メッセージ"
        }];
        setTimeout(() => {
            resolve(lists);
        }, 3000);
    });
}

async function showList() {
    startLoading();
    const listData = await getListData();
    createLists(listData);
    stopLoading();
}

showList();
