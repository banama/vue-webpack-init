import { combineReducers } from 'redux'

function incre(state= {}, action){
    switch(action.type){
        case 'plus':
            state = Object.assign({}, state)
            state.count++
            return state
        case 'reduce':
            state = Object.assign({}, state)
            state.count--
            return state
        case 'reset':
            state.count = 0
            return state
        default:
            return state
    }
}

export default combineReducers({
    incre
})
