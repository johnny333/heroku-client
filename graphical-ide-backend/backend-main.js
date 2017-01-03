/**
 * Created by jakub on 28.12.16.
 */
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const UserService = require("./user/user-main");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/home/register', function(req, res) {
    UserService().register(req.body);
    res.send(req.body);
});
app.post('/api/home/login', function(req, res) {
    let result =UserService().login(req.body.email,req.body.password);
    res.send(result);
});

app.listen(process.env.PORT||9001,function () {

    console.log("server is up")
});
