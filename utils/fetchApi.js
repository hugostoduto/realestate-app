import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "59919cdbe8msh0ba5d2bbed35891p10a691jsnc9e823a97f57",
    },
  });

  return data;
};
