/**
 * Created by jakub on 10.01.17.
 */
const openDB = require('json-file-db');
const jwtToken = require('jsonwebtoken');
const moment = require('moment');
const seqDB = require("../db-settings/sequence-generator");
const project_buttonsDB = openDB('./json-db/project-buttons-db.json');
const projectDB = openDB('./json-db/project-db.json');
const fs = require('fs');

const ProjectButtonModel = {
    "id":null,
    "title":null,
    "subtitle": null,
    "icon": null,
    "description": null,
    "projectId": null,
    "userId": null
};


const create = (newButton)=> {
    let newButtonOB = Object.assign(ProjectButtonModel, newButton);
    newButtonOB.id = seqDB().getSequence('project-buttonID-seq');
    let sync = true;
    let result = null;
    project_buttonsDB.put(newButtonOB, function (err) {
        console.error("put new newButtonOB", newButtonOB, err);
        result = newButtonOB;
        sync = false;
    });
    while (sync) {
        require('deasync').sleep(100);
    }
    return result;
};

const getAll = (userId)=> {

};

const edit =(projectButtonId, userId)=>{

};