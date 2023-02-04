const ul = document.getElementById('js-ul');
function createNewElements(tagName, className) {
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    return newElement;
}
