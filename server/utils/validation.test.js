let expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let response = isRealString(123);
        expect(response).toBe(false);
    });

    it('should reject strings with only spaces', () => {
        let response = isRealString("    ");
        expect(response).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        let response = isRealString("hi");
        expect(response).toBe(true);
    });
});
