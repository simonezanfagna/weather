import { useDispatch, useSelector } from "react-redux";
import "./FavoriteCityContainer.scss";
import {
  fetchData,
  handleFavoriteBox,
  removeFavorite,
} from "../../features/weatherSlice";

export default function FavoriteCityContainer() {
  const { favoriteCity } = useSelector((store) => store.weather);

  const dispatch = useDispatch();

  return (
    <div className="containerFC">
      {favoriteCity?.length > 0 ? (
        favoriteCity.map((city, key) => {
          return (
            <div key={key} className="itemFavorite">
              <button
                className="btn"
                onClick={() => {
                  dispatch(fetchData(city)), dispatch(handleFavoriteBox());
                }}
              >
                {city}
              </button>
              <i
                className="fa-solid fa-trash"
                onClick={() => dispatch(removeFavorite(city))}
              ></i>
            </div>
          );
        })
      ) : (
        <p>La tua lista preferiti è vuota</p>
      )}
    </div>
  );
}
