/**
 * Created by jakub on 31.12.16.
 */
const openDB = require('json-file-db');
const Promise = require('promise');
const seqDB = openDB('./db-settings/seq.json');

const seqModel = {
    id: null,
    value: null
};

const SequenceGenerator = function () {
    let startSeqValue = 1;
    const getSequence = function (id) {
        let resultValue = null;
        let sync = true;
        seqDB.getSingle({id}, function (error, result) {
            console.log("getsequence error,result", error, result);
            if (error || !result) {
                seqDB.put({id, value: startSeqValue}, function (errorP) {
                    console.log("errorP", errorP);
                    resultValue = startSeqValue;
                    sync = false;
                });
            }
            else {
                seqDB.put({id: result.id, value: result.value+1}, function (errorU) {
                    console.log("getsequence errorU", errorU, result);
                    resultValue = result.value+1;
                    sync = false;
                });
            }
        });

        while (sync) {
            require('deasync').sleep(100);
        }
        console.log("exit");
        return resultValue;
    };

    return {
        getSequence: getSequence
    };
};

module.exports = SequenceGenerator;
