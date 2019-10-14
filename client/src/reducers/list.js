const initilaState = {
  data: [],
  onLoading: false,
  isError: false
};
export const list = (state = initilaState, action) => {
  switch (action.type) {
    case "USER_LIST_SUCCESS":
      return { ...state, data: [...action.payload], onLoading: false };
    case "USER_LIST_LOADING":
      return { ...state, onLoading: true };
    case "USER_LIST_ADD":
      return { ...state, data: [...state.data, action.payload] };
    case "USER_LIST_DELETE":
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};
