import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootRedusers  from './root-redusers';

export default  function configureStore(initialState){
    return createStore(
        rootRedusers,
        initialState,
        applyMiddleware(thunk)
    )
}