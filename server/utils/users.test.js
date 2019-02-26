let expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node Course'
            }
        ]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '1',
            name: 'Archie',
            room: 'Test'
        };

        let resUser = users.addUser('1', 'Archie', 'Test');
        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        let userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        let userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user for non existing users', () => {
        let userId = '99';
        let user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user by id', () => {
         let userId = '2';
         let user = users.getUser('2');
         expect(user.id).toBe(userId);
    });

    it('should not find user that does not exist', () => {
        let userId = '99';
        let user = users.getUser(userId);
        expect(user).toNotExist();
    });


});
