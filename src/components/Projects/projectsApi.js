import city from "../../img/Projects/cityguide.png";
import studio from "../../img/Projects/studio.png";
import land from "../../img/Projects/landingpage.png";
import books from "../../img/Projects/myreads.png";
import weather from "../../img/Projects/weather.png";
import ecommerce from "../../img/Projects/ecommerce.png";
import oceanmovies from "../../img/Projects/oceanmovies.png";
import musicPlayer from "../../img/Projects/musicPlayer.jpg";

const projects = [
  {
    id: 1,
    technology: "Vanilla",
    name: "City Guide",
    picture: city,
    info: "This is a city guide project for Istanbul City with Map features for city and all places you should visit in Istanbul by (HTML, CSS, JavaScript)",
    link: "https://mohamady1.github.io/City-Guide",
  },
  {
    id: 2,
    technology: "Vanilla",
    name: "Studio",
    picture: studio,
    info: "Simple and responsive Web for Fake Studio With random photos by (HTML, CSS, JavaScript)",
    link: "https://mohamady1.github.io/Studio",
  },
  {
    id: 3,
    technology: "Vanilla",
    name: "Landing Page",
    picture: land,
    info: "A Landing page and responsive to all devices and this project was an assessment from udacity by (HTML, CSS, JavaScript)",
    link: "https://mohamady1.github.io/LandingPage",
  },
  {
    id: 4,
    technology: "React",
    name: "My Reads",
    picture: books,
    info: "Project To Search For books from api and add it to your books and filter your books with shelves (Currently Reading, Read, Want To Read) by (ReactJS)",
    link: "https://mohamady-books.netlify.app",
  },
  {
    id: 5,
    technology: "React",
    name: "Weather App",
    picture: weather,
    info: "Weather to get current weather and all days of weeks with (react & redux)",
    link: "https://mohamady-weather.netlify.app",
  },
  {
    id: 6,
    technology: "React",
    name: "Ecommerce App",
    picture: ecommerce,
    info: "simple ecommerce website with four categories with (React)",
    link: "https://mohamady-ecommerce.netlify.app",
  },
  {
    id: 7,
    technology: "React",
    name: "Ocean Movies",
    picture: oceanmovies,
    info: "Movies App with simple API (React & Redux)",
    link: "https://mohamady-oceanmovies.netlify.app",
  },
  {
    id: 9,
    technology: "React Native",
    name: "Music Player",
    picture: musicPlayer,
    info: "Music Player App with React Native using (Spotify API & SQLite)",
    link: "",
  },
];

export default projects;
