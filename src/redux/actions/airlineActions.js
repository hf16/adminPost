import axios from "axios";
import { GET_AIRLINE_SUCCESS } from "../types";

export const getListAirline = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/airlines`, {
      headers: { token },
    });

    dispatch({
      type: GET_AIRLINE_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    throw error;
  }
};
