const {expect} = require('chai')
const validator = require('../../selectors/validator')
const {validationStatus} = require('../../constants')
const {OK, ERROR_REQUIRED, ERROR_INVALID_ZIP_CODE} = validationStatus

describe('validator', ()=> {

    describe('name', ()=> {
        let subject = validator.name

        describe('引数', ()=> {
            it('値が空 だと ERROR_REQUIRED', ()=>{
                expect(subject('')).to.equal(ERROR_REQUIRED)
            })

            it('値があれば OK', ()=> {
                expect(subject('株式会社Socket')).to.equal(OK)
            })
        })
    })

    describe('zipCode', ()=> {
        let subject = validator.zipCode

        describe('引数', ()=> {
            it('値が空 だと ERROR_REQUIRED', ()=>{
                expect(subject('')).to.equal(ERROR_REQUIRED)
            })

            it('/^\d{3}-?\d{4}$/ でないと ERROR_INVALID_ZIP_CODE', ()=> {
                expect(subject('0123-456')).to.equal(ERROR_INVALID_ZIP_CODE)
                expect(subject('01-23456')).to.equal(ERROR_INVALID_ZIP_CODE)
                expect(subject('012345')).to.equal(ERROR_INVALID_ZIP_CODE)
                expect(subject('01234567')).to.equal(ERROR_INVALID_ZIP_CODE)
                expect(subject('012345a')).to.equal(ERROR_INVALID_ZIP_CODE)
            })

            it('/^\d{3}-?\d{4}$/ だと OK', ()=> {
                expect(subject('012-3456')).to.equal(OK)
                expect(subject('0123456')).to.equal(OK)
            })
        })
    })

    describe('address', ()=> {
        let subject = validator.address

        describe('引数', ()=> {
            it('値が空だと ERROR_REQUIRED', ()=>{
                expect(subject('')).to.equal(ERROR_REQUIRED)
            })

            it('値があれば OK', ()=> {
                expect(subject('東京都港区南青山')).to.equal(OK)
            })
        })
    })

})
