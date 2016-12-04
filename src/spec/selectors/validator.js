const {expect} = require('chai');
const validator = require('../../selectors/validator');

describe('validator', ()=> {

    describe('name', ()=> {
        let subject = validator.name

        describe('引数', ()=> {
            it('空 だと ERROR', ()=>{
                expect(subject('')).to.equal('ERROR')
            })

            it('値があれば OK', ()=> {
                expect(subject('株式会社Socket')).to.equal('OK')
            })
        })
    })

    describe('zipCode', ()=> {
        let subject = validator.zipCode

        describe('引数', ()=> {
            it('空 だと ERROR', ()=>{
                expect(subject('')).to.equal('ERROR')
            })

            it('/^\d{3}-?\d{4}$/ でないと ERROR', ()=> {
                expect(subject('0123-456')).to.equal('ERROR')
                expect(subject('01-23456')).to.equal('ERROR')
                expect(subject('012345')).to.equal('ERROR')
                expect(subject('01234567')).to.equal('ERROR')
                expect(subject('012345a')).to.equal('ERROR')
            })

            it('/^\d{3}-?\d{4}$/ だと OK', ()=> {
                expect(subject('012-3456')).to.equal('OK')
                expect(subject('0123456')).to.equal('OK')
            })
        })
    })

    describe('address', ()=> {
        let subject = validator.address

        describe('引数', ()=> {
            it('空 だと ERROR', ()=>{
                expect(subject('')).to.equal('ERROR')
            })

            it('値があれば OK', ()=> {
                expect(subject('東京都港区南青山')).to.equal('OK')
            })
        })
    })

})
