import {
  GET_USERS,
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./actionType";

const INIT_STATE = {
  userList: [],
};

const Users = (state = INIT_STATE, action) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_USERS:
          return {
            ...state,
            userList: action.payload.data,
          };

        default:
          return { ...state };
      }

    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_USERS:
          return {
            ...state,
            error: action.payload.error,
          };

        default:
          return { ...state };
      }

    case GET_USERS: {
      return {
        ...state,
      };
    }

    case ADD_USER_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };

    case ADD_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        userList: state.userList.map(user =>
          user.id.toString() === action.payload.id.toString()
            ? { user, ...action.payload }
            : user
        ),
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        userList: state.userList.filter(
          user => user.id.toString() !== action.payload.id.toString()
        ),
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default Users;