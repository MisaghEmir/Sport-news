const initialState = {
  scroll: 0,
  login: false,
};

export const toolsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "setscroll":
      return {
        ...state,
        scroll: action.value,
      };
    case "login":
      return {
        ...state,
        login: true,
      };

    default:
      return state;
  }
};
