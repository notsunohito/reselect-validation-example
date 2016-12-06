import {actionTypes} from '../constants'


const initialState = {
    name: '株式会社Socket',
    zipCode: '107-0062',
    address: '東京都港区南青山'
}

function rootReducer(state= initialState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_NAME: return Object.assign({}, state, {name: action.name})
        case actionTypes.CHANGE_ZIP_CODE: return Object.assign({}, state, {zipCode: action.zipCode})
        case actionTypes.CHANGE_ADDRESS: return Object.assign({}, state, {address: action.address})
        case actionTypes.CLEAR_ALL: return Object.assign({}, state, {name: '', zipCode: '', address: ''})
        default:
            return state
    }
}

module.exports = rootReducer
