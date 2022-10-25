import axios from "axios";

export const axiosRequest = async (params: string) => {
  const result = await axios.get("https://api.pokemontcg.io/v2/" + params, {
    headers: {
      "X-Api-Key": process.env.REACT_APP_API_KEY,
    },
  });
  return result.data;
};
