import { combineReducers } from 'redux'

function reducer( state = 0, action) {
    console.log('action页')
    return state
}

export default combineReducers({ reducer })
