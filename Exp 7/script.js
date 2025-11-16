// Sample movie list
const movies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Dark Knight",
    "Avatar",
    "Titanic",
    "The Godfather",
    "Pulp Fiction",
    "Forrest Gump",
    "Fight Club"
];

// Get elements
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");

// Display initial movie list
window.onload = () => displayMovies(movies);

// Listen for typing in search box — real-time filtering
searchInput.addEventListener("input", filterMovies);

// Display movies in the UL
function displayMovies(list) {
    movieList.innerHTML = ""; // clear before adding

    list.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie;
        movieList.appendChild(li);
    });
}

// Filter movies based on input
function filterMovies() {
    const query = searchInput.value.toLowerCase();

    const filtered = movies.filter(movie =>
        movie.toLowerCase().includes(query)
    );

    displayMovies(filtered);
}
