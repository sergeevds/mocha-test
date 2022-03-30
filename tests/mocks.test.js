import assert from 'assert'
import sinon from 'sinon'


describe('sinon mocking', () => {
    const mockCallback = sinon.fake(x => 42 + x)

    before(() => {
        [0, 1].forEach(mockCallback)
    })

    it("The mock function is called twice", function () {
        assert.strictEqual(mockCallback.callCount, 2)
    });

    it("The first argument of the first call to the function was 0", function () {
        assert.strictEqual(mockCallback.getCall(0).firstArg, 0);
    });

    it("The first argument of the second call to the function was 1", function () {
        assert.strictEqual(mockCallback.getCall(1).args[0], 1);
    });

    it("The return value of the first call to the function was 42", function () {
        assert.strictEqual(mockCallback.returnValues[0], 42);
    });
})

describe('more sinon examples', () => {
    it('test stub with different returned values', () => {
        // Fakes cannot change once created with behaviour.
        const myMock = sinon.stub();

        myMock.onCall(0).returns(10);
        myMock.onCall(1).returns('x');
        myMock.returns(true);

        assert.deepEqual([
            myMock(), myMock(), myMock(), myMock()
        ], [10, 'x', true, true]);
    })
})
