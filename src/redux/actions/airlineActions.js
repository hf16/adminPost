import axios from "axios";
import { GET_ALL_AIRLINE } from "../types";

export const getAllAirline = () => async (dispatch) => {
  try {
    const { token } = localStorage.getItem("token");

    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/airlines/all`,
      {
        headers: { token },
      }
    );
    dispatch({
      type: GET_ALL_AIRLINE,
      payload: result.data,
    });
  } catch (error) {
    throw error;
  }
};
