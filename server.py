from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://filmrec_user:aEC9ndGO7zGXx4h3rRDktAXCYYB4aTri@dpg-cu4732dds78s739p71i0-a.oregon-postgres.render.com/filmrec'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Database models
class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    showtimes = db.relationship('Showtime', backref='movie', lazy=True)

class Showtime(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.String(20), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'), nullable=False)

# Routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    return jsonify([{"id": movie.id, "title": movie.title} for movie in movies])

@app.route('/api/movie/<int:movie_id>', methods=['GET'])
def get_movie_details(movie_id):
    movie = Movie.query.get(movie_id)
    if movie:
        showtimes = [{"id": s.id, "time": s.time, "location": s.location} for s in movie.showtimes]
        return jsonify({"id": movie.id, "title": movie.title, "showtimes": showtimes})
    return jsonify({"error": "Movie not found"}), 404

@app.route('/api/book', methods=['POST'])
def book_movie():
    data = request.json
    showtime_id = data.get('showtime_id')

    showtime = Showtime.query.get(showtime_id)
    if showtime:
        return jsonify({"success": f"Booking confirmed for {showtime.movie.title} at {showtime.time} in {showtime.location}."})
    return jsonify({"error": "Invalid booking details"}), 400

if __name__ == '__main__':
    app.run(debug=True)
