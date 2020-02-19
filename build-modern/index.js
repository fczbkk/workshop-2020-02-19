"use strict";

const {
  get
} = require('lodash');

const add = require('./add.js');

const myObject = {
  aaa: 'bbb'
};
console.log(get(myObject, 'aaa'));
console.log(add(1, 2));