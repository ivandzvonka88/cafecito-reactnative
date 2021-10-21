import {combineReducers} from 'redux'
import {persistStore} from 'redux-persist'
import {AsyncStorage} from 'react-native'

import auth from './auth'

const rootReducer = combineReducers({
    auth:auth
})

export default rootReducer