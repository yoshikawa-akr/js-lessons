const ul = document.getElementById('js-ul');
const a = document.createElement('a');
a.href = '1.html';
a.textContent = 'これです';
const img = document.createElement('img');
img.src = 'bookmark.png';
img.alt = 'ブックマーク';
a.appendChild(img);
