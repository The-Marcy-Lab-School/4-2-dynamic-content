/* 
Event Propagation and Event Delegation

When an event occurs on an element, it "bubbles up" through 
all of its ancestors. We can use this to our advantage!
*/

// Watch how the event bubbles up from button -> inner -> outer

document.querySelector('#btn').addEventListener('click', (event) => {
  console.log('🔵 Button clicked!');
  console.log(`   event.target: #${event.target.id}`);
  console.log(`   event.currentTarget: #${event.currentTarget.id}`);
});

document.querySelector('#inner').addEventListener('click', (event) => {
  console.log('🟢 Inner div heard the click!');
  console.log(`   event.target: #${event.target.id}`);
  console.log(`   event.currentTarget: #${event.currentTarget.id}`);
});

document.querySelector('#outer').addEventListener('click', (event) => {
  console.log('🔴 Outer div heard the click!');
  console.log(`   event.target: #${event.target.id}`);
  console.log(`   event.currentTarget: #${event.currentTarget.id}`);
});


// Challenge: Try adding event.stopPropagation() to each handler
// What changes? When might you want to use this?
