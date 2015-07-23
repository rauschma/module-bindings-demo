//------ lib.js ------
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.incMutableValue = incMutableValue;
var mutableValue = 3;
exports.mutableValue = mutableValue;

function incMutableValue() {
    exports.mutableValue = mutableValue += 1;
}