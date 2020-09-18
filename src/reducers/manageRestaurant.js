import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action){
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.payload
            }
            return [...state, restaurant]
        case 'DELETE_RESTAURANT':
            const restaurants = state.filter(restaurant => restaurant.id !== action.id)
            return { restaurants }
        default: 
            return state
    }
}
