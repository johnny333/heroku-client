/**
 * Created by jakub on 28.12.16.
 */
const openDB = require('json-file-db');
const jwtToken = require('jsonwebtoken');
const moment = require('moment');
const seqDB = require("../db-settings/sequence-generator");
const fs = require('fs');
const userDB = openDB('./json-db/users.json');
const sessionDB = openDB('./json-db/session.json');
const cert = "klucz";

const userService = function () {

    const UserModel = {
        "id": null,
        "email": null,
        "password": null,
        "roles": [],
        "name": null,
        "surname": null
    };

    const getUserById = function (id) {
        let sync = true;
        let result = null;
        userDB.get({id}, function (error, res) {
            result = res;
            sync = false;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    const getUserByToken = function (token) {
        let sync = true;
        let result = null;
        sessionDB.get({token}, function (error, res) {
            result = getUserById(res.id);
            sync = false;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    const register = function (newUser) {
        let userOB = Object.assign(UserModel, newUser);
        userOB.id = seqDB().getSequence('userID-seq');
        let sync = true;
        let result = null;
        userDB.put(userOB, function (err) {
            console.error("put new user", userOB, err);
            result = userOB;
            sync = false;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    const login = function (email, password) {
        let sync = true;
        let result = null;
        userDB.getSingle({email, password},  (error, res)=> {
            if(error){
                console.info("login", error, res);
                result= error;
            }
            if(res){
                let token = jwtToken.sign(res,cert);
                addToSession( res.id,token);
                console.info("login", error, res, token);
                result = token;
            }
            sync = false;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    const addToSession= (id, token)=> {
        console.log("add to session",id,token);
        sessionDB.put({
            id:id,
            token,
            exp: moment(moment()).add(1, 'day')
        });
    };
    const verifityToken = function (token) {
        let sync = true;
        let result = null;
        jwtToken.verify({token}, cert,  (error, decoded) =>{

            sessionDB.get({token},  (error, res) =>{
                result = moment().isBefore(res.exp);
                sync = false;
            });
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    const logOut = function (token) {
        let sync = true;
        let result = null;
        jwtToken.verify(token, cert, function (error, decoded) {
            sessionDB.delete({id: decoded.id, token});
            sync = false;
            result = true;
        });
        while (sync) {
            require('deasync').sleep(100);
        }
        return result;
    };

    return {
        getUserById: getUserById,
        register: register,
        login: login,
        getUserByToken: getUserByToken,
        verifityToken: verifityToken,
        logOut: logOut
    };
};
module.exports = userService;