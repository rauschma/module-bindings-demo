//------ main1.js ------
import { mutableValue, incMutableValue } from './lib';

// The imported value is live
console.log(mutableValue); // 3
incMutableValue();
console.log(mutableValue); // 4
