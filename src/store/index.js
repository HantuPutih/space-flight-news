import { createStore } from 'redux'

const initialState = {
  data: [],
  saved: [] // ini di add
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'DATA/CHANGEDATA':
      return {...state, data: payload}
      //add saved
    case 'SAVE/ADDSAVE':
      return{...state, saved: [...state.saved, payload]}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store