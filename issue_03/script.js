const ul = document.getElementById('js-ul');
const contentsArray = [{
        href: 'a1.html',
        text: 'a1',
        src: '/img/bookmark.png'
    },
    {
        href: 'a2.html',
        text: 'a2',
        src: '/img/message.png'
    }
];
const fragment = document.createDocumentFragment();
for (let i = 0; i < contentsArray.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.setAttribute('href', contentsArray[i].href);
    a.textContent = contentsArray[i].text;
    img.setAttribute('src', contentsArray[i].src);
    fragment.appendChild(li).appendChild(a).insertAdjacentElement('afterbegin', img);
}
ul.appendChild(fragment);
