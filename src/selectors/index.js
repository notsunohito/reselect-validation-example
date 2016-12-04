const {
    createSelector,
    createStructuredSelector
} = require('reselect');
const validator = require('./validator');


const nameSelector = createSelector(
    (state)=> state.name,
    (name)=> validator.name(name)
)

const zipCodeSelector = createSelector(
    (state)=> state.zipCode,
    (zipCode)=> validator.zipCode(zipCode)
)

const addressSelector = createSelector(
    (state)=> state.address,
    (address)=> validator.address(address)
)

// zipCode, address, telすべてOKならOK
const summarySelector = createSelector(
    nameSelector,
    zipCodeSelector,
    addressSelector,
    (name, zipCode, address)=> [zipCode, address, name].every((value)=> value === 'OK') ? 'OK' : 'ERROR'
)

// どのプロパティにどのselectorを対応させるかをここで設定
const rootSelector = createStructuredSelector({
    summary: summarySelector,
    name: nameSelector,
    zipCode: zipCodeSelector,
    address: addressSelector
})


module.exports = rootSelector;
