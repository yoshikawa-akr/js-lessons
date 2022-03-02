const getData = new Promise((resolve) => {
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
const loadingImg = document.getElementById('js-loadingImg');
const ul = document.getElementById('js-ul');
getData.then((value) => {
    const fragment = document.createDocumentFragment();
    for (const item of value) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img = document.createElement('img');

        p.textContent = item.text;
        img.src = item.img;
        img.alt = item.alt;

        fragment.appendChild(li).appendChild(p).appendChild(img);
    }
    loadingImg.style.display = 'none';
    ul.appendChild(fragment);
});
