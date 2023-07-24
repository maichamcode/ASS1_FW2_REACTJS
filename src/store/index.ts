import { legacy_createStore as createStore,applyMiddleware,compose, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { ProductReducer } from '../reducer/ProductReducer';
import { CartReduce } from '../reducer/CartReducer';



const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const rootReducer=combineReducers({
    products: ProductReducer,
    carts:CartReduce
})
const store = createStore(rootReducer,enhancer)

export default store