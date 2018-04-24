/**
 * Created by Bely Oleg on 24.04.2018.
 */

'use strict';

describe('test iterators', function() {

    it('iterate arrays', function () {
        let arr = [1, 2, 3];
        let counter = 0;

        for(let item of arr){
            expect(item).toEqual(arr[counter++]);
        }
    });

    it('iterate arrays', function () {
        let arr = [1, 2, 3];
        let counter = 0;

        for(let item of arr){
            expect(item).toEqual(arr[counter++]);
        }
    });


});