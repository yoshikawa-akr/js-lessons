const ul = document.getElementsByTagName('ul');
const li = document.createElement("li");
li.textContent = "これです"
ul.item(0).appendChild(li);
