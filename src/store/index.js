import { createStore } from 'redux';
import reducer from './reducer'

// 1.先创建store实体，
// 2.创建reducer，当作一个“约定备忘录”，去看store/reducer.js
// 3.把reducer传到这边来
const store = createStore(reducer); // 还可以接受一个Chrome的插件参数，用来调试

export default store;