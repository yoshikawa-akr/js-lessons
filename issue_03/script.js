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

for (let i = 0; i < 2; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    a.setAttribute('href', hrefArray[i]);
    a.textContent = textArray[i];
    img.setAttribute('src', srcArray[i]);
    a.insertAdjacentElement('afterbegin', img);
    ul.appendChild(li).appendChild(a);
}
