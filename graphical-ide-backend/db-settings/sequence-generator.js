/**
 * Created by jakub on 31.12.16.
 */
const openDB = require('json-file-db');
const seqDB = openDB('./db-settings/seq.json', true, false);
const startSeqValue = 0;

const SequenceGenerator = function () {

    const getSequence = function (key) {
        let resultValue =startSeqValue;
        seqDB.getSingle(key, function (error, result) {

            console.log("getsequence error,result", error, result);
            if (error || !result) {
                seqDB.put({key, value: startSeqValue}, function (errorP) {
                    console.log(errorP);
                    return {error: errorP};
                });
                resultValue= startSeqValue;
            }
            else {
                seqDB.delete(result, function (errorD, resultD) {
                    console.log("getsequence errorD,resultD", errorD, resultD);

                    if (errorD) {
                        console.log(errorD);
                        resultValue= startSeqValue;
                    }
                    result.value = result.value ? result.value++ : startSeqValue;
                    seqDB.put(result, function (errorU) {
                        console.log("getsequence errorU", errorU);
                        return {error: errorU};
                    });
                    resultValue= result.value;
                });
            }

        });
        return resultValue;
    };
    return {
        getSequence: getSequence
    };
};

module.exports = SequenceGenerator;
