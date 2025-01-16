const BASE_URL = 'http://127.0.0.1:5000';
const TMDB_API_KEY = '42062ab4911d54fa06c486cf3e10fa52'; // 
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/search/movie';

// Fetch movies from the TMDB API and populate the list based on the search keyword
async function searchMovies(keyword) {
    try {
        const response = await fetch(`${TMDB_BASE_URL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(keyword)}`);
        const data = await response.json();
        
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Clear the movie list

        if (data.results && data.results.length > 0) {
            data.results.forEach(movie => {
                const movieItem = document.createElement('li');
                movieItem.textContent = movie.title;
                movieList.appendChild(movieItem);
            });
        } else {
            movieList.innerHTML = '<li>No movies found for the given keyword.</li>';
        }
    } catch (error) {
        console.error('Error fetching movies from TMDB:', error);
    }
}

// Event listener for the movie search bar
const searchBar = document.getElementById('movie-search-bar');
searchBar.addEventListener('input', (event) => {
    const keyword = event.target.value.trim();
    if (keyword) {
        searchMovies(keyword);
    } else {
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = ''; // Clear the movie list if the input is empty
    }
});
