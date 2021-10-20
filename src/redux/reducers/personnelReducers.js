import { GET_PERSONNEL_LISTS } from "../types/personnelTypes";

const initialState = {
  personnelLists: [],
};

const personnelReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PERSONNEL_LISTS:
      return {
        ...state,
        personnelLists: payload,
      };

    default:
      return state;
  }
};

export default personnelReducers;
