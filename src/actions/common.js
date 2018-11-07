import { createAction } from 'redux-actions'
// 显示Loading
export const showLoading = createAction ('SHOW_LOADING')
// 隐藏Loading
export const hideLoading = createAction ('HIDE_LOADING')