import '../node_modules/flex.css/dist/flex.css';

import './assets/second.scss';


import { Test } from './actions/userActions';


let func = (data) => {
    console.log(data);
}
let dispatch = Test();

dispatch(func);