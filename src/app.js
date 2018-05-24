import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';

import Login from './container/login'// 只导入文件夹？
import Register from './container/register'

class App extends React.Component{
    render() {
        return (
            <div>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
            </div>
        )
    }
}

export default App
