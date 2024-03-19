import axios from "axios";

export const handler = async (event) => {
  try {
    const { c } = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${apiKey}&lang=it`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Errore durante la richiesta API di OpenWeatherMap",
      }),
    };
  }
};
