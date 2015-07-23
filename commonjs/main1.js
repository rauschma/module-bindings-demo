//------ main1.js ------
var mutableValue = require('./lib').mutableValue;
var incMutableValue = require('./lib').incMutableValue;

// The imported value is a (disconnected) snapshot
console.log(mutableValue); // 3
incMutableValue();
console.log(mutableValue); // 3

// The imported value can be changed
mutableValue++;
console.log(mutableValue); // 4
