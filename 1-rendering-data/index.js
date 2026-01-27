// Example 1: Render a simple list of friends

const friends = ['Alice', 'Bob', 'Carol', 'David'];

// const ul = document.querySelector('#friends-list');

// friends.forEach((friendName) => {
//   const li = document.createElement('li');
//   li.textContent = friendName;
//   ul.append(li);
// });


////////////////////////////////////////////////////////////

// Example 2: Render a more complex list of movies
const movies = [
  {
    title: 'The Matrix',
    year: 1999,
    genres: ['Sci-Fi', 'Action'],
    src: 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png'
  },
  {
    title: 'Inception',
    year: 2010,
    genres: ['Sci-Fi', 'Thriller'],
    src: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'
  },
  {
    title: 'Parasite',
    year: 2019,
    genres: ['Thriller', 'Drama'],
    src: 'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png'
  }
];

/* 
Recreate this structure:

<ul id="movies-list">
  <li>
    <img src="https://upload.wikimedia.org/..." alt="Movie poster for The Matrix">
    <h3>The Matrix (1999)</h3>
    <p>Sci-Fi, Action</p>
  </li>
  <!-- more list items... -->
</ul>
*/
