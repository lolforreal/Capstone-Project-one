# FilmRec Project

FilmRec is a dynamic movie recommendation web application that allows users to search for movies, view showtimes, and book tickets. The project integrates a Python/Flask backend with a responsive frontend and the TMDB API for fetching movie data.

---

## Features

- **Search Movies**: Users can search for movies dynamically by entering keywords.
- **Showtimes & Locations**: View available showtimes and locations for selected movies.
- **Booking Functionality**: Book movies with a simple input of showtime and location.
- **Integration with TMDB API**: Fetch movie data in real-time based on user search.
- **Responsive Design**: User-friendly interface that adapts to different screen sizes.
- **Python/Flask Backend**: Handles API requests, serves data, and manages business logic.

---

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6+)

- **Backend**:
  - Python
  - Flask
  - Flask-CORS

- **External API**:
  - TMDB API

---

## Setup Instructions

### Prerequisites

- Python 3.8+
- pip
- TMDB API Key (Sign up at [TMDB](https://www.themoviedb.org/))

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd FilmRec
   ```

2. **Install Dependencies**:
   ```bash
   pip install flask flask-cors
   ```

3. **Add TMDB API Key**:
   - Replace `YOUR_TMDB_API_KEY` in `MoviesRec.js` with your actual TMDB API key.

4. **Run the Flask Server**:
   ```bash
   python server.py
   ```

5. **Serve the Frontend**:
   - Open `index.html` in your browser, or run a local server:
     ```bash
     python -m http.server 8000
     ```

6. **Access the Application**:
   - Backend: `http://127.0.0.1:5000`
   - Frontend: `http://127.0.0.1:8000`

---

## Project Structure

```
FilmRec/
├── server.py           # Flask backend server
├── index.html          # Main HTML file
├── MoviesRec.css       # Styling for the application
├── MoviesRec.js        # JavaScript logic for the frontend
├── README.md           # Project documentation
```

---

## Future Enhancements

- **User Authentication**: Add login/signup functionality.
- **Persistent Storage**: Integrate PostgreSQL for storing user data and bookings.
- **Enhanced Recommendations**: Implement advanced movie recommendations based on user preferences.
- **Payment Gateway**: Enable secure payment options for booking confirmation.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or contributions, please contact [your_email@example.com].

