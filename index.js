"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = 6100;

global.appRoot = __dirname;

app.use(express.static('public'));

app.use(function (req, res, next) {

    let pathFolders = req.url.split('/');
    console.log(pathFolders);
    
    if (pathFolders[1] == 'js' || pathFolders[1] == 'styles' || pathFolders[1] == 'views' || pathFolders[1] == 'images' || pathFolders[1] == 'external') {
        res.status(404).send();
        console.log('^ 404 ALERT');
        return;
    }
    next();
});

app.all('*', (req, res) => {

    res.status(200)
        .set({
            'content-type': 'text/html; charset=utf-8'
        })
        .sendFile('/public/index.html', {root: global.appRoot});
});

http.listen(PORT, () => {
    console.log('Starting http server on :' + PORT);
});