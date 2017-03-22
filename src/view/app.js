import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter,Route} from 'react-router-dom'
import reducer from './reducer/reducer'
import Main from './component/Main1.js'

const initState={
    music:{
        curMusic:null,
        curIndex:-1,
        musicList:[],
        curTime:'00:00',
        duration:'00:00'
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