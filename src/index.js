import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'src/styles/index.css'
import 'nprogress/nprogress.css'
import registerServiceWorker from './registerServiceWorker';
import Router from './router'
import store from './store'

import initReactFastclick from 'react-fastclick'
initReactFastclick() // 解决IOS onClick不生效

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router/>
        </div>
    </Provider>
    , document.getElementById('root'))
registerServiceWorker();



