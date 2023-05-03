const SET_NICKNAME = 'SET_NICKNAME';
const ADD_CITY = 'ADD_CITY' ;
const REMOVE_CITY = 'REMOVE_CITY' ;



const initialState = {
    nickname: "",
    cities: [],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_NICKNAME:
        return {
          ...state,
          nickname: action.payload,
        };
        case 'ADD_CITY':
      return {
         ...state, cities: [...state.cities, action.payload]
         };
    case 'REMOVE_CITY':
      return {
         ...state, cities: state.cities.filter(city => city.name !== action.payload) 
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  export { SET_NICKNAME, ADD_CITY, REMOVE_CITY };