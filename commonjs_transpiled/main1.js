//------ main1.js ------
'use strict';

var _lib = require('./lib');

// The imported value is live
console.log(_lib.mutableValue); // 3
(0, _lib.incMutableValue)();
console.log(_lib.mutableValue); // 4