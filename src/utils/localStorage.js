export const addCityToLocalStorage = (city) => {
  localStorage.setItem("city", JSON.stringify(city));
};

export const getCityFromLocalStorage = () => {
  const result = localStorage.getItem("city");
  const city = result ? JSON.parse(result) : null;
  return city;
};
