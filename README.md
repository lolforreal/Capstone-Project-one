# Capstone-Project-one

# **FilmRec - Movie Recommendation Web App**

**Website URL**: [Deployed Link](#)  
_Add the link to where the site is hosted or deployed._

---

## **Description**
FilmRec is a movie recommendation website that allows users to select a day they want to watch a movie, search for available movie showings, and explore nearby locations where they can view the movie. Users can also log in to personalize their experience, and the app integrates The Movie Database (TMDb) API to provide real-time movie search results.

---

## **Features**
### 1. **Date Selection**:
   - Users can select the day they plan to watch a movie by choosing a date from a clean and simple interface.
   - This feature helps provide a streamlined experience, allowing the app to focus on movies relevant to their planned movie-watching day.
   
### 2. **Movie Search Integration (TMDb API)**:
   - Users can search for movies through the TMDb API, which provides accurate, real-time information about movies such as titles, release dates, overviews, and more.
   - This feature ensures users have access to updated data from a reliable source.
   
### 3. **Login/Sign Up**:
   - Users can log in or sign up using an email and password, which updates their session by displaying their email in the top right corner.
   - It offers personalization, making the platform feel more tailored to the individual.

### 4. **Responsive Design**:
   - The site is responsive, adapting to different screen sizes, which ensures the user experience is optimal on any device, whether desktop or mobile.
   
### 5. **Form Validation**:
   - Proper form validation is implemented for the date picker and login fields to ensure the right format is used when entering information.

### **Why These Features?**:
   - **User Flow & Simplicity**: These features were chosen because they reflect a simple and intuitive user flow. Each part of the experience (selecting a date, searching movies, logging in) is segmented, creating a smooth user experience.
   - **Real-Time Data**: TMDb API integration allows the user to interact with up-to-date information, making the app dynamic and accurate.

---

## **User Flow**

Here is the general user flow for the website:

1. **Landing Page**: 
   - The user lands on the main page, which contains the website’s name and navigation.
   - There is a **Choose a Date** button that allows the user to select a date when they want to watch a movie.

2. **Choosing a Date**:
   - Once the user clicks on **Choose a Date**, a date input box appears, prompting the user to enter a date in `MM/DD` format. A simple validation ensures the date is valid.
   - Upon submitting the date, the page will clear the date selection section and show a **movie search bar**.

3. **Movie Search**:
   - The user can type in the name of the movie they want to search for in the search bar. The app interacts with the TMDb API to pull results based on the movie title the user types.
   - The API provides movie details like title, release date, and overview, which are then displayed on the page.

4. **Login/Sign Up**:
   - The user can click the **Login/Sign Up** button on the top right corner of the screen to open a new login window.
   - After entering valid login credentials (email and password), the login window closes, and the user’s email replaces the login button in the main window, indicating they are logged in.

5. **Results**:
   - The searched movie details are displayed in a clean format, and users can continue to search for other movies as desired.

---

## **API Usage (TMDb)**

The project integrates the [TMDb API](https://www.themoviedb.org/documentation/api) to search for movie data in real-time.

### **Why TMDb API?**:
   - TMDb provides a rich dataset for movies and TV shows with accurate and up-to-date information. This ensures users can find recent, upcoming, or even older movie details easily.
   - The API is straightforward to implement, and it provides necessary endpoints for movie search functionality, which aligns perfectly with the website's goals.

### **API Key & Token**:
   - An **API key** and **Bearer token** are used for authentication while interacting with the TMDb API.
   
### **Sample API Call**:

```javascript
// URL to search for movies with a query using TMDb API
const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`;

fetch(url, {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8'
    }
})
.then(response => response.json())
.then(data => {
    // Process the movie data
})
.catch(error => {
    console.error('Error fetching movie data:', error);
});
