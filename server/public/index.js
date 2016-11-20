"use strict";

var _routing = require('./routing.js');

var _routing2 = _interopRequireDefault(_routing);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _routing2.default)(app);

app.listen(3000, function () {
    console.log('Listening on port 3000');
});