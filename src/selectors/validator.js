const {validationStatus} = require('../constants')
const {OK, ERROR_REQUIRED, ERROR_INVALID_ZIP_CODE} = validationStatus


function name(name) {
    if(name === '') return ERROR_REQUIRED
    return OK
}

function zipCode(zipCode) {
    if(zipCode === '') return ERROR_REQUIRED
    // 日本の郵便番号の形式じゃないとき
    if(!/^\d{3}-?\d{4}$/.test(zipCode)) return ERROR_INVALID_ZIP_CODE
    return OK
}

function address(address) {
    if(address === '') return ERROR_REQUIRED
    return OK
}


module.exports = {
    name,
    zipCode,
    address
}
