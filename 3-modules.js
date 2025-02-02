// Modules
// CommonJS, every file is module (by default), this means the file app.js in itself a module.
// Modules - Encapsulated Code, similar to a class in OOPS. (Only share minimum).
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternate_utils.js');
require('./7-mind_grenade.js');
console.log(data);

sayHi('susan');
sayHi(names.jack);
sayHi(names.john);

