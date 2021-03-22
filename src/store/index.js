import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducerSaved from './reducers/save'
import reducerFlight from './reducers/flight'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  saved: reducerSaved,
  flight: reducerFlight,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store