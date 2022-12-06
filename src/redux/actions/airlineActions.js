import axios from "axios";
import { GET_AIRLINE_SUCCESS } from "../types";

// read (get)
export const getListAirline = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/airlines/all`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch({
      type: GET_AIRLINE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data.message);
  }
};


// create (post)
export const createAirline = async (body, setErrors) => {
  try {
    const token = localStorage.getItem("token")
    await axios.post(`${process.env.REACT_APP_API_URL}/airlines`, body, 
    {
      headers: {
        Authorization: `${token}`,
      },
    });
    return true;

  } catch (error) {
    setErrors(error.response.data.message);
  }
};
