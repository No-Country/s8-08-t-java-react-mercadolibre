import axios from "axios";

const URL = "https://s8-08-t-java-react-mercadolibre-production.up.railway.app/api/v1";
// @ts-ignore
// const getToken = () => {
//   const { token } = getLocalStorage("auth") || "";
//   const Authorization = token && `Bearer ${token}`;
//   return Authorization;
// };

// export const postRequest = async (dataSend, endpoint: string) => {
//   try {
//     const { data } = await axios.post(URL + endpoint, dataSend, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: getToken(),
//       },
//     });

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw new Error(error.message);
//     } else {
//       return "An unexpected error occurred";
//     }
//   }
// };

//! ENDPOINT PARA EL LOGIN
export const postRequestLogin = async (dataSend, endpoint) => {
  try {
    const { data } = await axios.post(URL + endpoint, dataSend);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const getRequest = async endpoint => {
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        // Authorization: getToken(),
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

// export const putRequest = async (
//   endpoint,
//   dataSend
// ) => {
//   try {
//     const { data } = await axios.put(URL + endpoint, dataSend, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: getToken(),
//       },
//     });

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message);

//       throw new Error(error.message);
//     } else {
//       console.log("unexpected error: ", error);
//       return "An unexpected error occurred";
//     }
//   }
// };

// export const deleteRequest = async (endpoint: string) => {
//   try {
//     const { data } = await axios.delete(URL + endpoint, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: getToken(),
//       },
//     });

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message);

//       throw new Error(error.message);
//     } else {
//       console.log("unexpected error: ", error);
//       return "An unexpected error occurred";
//     }
//   }
// };

// export const postRequestFile = async (dataSend: {}, endpoint: string) => {
//   try {
//     const { data } = await axios.post(URL + endpoint, dataSend, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Accept: "application/json",
//         Authorization: getToken(),
//       },
//     });

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log(error?.response?.data.error);
//       throw new Error(error.message);
//     } else {
//       return "An unexpected error occurred";
//     }
//   }
// };
