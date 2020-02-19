import {get} from 'lodash-es';
import add from './add.js';
import multiply from './multiply.js';

const myObject = {
  aaa: 'bbb'
};

console.log(get(myObject, 'aaa'));

console.log(add(1, 2));
console.log(multiply(1, 2));
