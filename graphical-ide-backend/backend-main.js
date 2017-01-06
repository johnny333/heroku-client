/**
 * Created by jakub on 28.12.16.
 */
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const UserService = require("./user/user-main");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Engaged-Auth-Token');
    next();
};
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/home/test', function(req, res) {
    res.send("test");
});
app.post('/api/home/register', function(req, res) {
    console.log("bije",req.body);
    UserService().register(req.body);
    res.send(req.body);
});
app.post('/api/home/login', function(req, res) {
    console.log("bije",req.body.email,req.body.password);
    let loginValue=UserService().login(req.body.email, req.body.password);
    res.send(loginValue);
});
    app.listen(process.env.PORT||9001,function () {

    console.log("server is up")
});
