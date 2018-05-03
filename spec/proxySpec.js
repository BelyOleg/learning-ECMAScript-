/**
 * Created by Bely Oleg on 02.05.2018.
 */

'use strict';

describe('test proxy', function() {
    it('get/set', function() {
        class User {
            constructor(firstName, lastName){
                this.firstName = firstName;
                this.lastName = lastName;
            }

            getFullName(){
                return `${this.lastName} ${this.firstName}`
            }
        }

        let user1 = new User('ivan', 'ivanov');

        expect(user1.getFullName()).toEqual('ivanov ivan');

        let proxy = new Proxy(user1, {
            get(target, prop) {
                if(prop === 'firstName'){
                    return 'proxy firstName';
                } else {
                    return target[prop];
                }
            },
            set(target, prop, value) {
                target[prop] = value;
                return true;
            }
        });

        expect(proxy.firstName).toEqual('proxy firstName');

        proxy.lastName = 'doe';

        expect(proxy.lastName).toEqual('doe');
        expect( proxy.getFullName()).toEqual('doe proxy firstName');
    });

    it('apply', function() {
        let sum = (a, b) => a + b;

        expect(sum(1, 2)).toEqual(3);

        let proxy = new Proxy(sum, {
            apply: function(target, thisArg, argumentsList) {
                return 'proxy value';
            }
        });

        expect(proxy(1, 2)).toEqual('proxy value');
    });
});