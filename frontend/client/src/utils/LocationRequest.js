import { getRequest } from "../services/httpRequest";

export const locationRequest = async value => {
  try {
    const response = await getRequest(`/api/v1/provinces?zipcode=${value}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
