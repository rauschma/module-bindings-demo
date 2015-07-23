//------ main2.js ------
import * as lib from './lib';

// The imported value is live
console.log(lib.mutableValue); // 3
lib.incMutableValue();
console.log(lib.mutableValue); // 4

// The imported value can’t be changed
lib.mutableValue++; // TypeError
