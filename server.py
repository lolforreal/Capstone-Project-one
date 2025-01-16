from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

# Sample data for demonstration
movies = [
    {"id": 1, "title": "Inception", "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM"], "locations": ["Theater 1", "Theater 2"]},
    {"id": 2, "title": "Interstellar", "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM"], "locations": ["Theater 1", "Theater 3"]},
    {"id": 3, "title": "The Dark Knight", "showtimes": ["2:00 PM", "5:00 PM", "8:00 PM"], "locations": ["Theater 2", "Theater 3"]}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/movies', methods=['GET'])
def get_movies():
    return jsonify(movies)

@app.route('/api/movie/<int:movie_id>', methods=['GET'])
def get_movie_details(movie_id):
    movie = next((movie for movie in movies if movie['id'] == movie_id), None)
    if movie:
        return jsonify(movie)
    return jsonify({"error": "Movie not found"}), 404

@app.route('/api/book', methods=['POST'])
def book_movie():
    data = request.json
    movie_id = data.get('movie_id')
    showtime = data.get('showtime')
    location = data.get('location')

    movie = next((movie for movie in movies if movie['id'] == movie_id), None)
    if movie and showtime in movie['showtimes'] and location in movie['locations']:
        return jsonify({"success": "Booking confirmed for {} at {} in {}.".format(movie['title'], showtime, location)})
    return jsonify({"error": "Invalid booking details"}), 400

if __name__ == '__main__':
    app.run(debug=True)
