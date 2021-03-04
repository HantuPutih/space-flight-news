const initialState = {
  flight: [],
  flightLoading: false,
  detail: [],
  detailLoading: false
}

export default function reducerFlight (state = initialState, { type, payload }) {
  switch (type) {
    case 'FLIGHT/SETFLIGHT':
      return {...state, flight: payload}
    case 'FLIGHTLOADING/SETFLIGHTLOADING':
      return {...state, flightLoading: payload}
    case 'DETAIL/SETDETAIL':
      return { ...state, detail: payload }
    case 'DETAILLOADING/SETDETAILLOADING':
      return {...state, detailLoading: payload}
  default:
    return state
  }
}
