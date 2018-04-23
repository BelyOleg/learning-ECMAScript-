/**
 * Created by Bely Oleg on 23.04.2018.
 */

'use strict';

describe('test strings', function() {
    it('string substitution', function() {
        let a = 1,
            b = 2;

        expect(`${a} + ${b} = ${a + b}`).toEqual('1 + 2 = 3');
    });

    it('multilines', function() {
        let string = `row1
row2`;

        expect(string).toEqual('row1\nrow2');
    });

    it('tagged template', function() {
        let a = `4`;
        let b= 5;

        function taggedTemplate(strings, ...values) {
            return {
                strings: strings,
                values: values
            }
        }
        
        expect(taggedTemplate`this is ${a} and this is ${b}`).toEqual({
            strings: ['this is ', ' and this is ', ''],
            values: ['4', 5]
        })
    });

});