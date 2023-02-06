const secondli = document.getElementById('second-li');
const firstli = document.querySelector('li');
console.log(firstli);
console.log(secondli);

const listItems = document.querySelectorAll('li');
console.log(listItems);
console.log(listItems.length);
listItems.forEach(li => {
    console.log(li);
});
Array.from(listItems).map(li => {
    console.log(li);
});

console.log(document.getElementsByClassName('list-item'));
console.log(document.getElementsByTagName('li'));

const listItems1 = document.querySelectorAll('li');
listItems1[0].style.backgroundColor = 'white';
listItems1[0].textContent = "Changed!";
listItems1[0].value = 5;
listItems1[0].setAttribute('class', 'blue big');
listItems1[0].classList.remove('big');

const p = document.createElement('p');
const text = document.createTextNode('Hello World');
p.append(text);
document.body.prepend(p);

document.body.innerHTML += '<p>Less do it!!</p>';
const listItemsToAdd = [];
const parent = document.querySelector('ol');
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = `List item i=${i}`;
    listItemsToAdd.push(li);
}

parent.append(...listItemsToAdd);

const fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = `List items with i=${i + 3}`;
    fragment.append(li);
}
parent.append(fragment);
console.log(listItems1[0])

console.log(window.innerWidth);

const fSize1 = window.getComputedStyle(listItems[0]).fontSize;
console.log(fSize1);
console.log(listItems[0].style.fontSize);
