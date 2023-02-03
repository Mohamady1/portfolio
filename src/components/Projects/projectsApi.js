import weather from "../../img/Projects/weather.png";
import musicPlayer from "../../img/Projects/musicPlayer.jpg";
import weatherFlutter from "../../img/Projects/weather_flutter.jpg";
import toDo from "../../img/Projects/to_do.png";

const projects = [
  {
    id: 1,
    technology: "React Native",
    name: "Music Player",
    picture: musicPlayer,
    info: "Music Player App with React Native using (Spotify API & SQLite)",
    link: "",
  },
  {
    id: 2,
    technology: "React Native",
    name: "Weather App",
    picture: weather,
    info: "Weather App With React Native to know Weather, Wind Speed for your city",
    link: "",
  },
  {
    id: 3,
    technology: "Flutter",
    name: "Flutter Weather App",
    picture: weatherFlutter,
    info: "Weather App With Flutter to know Weather, Wind Speed and Cloud Precentage for your city by location and for any city by search",
    link: "",
  },
  {
    id: 4,
    technology: "Flutter",
    name: "To-Do App",
    picture: toDo,
    info: "To-Do App With Flutter to make your day much more productive with flutter, provider and sqflite",
    link: "",
  },
];

export default projects;
