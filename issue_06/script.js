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
const promiseSettings = (sec, value) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, sec * 1000);
    });
}

async function createLists(target) {
    await promiseSettings(3, target);

    const fragment = document.createDocumentFragment();
    for (const item of target) {
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
