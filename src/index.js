import {get} from 'lodash-es';
import add from './add.js';

const myObject = {
  aaa: 'bbb'
};

console.log(get(myObject, 'aaa'));

console.log(add(1, 2));
