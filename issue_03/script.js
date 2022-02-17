const ul = document.getElementById('js-ul');

const li = document.createElement('li');
const a = document.createElement('a');
const img = document.createElement('img');

a.setAttribute('href', 'a1.html');
a.textContent = 'a1';
img.setAttribute('src', '/img/bookmark.png');

a.insertAdjacentElement('afterbegin', img);
ul.appendChild(li).appendChild(a);

const cloneLi = li.cloneNode(true);
const cloneA = cloneLi.firstElementChild;
const nodeListOfCloneA = cloneA.childNodes;

nodeListOfCloneA[0].src = '/img/message.png';
nodeListOfCloneA[1].textContent = 'a2';
li.after(cloneLi);
