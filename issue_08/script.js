function startLoading() {
    const loadingPlace = document.getElementById('js-loading');
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    loadingPlace.appendChild(loadingImg);
}

function stopLoading() {
    document.getElementById('js-loading').remove(loadingImg);
}

function createLists() {
    const ul = document.getElementById('js-ul');
    const fragment = document.createDocumentFragment();
    const listData = [{
        img: "1.png",
        alt: "画像1",
        text: "ブックマーク"
    }, {
        img: "2.png",
        alt: "画像2",
        text: "メッセージ"
    }];

    for (const item of listData) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        li.textContent = item.text;
        img.src = item.img;
        img.alt = item.alt;
        fragment.appendChild(li).appendChild(img);
    }
    ul.appendChild(fragment);
}
