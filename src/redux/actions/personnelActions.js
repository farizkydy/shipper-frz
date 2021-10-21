import axios from "axios";
import { BASE_URL } from "../../constants/API";
import { GET_PERSONNEL_LISTS } from "../types/personnelTypes";

export const getPersonnelLists = () => (dispatch) => {
  return axios
    .get(`${BASE_URL}`)
    .then((response) => {
      dispatch({
        type: GET_PERSONNEL_LISTS,
        payload: response.data.results,
      });
    })
    .catch((err) => alert(err));
};
