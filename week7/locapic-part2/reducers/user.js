const SET_NICKNAME = 'SET_NICKNAME';

const initialState = {
    nickname: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_NICKNAME:
        return {
          ...state,
          nickname: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  export { SET_NICKNAME }