//constantes tipos
export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
  SET_RESTAURANT: 'restaurants/SET_RESTAURANT',
};

const initialState = {
  restaurants: [],
  restaurantSelected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //Seta lista de restaurantes
    case Types.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };
    //seta informações do restaurante selecionado
    case Types.SET_RESTAURANT:
      return { ...state, restaurantSelected: action.payload };
    //Retorna estado inicial
    default:
      return state;
  }
}
//Seta lista de restaurantes
export function setRestaurants(restaurants) {
  return {
    type: Types.SET_RESTAURANTS,
    payload: restaurants,
  };
}
//seta informações do restaurante selecionado
export function setRestaurant(restaurant) {
  return {
    type: Types.SET_RESTAURANT,
    payload: restaurant,
  };
}
