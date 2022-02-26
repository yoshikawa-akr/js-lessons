const contents = [{
    to: "bookmark.html",
    img: "1.png",
    alt: "画像1",
    text: "ブックマーク"
}, {
    to: "message.html",
    img: "2.png",
    alt: "画像2",
    text: "メッセージ"
}];

const ul = document.getElementById('js-ul');
const checkContents = new Promise((resolve) => {
    resolve(contents);
});
checkContents.then((value) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < value.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.textContent = value[i].text;
        a.href = `/${value[i].to}`;
        img.src = value[i].img;
        img.alt = value[i].alt;
        fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
    }
    ul.appendChild(fragment);
});
