import axios from "axios";

export const getPrediction = async (start, end) => {
  return axios
    .get(`http://127.0.0.1:5000/sales-data?start=${start}&end=${end}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      console.error("Error making POST requirest:", error);
    });
};
