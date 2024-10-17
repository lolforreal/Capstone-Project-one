// "Choose a Date" button functionality
document.getElementById('chooseDateBtn').addEventListener('click', function() {
    // Hide the intro section
    document.getElementById('introSection').style.display = 'none';

    // Show the date input container
    document.getElementById('dateInputContainer').style.display = 'flex';
});

// Automatically add a slash after the month input
document.getElementById('dateInput').addEventListener('input', function(e) {
    // Remove non-numeric characters from input
    const value = e.target.value.replace(/\D/g, ''); 
    // If length reaches 2 digits, add a slash after the month
    if (value.length >= 2) {
        e.target.value = value.slice(0, 2) + '/' + value.slice(2);
    } else {
        e.target.value = value; // Update the value normally for less than 2 digits
    }
});

// "Submit Date" button functionality
document.getElementById('submitDateBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;
    
    // Regular expression to validate date format MM/DD
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
    // Check if the entered date matches the format
    if (datePattern.test(dateInput)) {
        alert(`Date selected: ${dateInput}`);
        
        // Hide the date input container and change background color to white
        document.getElementById('dateInputContainer').style.display = 'none';
        document.body.style.backgroundColor = 'white';

        // Show the movie search bar
        document.getElementById('movieSearchContainer').style.display = 'flex';
    } else {
        alert('Please enter a valid date in MM/DD format.');
    }
});

// Open new login window when the "Login/Sign Up" button is clicked
document.getElementById('loginBtn').addEventListener('click', function() {
    // Open a new window for the login form
    const loginWindow = window.open('login.html', '_blank', 'width=400,height=400');
    
    // Listen for a message event from the login window
    window.addEventListener('message', function(event) {
        // Update the top right with the user's email if a valid email is received
        if (event.data.email) {
            document.getElementById('userEmail').textContent = event.data.email;
            document.getElementById('loginBtn').style.display = 'none'; // Hide login button
        }
    });
});

// ============================
// TMDB API INTEGRATION
// ============================

// API Key and Access Token
const API_KEY = '42062ab4911d54fa06c486cf3e10fa52';  // API key for TMDb
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjA2MmFiNDkxMWQ1NGZhMDZjNDg2Y2YzZTEwZmE1MiIsIm5iZiI6MTcyOTE0MjMxMC4yODQ0ODEsInN1YiI6IjY2Yzk1YjczNjI4NzUxNGJkNTJkNDU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iDFNQvuMreHGqUYNAB2zJZfiQ0pOC8MfrYDxmUQmh1A';  // Access token for TMDb

// Function to search for movies using TMDb API
function searchMovies(query) {
    // URL for searching movies with the provided query
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;

    // Fetch API call with Authorization header using the access token
    fetch(url, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        console.log('API Response:', data);  // Log the API response for debugging purposes

        // Check if results are available and display them
        if (data.results && data.results.length > 0) {
            displayMovieResults(data.results);
        } else {
            alert('No movies found!');
        }
    })
    .catch(error => {
        console.error('Error fetching movie data:', error);
        alert('Error fetching movie data.');
    });
}

// Function to display movie search results
function displayMovieResults(movies) {
    // Clear previous results
    const resultsContainer = document.getElementById('movieResults');
    resultsContainer.innerHTML = ''; 

    // Loop through the movie results and display them on the screen
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Overview: ${movie.overview}</p>
        `;
        resultsContainer.appendChild(movieItem); // Append each movie to the results container
    });
}

// Search button functionality
document.getElementById('searchMovieBtn').addEventListener('click', function() {
    // Get the movie query input value
    const query = document.getElementById('movieSearchInput').value;
    // If a query exists, search for movies using TMDb API
    if (query) {
        searchMovies(query);
    } else {
        alert('Please enter a movie title to search.');
    }
});
