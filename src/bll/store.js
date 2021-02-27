import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "./postsReducer";
import {usersReducer} from "./usersReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'


const reducers = combineReducers({
    users: usersReducer,
    posts: postsReducer,
});
const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage, // define which storage to use
}



const persistedReducer = persistReducer(persistConfig, reducers)



const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)));

const  persistor = persistStore(store);

export {store,persistor};
