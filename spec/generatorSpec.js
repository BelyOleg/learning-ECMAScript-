/**
 * Created by Bely Oleg on 02.05.2018.
 */

'use strict';

describe('test generators', function() {
    it('function without return', function() {

        function* generateNumber  () {
            yield 1;
            yield 2;
            yield 3;
        }

        let generator = generateNumber();

        expect(generator.next()).toEqual({value: 1, done: false});
        expect(generator.next().value).toEqual(2);
        expect(generator.next().done).toBeFalsy();

        let lastResult = generator.next();

        expect(lastResult.done).toBeTruthy();
        expect(lastResult.value).toBeUndefined();
    });

    it('composition', function() {

        function* generateNumber  () {
            yield 1;
            yield 2;
            yield 3;
        }

        function* multipleGeneratedNumbers () {
            yield* generateNumber();
            yield* generateNumber();
            yield* generateNumber();

        }

        let generator = multipleGeneratedNumbers();

        expect(generator.next()).toEqual({value: 1, done: false});
        expect(generator.next().value).toEqual(2);
        expect(generator.next().done).toBeFalsy();
        expect(generator.next()).toEqual({value: 1, done: false});
        expect(generator.next().value).toEqual(2);
        expect(generator.next().done).toBeFalsy();

    });

});