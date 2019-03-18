import { combineReducers} from 'redux';
import promocodeReducer from './promoCodeReducer';

export default combineReducers({
    promoCode: promocodeReducer
});