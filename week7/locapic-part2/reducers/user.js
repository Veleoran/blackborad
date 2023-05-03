const SET_NICKNAME = 'SET_NICKNAME';
const ADD_PLACE = 'ADD_PLACE' ;
const REMOVE_PLACE = 'REMOVE_PLACE' ;



const initialState = {
    nickname: "",
    place: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_NICKNAME:
        return {
          ...state,
          nickname: action.payload,
        };
        case 'ADD_PLACE':
      return {
         ...state, places: [...state.places, action.payload]
         };
    case 'REMOVE_PLACE':
      return {
         ...state, places: state.places.filter(place => place.name !== action.payload) 
        };
      default:
        return state;
    }
  };
  
  
  export default userReducer;
  export { SET_NICKNAME, ADD_PLACE, REMOVE_PLACE };