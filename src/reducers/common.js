import { handleActions } from 'redux-actions'

const configState = {
  loading: {
    show: false
  }
}
export const config = handleActions ({
  SHOW_LOADING: state => {
    state.loading.show = true
    return {...state}
  },
  HIDE_LOADING: state => {
    state.loading.show = false
    return {...state}
  }
}, configState)