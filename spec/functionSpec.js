/**
 * Created by Bely Oleg on 21.04.2018.
 */

'use strict';

describe('test functions', function() {

    it('with default argument', function() {
        function test(a, b = 2) {
            return a + b;
        }

        expect(test(1)).toEqual(3);
        expect(test(1, 4)).toEqual(5);
    });

    it('function declaration outside of block', function() {
        {
            function functionInsideBlock() {
                return 1;
            }
        }

        expect(function () {
            return functionInsideBlock();
        }).toThrow();
    });

    it('with destructuring', function() {
        function test({a, b = 2}) {
            return a + b;
        }

        let obj = {
            a: 1
        };

        expect(test(obj)).toEqual(3);
    });

    it('with destructuring', function() {
        function test({a, b = 2}) {
            return a + b;
        }

        let obj = {
            a: 1
        };

        expect(test(obj)).toEqual(3);
    });

    it('with arrows', function() {
        let function1 = x => x + 1;

        expect(function1(1)).toEqual(2);

        let function2 = (x, y = 2) => {
            return x + y;
        };

        expect(function2(1)).toEqual(3);
    });
});