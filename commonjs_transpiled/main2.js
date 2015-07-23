//------ main2.js ------
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _lib = require('./lib');

var lib = _interopRequireWildcard(_lib);

// The imported value is live
console.log(lib.mutableValue); // 3
lib.incMutableValue();
console.log(lib.mutableValue); // 4