import axios from "axios";

export const chatGPTRequest = async body => {
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", body, {
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
