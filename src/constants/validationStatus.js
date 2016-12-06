const OK = { type:'OK', hasMessage: false }
const ERROR= { type: 'ERROR', hasMessage: false }
const ERROR_REQUIRED = { type:'ERROR', hasMessage: true, message: 'Required' }
const ERROR_INVALID_ZIP_CODE = { type:'ERROR', hasMessage: true, message: 'ZipCode must satisfy /^\d{3}-?\d{4}$/' }

function isOK(status) {
    return status.type === OK.type;
}

function isERROR(status) {
    return status.type === ERROR.type;
}

module.exports = {
    OK,
    ERROR,
    ERROR_REQUIRED,
    ERROR_INVALID_ZIP_CODE,
    isOK,
    isERROR
}
