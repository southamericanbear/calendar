import { types } from "../types/types";

const initalSate = {
  checking: true,
  uid: null,
  name: null,
};

export const authReducer = (state = initalSate, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case types.authCheckinFinish:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
