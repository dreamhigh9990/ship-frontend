import { PROFILE_ERROR, PROFILE_SUCCESS, EDIT_PROFILE, RESET_PROFILE_FLAG, GET_PROFILE, PROFILE_UPDATE_SUCCESS } from "./actionTypes";

const initialState = {
  error: "",
  success: "",
  myinformation:null,
  update: "",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      state = { ...state };
      break;
    case GET_PROFILE:
      state = {...state }
      break;
    case PROFILE_SUCCESS:
      state = { ...state, myinformation: action.payload, success: true};
      break;
    case PROFILE_UPDATE_SUCCESS:
      state = {...state, myinformation: action.payload, update: true};
      break;
    case PROFILE_ERROR:
      state = { ...state, error: action.payload, success: false};
      break;
    case RESET_PROFILE_FLAG:
      state = { ...state, success: null, update: null};
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default profile;
