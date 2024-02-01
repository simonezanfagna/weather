import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./ContainerWeather.scss";
import { addToFavorite } from "../../features/weatherSlice";

export default function ContainerWeather() {
  const { city, favoriteCity } = useSelector((store) => store.weather);
  const dispatch = useDispatch();

  return (
    <div className="containerWeather">
      <div className="rightWeather">
        <img
          className="imgWeather"
          src={
            "http://openweathermap.org/img/wn/" +
            city.weather[0].icon +
            "@2x.png"
          }
        />
        <button
          className="btn addFavorite"
          onClick={() => dispatch(addToFavorite(city.name))}
        >
          {favoriteCity?.includes(city.name) ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
      </div>
      <div className="weatherBox">
        <h2>{city.name}</h2>
        <p>Temperatura: {Math.round(city.main.temp)} °C</p>
        <p>Vento: {Math.round(city.wind.speed * 3.6)} km/h</p>
        <p>{city.weather[0].description}</p>
      </div>
    </div>
  );
}
