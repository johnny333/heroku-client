/**
 * Created by jakub on 28.12.16.
 */
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(9000,function () {

});

io.on("connection",function (socket) {
   socket.on("news",function (news) {
      socket.emit("news",{news:"news1"});
   });
});