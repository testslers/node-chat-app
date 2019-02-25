let expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Admin';
        let text = 'Welcome';
        let msg = generateMessage(from, text);
        console.log(msg);
         expect(msg.createdAt.valueOf()).toBeA('number');
        expect(msg).toInclude({
            from, text
        });
    })
});

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
       let from = 'Admin';
       let latitude = 1;
       let longitude = 2;
       let url = "https://www.google.com/maps?=1,2";
       let result = generateLocationMessage('Admin', latitude, longitude);
       console.log(result);
       expect(result).toInclude({
           from: from,
           url: url
       });

       expect(result.createdAt).toBeA('number');
   });
});