import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addCityToLocalStorage,
  getCityFromLocalStorage,
} from "../utils/localStorage";

const initialState = {
  city: {},
  isLoading: false,
  favoriteBox: false,
  favoriteCity: getCityFromLocalStorage(),
  error: "",
};

const handleRemoveFavorite = (state, { payload }) => {
  const newArrayCity = state.favoriteCity.filter((city) => city !== payload);
  state.favoriteCity = newArrayCity;
  addCityToLocalStorage(newArrayCity);
};

export const fetchData = createAsyncThunk("weather/getCity", async (c) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      c +
      "&units=metric&appid=API_KEY_OPENWEATHERMAP&lang=it"
  );
  /* console.log(response.data); */
  return response?.data;
});

const weatherSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      const allFavoriteCity = getCityFromLocalStorage();
      if (allFavoriteCity !== null) {
        if (allFavoriteCity.includes(payload)) {
          handleRemoveFavorite(state, { payload });
          return;
        }
        state.favoriteCity = [...allFavoriteCity, payload];
        addCityToLocalStorage([...allFavoriteCity, payload]);
        return;
      }
      state.favoriteCity = [payload];
      addCityToLocalStorage([payload]);
    },

    handleFavoriteBox: (state) => {
      state.favoriteBox = !state.favoriteBox;
    },

    removeFavorite: (state, { payload }) => {
      handleRemoveFavorite(state, { payload });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.city = payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.error = "Please enter a valid city!";
      });
  },
});

export const { addToFavorite, handleFavoriteBox, removeFavorite } =
  weatherSlice.actions;

export default weatherSlice.reducer;
