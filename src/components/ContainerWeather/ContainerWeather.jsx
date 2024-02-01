import { useSelector } from "react-redux";
import "./ContainerWeather.scss";

export default function ContainerWeather() {
  const { city } = useSelector((store) => store.weather);

  return (
    <div className="containerWeather">
      <img
        className="imgWeather"
        src={
          "http://openweathermap.org/img/wn/" + city.weather[0].icon + "@2x.png"
        }
      />
      <div className="weatherBox">
        <h2>{city.name}</h2>
        <p>Temperatura: {Math.round(city.main.temp)} °C</p>
        <p>Vento: {Math.round(city.wind.speed * 3.6)} km/h</p>
        <p>{city.weather[0].description}</p>
      </div>
    </div>
  );
}
