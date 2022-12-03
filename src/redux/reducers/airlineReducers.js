import { GET_ALL_AIRLINE } from "../types";

const initialState = {
  airline: [],
};

const airlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_AIRLINE:
      return {
        ...state,
        airline: action.payload,
      };
    default:
      return state;
  }
};

export default airlineReducer;
