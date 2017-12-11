'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var con = new Map();

con.set('port', '3001');
con.set('staticFilePath', _path2.default.join(__dirname, "..", "public"));
exports.default = con;
