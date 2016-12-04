const {validationStatus} = require('../constants')
const {ERROR, OK} = validationStatus


function name(name) {
    if(name === '') return ERROR
    return OK
}

function zipCode(zipCode) {
    if(zipCode === '') return ERROR
    // 日本の郵便番号の形式じゃないとき
    if(!/^\d{3}-?\d{4}$/.test(zipCode)) return ERROR
    return OK
}

function address(address) {
    if(address === '') return ERROR
    return OK
}


module.exports = {
    name,
    zipCode,
    address
}
