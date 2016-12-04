const {actionTypes} = require('../constants');


function changeName(name) {
    return {
        type: actionTypes.CHANGE_NAME,
        name: name
    };
}

function changeZipCode(zipCode) {
    return {
        type: actionTypes.CHANGE_ZIP_CODE,
        zipCode: zipCode
    };
}

function changeAddress(address) {
    return {
        type: actionTypes.CHANGE_ADDRESS,
        address: address
    };
}


module.exports = {
    changeName,
    changeZipCode,
    changeAddress
}
