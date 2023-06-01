import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const locationRequest = async (endpoint, value) => {
  try {
    const { data } = await axios.get(URL + endpoint + value, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
