import { useState } from "react";
import "./Search.scss";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/weatherSlice";

export default function Search() {
  const [nameCity, setNameCity] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameCity.length === 0) {
      return;
    }
    dispatch(fetchData(nameCity));
  };

  return (
    <form className="containerSearch" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="City"
          name="city"
          value={nameCity}
          onChange={(e) => setNameCity(e.target.value)}
        />
        <button className="btn" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </label>
    </form>
  );
}
