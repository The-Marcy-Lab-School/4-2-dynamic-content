const emojis = ['🐶', '🐱', '🐸', '🦊', '🐶', '🐱', '🐸', '🦊'];

// Shuffle the emojis
emojis.sort(() => Math.random() - 0.5);

// Step 1: Render the cards. Each card should be a div with the class "card" and the textContent should be an emoji.


// Step 2: Event delegation: one listener handles all card clicks and toggles the "flipped" class on the clicked card
