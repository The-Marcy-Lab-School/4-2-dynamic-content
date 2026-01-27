/*
The Create, Modify, Append Pattern

To add new elements to the page:
1. Create - use document.createElement(tagName)
2. Modify - set properties (textContent, classList, id, etc.)
3. Append - use parentElement.append(newElement)
*/

// Example 1: Create a single paragraph
// TODO: Uncomment and run to see the result

const newParagraph = document.createElement('p');
newParagraph.textContent = 'This paragraph was created with JavaScript!';
newParagraph.classList.add('highlight');
newParagraph.id = 'dynamic-paragraph';

const container = document.querySelector('#container');
container.append(newParagraph);


// Example 2: Create multiple list items
// TODO: Uncomment and run to see the result

const ul = document.querySelector('#my-list');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.textContent = '1';
li2.textContent = '2';
li3.textContent = '3';

// You can append multiple elements at once!
ul.append(li1, li2, li3);


// Challenge: Add an event listener to the button to add a new list item when clicked.
