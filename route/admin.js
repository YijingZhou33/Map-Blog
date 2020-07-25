const express = require('express');

const admin = express.Router();

admin.get('/', require('./admin/loginPage'));

admin.get('/login', require('./admin/loginPage'));

admin.get('/user', require('./admin/userPage'));

admin.get('/user-edit', require('./admin/user-edit'));

admin.post('/login', require('./admin/login'));

admin.get('/logout', require('./admin/logout'));

admin.post('/user-edit', require('./admin/user-edit-fn'));

admin.post('/user-modify', require('./admin/user-modify'));

admin.get('/delete', require('./admin/user-delete'));

admin.get('/article', require('./admin/article'));

admin.get('/article-edit', require('./admin/article-edit'));

admin.post('/article-add', require('./admin/article-add'));

admin.post('/article-modify', require('./admin/article-modify'));

admin.get('/article-delete', require('./admin/article-delete'));

module.exports = admin;