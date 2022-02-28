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
const wait = (sec) => {
    return new Promise((resolve) => {
        setTimeout(resolve, sec * 1000);
    });
}

async function createLists() {
    await wait(3);

    const fragment = document.createDocumentFragment();
    for (const item of contents) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        a.textContent = item.text;
        a.href = `/${item.to}`;
        img.src = item.img;
        img.alt = item.alt;
        fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
    }
    ul.appendChild(fragment);
}
createLists(contents);
