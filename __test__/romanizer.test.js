import {transform} from "../src/ramanzier";


describe('romanizer', function () {
    it('should return X when input 10', function () {
        const tranform = transform(10);

        expect(tranform).toEqual('X');
    });
});
