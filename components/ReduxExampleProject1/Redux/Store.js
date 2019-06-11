import { createStore } from 'redux';
import reducer from './Reducers/Reducers';

const Store = createStore(reducer)
export default Store