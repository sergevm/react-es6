"use strict";

import routing from './routing.js'

import express from 'express';

let app = express();
routing(app);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});