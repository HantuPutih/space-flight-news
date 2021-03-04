const initialState = {
  saved: []
}

export default function reducerSaved (state = initialState, { type, payload }) {
  switch (type) {
    case 'SAVE/ADDSAVE':
      return{...state, saved: [...state.saved, payload]}
  default:
    return state
  }
}
