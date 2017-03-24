import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter,Route} from 'react-router-dom'
import reducer from './reducer/reducer'
import Main from './component/Main1.js'
import {ipcRenderer} from 'electron'

const initState={
    music:{
        curMusic:null,
        curIndex:-1,
        musicList:[],
        curTime:0,
        duration:1,
        status:''
    }
}

const store=createStore(reducer,initState,applyMiddleware(thunkMiddleware))

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Main}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)