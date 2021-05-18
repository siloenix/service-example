const logic = require('../cats.logic');

const chai = require('chai');
chai.use(require('sinon-chai'))

const sinon = require('sinon');

const expect = chai.expect;

// todo: add proper tests (these not verified)
describe('Cats Logic', function () {
    beforeAll(() => {
        const doSomethingSpy = sinon.spy(logic, '_doSomething');
        doSomethingSpy.mockExecution(() => {

        })
    })

    it('should retrurn object with name', async function () {
        const result = await logic.getCats({name: 'test'})
        expect(result).to.equal({ name: 'test' })
        expect(doSomething).to.be.calledTimes(1);
    });
});
