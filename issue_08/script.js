function startLoading() {
    const loadingPlace = document.getElementById('js-loading');
    const loadingImg = document.createElement('img');
    loadingImg.src = 'loading-circle.gif';
    loadingImg.alt = 'ローディング画像';
    loadingPlace.appendChild(loadingImg);
}

function stopLoading() {
    document.getElementById('js-loading').remove();
}

function createLists(resolvedData) {
    const ul = document.getElementById('js-ul');
    const fragment = document.createDocumentFragment();

    for (const item of resolvedData) {
        const li = document.createElement('li');
        const img = document.createElement('img');

        li.textContent = item.text;
        img.src = item.img;
        img.alt = item.alt;
        fragment.appendChild(li).appendChild(img);
    }
    ul.appendChild(fragment);
}

const getListData = new Promise((reject) => {
    startLoading();
    const listData = [{
        img: "1.png",
        alt: "画像1",
        text: "ブックマーク"
    }, {
        img: "2.png",
        alt: "画像2",
        text: "メッセージ"
    }];
    setTimeout(() => {
        reject(Error('エラーです'));
    }, 3000);
});
getListData.catch((error) => {
    return error;
});
getListData.then((catched) => {
    console.error(catched);
});
