const ul = document.getElementById('js-ul');
const hrefArray = ['a1.html', 'a2.html'];
const textArray = ['a1', 'a2'];
const srcArray = ['/img/bookmark.png', '/img/message.png'];

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
