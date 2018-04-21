/**
 * Created by Bely Oleg on 21.04.2018.
 */

'use strict';

describe('test destructuring assignment', function() {
    it('array destructuring with default value', function() {
        const [a, b, c = 4] = [1, 2];

        expect(a).toEqual(1);
        expect(b).toEqual(2);
        expect(c).toEqual(4);
    });

    it('object destructuring with default value', function() {
        const obj = {
            name: 'ivan',
            age: 19
        };

        let {name, age, phone = 123} = obj;

        expect(name).toEqual('ivan');
        expect(age).toEqual(19);
        expect(phone).toEqual(123);

        name = 'john';

        expect(name).toEqual('john');
        expect(obj.name).toEqual('ivan');
    });

});