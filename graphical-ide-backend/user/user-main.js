/**
 * Created by jakub on 28.12.16.
 */
const openDB = require('json-file-db');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const seqDB = require("../db-settings/sequence-generator");
const fs = require('fs');
const userDB = openDB('./json-db/users.json', true, false);
const sessionDB = openDB('./json-db/session.json', true, false);
const cert = "klucz";

const userService = function () {

    const UserModel = {
        "id":null,
        "email": null,
        "password": null,
        "roles": [],
        "name": null,
        "surname": null
    };

    const getUserById = function (id) {
        userDB.get({id},function (error, res) {
          return res;
        });
    };

    const getUserByToken = function (token) {
        sessionDB.get({token},function (error, res) {
           if(error) return;
           return getUserById(res.id);
        });
    };

    const register = function (newUser) {
        let userOB = Object.assign(newUser, UserModel);
        userOB.id = seqDB().getSequence('userID-seq')|| "error";
        userDB.put(userOB, function (err) {
            console.error("put new user", userOB, err);
        });
    };

    const login = function (email,password) {
        userDB.get({email,password},function (error, res) {
            console.info("login",error, res);
            if(error) return {error};
            let token = jwt.sign(res, cert, { algorithm: 'RS256'});
            addToSession(res.id,token);
            return res;
        });
    };

    const addToSession = function (id,token) {
        sessionDB.put({
            id,token,
            exp:moment(moment()).add(1, 'day')
        });
    };
    const verifityToken = function (token) {
        jwt.verify(token, cert, function(error, decoded) {
            if (error) return {error};
            sessionDB.get({token},function (error,res) {
                if(error) return {error};
                if(decoded.id!=res.id) return {error:"InValid userId"};
                 return moment().isBefore(res.exp);
            });
        });
    };

    const logOut = function (token) {
        jwt.verify(token,cert,function (error, decoded) {
           if(error) return{error};
           sessionDB.delete({id:decoded.id, token});
            return true;
        });
    };

    return {
        getUserById:getUserById,
        register:register,
        login:login,
        getUserByToken:getUserByToken,
        verifityToken:verifityToken,
        logOut:logOut
    };
};
module.exports=userService;