import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk' // 处理异步操作
const configureStore = preloadedState => createStore (
  reducer,
  preloadedState,
  compose (
    applyMiddleware (thunk),
  )
)
export default configureStore ()
