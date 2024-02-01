import { useDispatch } from "react-redux";
import "./FavoriteCityButton.scss";
import { handleFavoriteBox } from "../../features/weatherSlice";
import { useState } from "react";

export default function FavoriteCityButton() {
  const [btnClass, setBtnClass] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setBtnClass(!btnClass);
  };

  return (
    <button
      className={btnClass ? "btn btnFC activeBtn" : "btn btnFC"}
      onClick={() => {
        dispatch(handleFavoriteBox()), handleClick();
      }}
    >
      <i className="fa-solid fa-heart"></i>
    </button>
  );
}
