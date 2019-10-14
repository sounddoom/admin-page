const initialState = {
  isLoading: false,
  isAuth: false
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PROCESSING":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCEED":
      return {
        ...state,
        isLoading: false,
        isAuth: true
      };
    case "LOGIN_FAILED":
      return { ...state, isLoading: false };
    case "USER_LIST_LOGOUT":
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
