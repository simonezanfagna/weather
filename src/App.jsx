import { useSelector } from "react-redux";
import "./App.scss";
import ContainerWeather from "./components/ContainerWeather/ContainerWeather";
import Search from "./components/Search/Search";
import FavoriteCity from "./components/FavoriteCity/FavoriteCity";

function App() {
  const { isLoading, city } = useSelector((store) => store.weather);
  return (
    <div className="app">
      <div
        className={
          city.name !== undefined ? "container minHeight" : "container"
        }
      >
        <div className="containerNav">
          <Search />
          <FavoriteCity />
        </div>
        {!isLoading && city.name !== undefined && <ContainerWeather />}
      </div>
    </div>
  );
}

export default App;
