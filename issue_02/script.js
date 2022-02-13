const ul = document.getElementById('js-ul');
const li = document.createElement('li');
const a = document.createElement('a');
const img = document.createElement('img');

img.src = 'bookmark.png';
img.alt = 'ブックマーク';
a.href = '1.html';
a.textContent = 'これです';
a.insertAdjacentElement('afterbegin', img);
ul.appendChild(li).appendChild(a);
