import { useSelector } from "react-redux";
import "./Error.scss";

export default function Error() {
  const { error } = useSelector((store) => store.weather);

  return (
    <div className="containerError">
      <p>{error}</p>
    </div>
  );
}
