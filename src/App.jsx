import { useSelector } from "react-redux";
import "./App.scss";
import ContainerWeather from "./components/ContainerWeather/ContainerWeather";
import Search from "./components/Search/Search";
import FavoriteCityButton from "./components/FavoriteCityButton/FavoriteCityButton";
import FavoriteCityContainer from "./components/FavoriteCityContainer/FavoriteCityContainer";
import Error from "./components/Error/Error";

function App() {
  const { isLoading, city, favoriteBox, error } = useSelector(
    (store) => store.weather
  );
  return (
    <div className="app">
      <div
        className={
          city.name !== undefined ? "container minHeight" : "container"
        }
      >
        <div className="containerNav">
          <Search />
          <FavoriteCityButton />
        </div>
        {!isLoading &&
          city.name !== undefined &&
          !favoriteBox &&
          error.length === 0 && <ContainerWeather />}
        {favoriteBox && <FavoriteCityContainer />}
        {error.length > 0 && <Error />}
      </div>
    </div>
  );
}

export default App;
