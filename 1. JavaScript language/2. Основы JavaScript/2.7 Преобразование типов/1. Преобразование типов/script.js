"use strict";

const _undefined = undefined;
const nan = NaN;
const infinity = Infinity;
const num = 123;
const str123 = " 123\t";
const str123z = "123z";
const str = "";

let stringResult = {
    "undefined": String(_undefined),
    "NaN": String(nan),
    "Infinity": String(infinity),
    "123": String(num),
    "123\t": String(str123),
    "123z": String(str123z),
    "": String(str), 
};

let numberResult = {
    "undefined": Number(_undefined),
    "NaN": Number(nan),
    "Infinity": Number(infinity),
    "123": Number(num),
    "123\t": Number(str123),
    "123z": Number(str123z),
    "": Number(str), 
};

let booleanResult = {
    "undefined": Boolean(_undefined),
    "NaN": Boolean(nan),
    "Infinity": Boolean(infinity),
    "123": Boolean(num),
    "123\t": Boolean(str123),
    "123z": Boolean(str123z),
    "": Boolean(str), 
};
// alert(stringResult);