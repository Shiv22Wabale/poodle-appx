import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)

//setInterval(() => {
//  console.log(store.getState())
//}, 15 * 1000)

export default store
