import {applyMiddleware,createStore,compose} from 'redux'
import {REHYDRATE,PURGE,persistStore} from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

const middleware = []

middleware.push(thunkMiddleware)


export default function configureStore()
{
    const store = createStore(
        rootReducer,
        undefined,
        compose(applyMiddleware(...middleware))
    )

    return store;
}