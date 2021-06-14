import { createStore } from 'redux'

const initialState = {
    personajes: []
}

const reducerFavorites = (state = initialState , action) =>{
    return state
}

export default createStore(reducerFavorites)