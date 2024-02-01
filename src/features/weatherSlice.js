import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  city: {},
  isLoading: false,
  error: "",
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
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.city = payload;
        /* console.log(payload); */
      })
      .addCase(fetchData.rejected, (state /* {payload} */) => {
        state.isLoading = false;
        state.error = "Please enter a valid city!";
      });
  },
});

export default weatherSlice.reducer;
