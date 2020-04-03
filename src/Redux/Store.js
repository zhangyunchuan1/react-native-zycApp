import { createStore } from 'redux'

import reducers from './Reducer/Index'

const store = createStore(reducers);

export default store;