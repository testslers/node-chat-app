let expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Admin';
        let text = 'Welcome';
        let msg = generateMessage(from, text);
        console.log(msg);
        expect(msg.createdAt).toBeA('number');
        expect(msg).toInclude({
            from, text
        });
    })
});