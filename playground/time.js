var moment = require('moment');

// console.log(date.getMonth());
// var date = new Date();
let date = moment();
date.add(100, 'year').subtract(1, 'months');

console.log(date.format('MMMM Do, YYYY, h:mm a'));


let createdAt = 0;
let atDate = moment(createdAt);
console.log(atDate.format('MMMM Do, YYYY, h:mm a'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);