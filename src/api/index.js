'use strict';

import { Router } from 'express';
import { version } from '../../package.json';
import { register } from './register';
import { listUsers } from './admin';


export default (config) => {
    let api = Router();

    api.get('/', (req, res) => {
        res.json({ version, server: config.serverName });
    });

    api.post('/register', register);
    api.get('/user', listUsers);

    api.get('*', (req, res) => {
        console.log("unsupported route (GET)", req.url );
        res.status(404).send();
    });

    api.post('*', (req, res) => {
        console.log("unsupported route (POST)", req.url );
        res.status(404).send();
    });

    return api;
}
