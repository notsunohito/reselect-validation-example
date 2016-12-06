const {expect} = require('chai')
const rootSelector = require('../../selectors/')
const {validationStatus} = require('../../constants')
const {OK, ERROR} = validationStatus


describe('rootSelector', ()=> {
    let subject = rootSelector
    let state

    beforeEach(()=> {
        state = { name: '株式会社Socket', zipCode: '107-0062', address: '東京都港区南青山'}
    })

    it('name, zipCode, address を validaitonStatus に変換する', ()=> {
        const {name, zipCode, address} = subject(state)
        expect(name).to.equal(OK)
        expect(zipCode).to.equal(OK)
        expect(address).to.equal(OK)
    })

    describe('summary', ()=> {
        context('name, zipCode, address が すべてOK のとき', ()=> {
            it('OK', ()=> {
                const {summary} = subject(state)
                expect(summary).to.equal(OK)
            })
        })

        context('name, zipCode, address のうちひとつでも Error があるとき', ()=> {
            beforeEach(()=> {
                state.name = ''
            })

            it('OK', ()=> {
                const {summary} = subject(state)
                expect(summary).to.equal(ERROR)
            })
        })
    })

})
