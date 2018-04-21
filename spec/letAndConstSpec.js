/**
 * Created by Bely Oleg on 21.04.2018.
 */

'use strict';

describe('test let', function() {
    it('let value before declaration', function() {
        expect(function () {
            return a;
        }).toThrow();

        let a = 20;
    });

    it('let outside of block', function() {
        for(let i = 0; i<10; i++) {}

        expect(function () {
            return i;
        }).toThrow();
    });

    it('let values inside and outside of block', function() {
        let a = 30;

        {
            let a = 20;
            expect(a).toEqual(20);
        }

        expect(a).toEqual(30);
    });
});