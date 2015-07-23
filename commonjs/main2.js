//------ main2.js ------
var lib = require('./lib');

// The imported value is a (disconnected) snapshot
console.log(lib.mutableValue); // 3
lib.incMutableValue();
console.log(lib.mutableValue); // 3

// The imported value can be changed
lib.mutableValue++;
console.log(lib.mutableValue); // 4
