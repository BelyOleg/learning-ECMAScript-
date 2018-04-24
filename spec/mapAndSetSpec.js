/**
 * Created by Bely Oleg on 24.04.2018.
 */

'use strict';

describe('test maps and sets', function() {

    it('map', function () {
        let map = new Map(),
            objectKey = {key: '1'};

        map.set('key1', 'value1');
        map.set(1, 2);
        map.set(objectKey, 'object');

        expect(map.size).toEqual(3);
        expect(map.get(1)).toEqual(2);
        expect(map.get(objectKey)).toEqual('object');
        expect(map.has(objectKey)).toBeTruthy();
        expect(map.delete(objectKey)).toBeTruthy();

        let keys = map.keys();

        expect(keys.next().value).toEqual('key1');
        expect(keys.next().value).toEqual(1);

        let values = map.values();

        expect(values.next().value).toEqual('value1');
        expect(values.next().value).toEqual(2);

        let entities = map.entries();

        expect(entities.next().value).toEqual([ 'key1', 'value1' ]);

        map.clear();

        expect(map.size).toEqual(0);
    });

    it('set', function () {
        let set = new Set(),
            objectKey = {key: '1'};

        set.add('value1');
        set.add('value1');
        set.add(1);
        set.add(1);
        set.add(objectKey);
        set.add(objectKey);

        expect(set.size).toEqual(3);

        set.add({key: '1'}); // not unique

        expect(set.size).toEqual(4);
    });

    it('weakmap', function () {
        let weakMap = new WeakMap(),
            users = [{name: 'ivan'}, {name: 'john'}];

        weakMap.set(users[0], 1);

        expect(function () {
            weakMap.set('field', 'value'); //only objects
        }).toThrow();

        weakMap.set(users[1], 2);

        expect(weakMap.has(users[0])).toBeTruthy();
        expect(weakMap.has(users[1])).toBeTruthy();

        users.splice(0, 1);

        expect(users.length).toEqual(1);

        jasmine.clock().install();

        setTimeout(function () {
            expect(weakMap.has(users[0])).toBeTruthy();
            expect(weakMap.has(users[1])).toBeFalsy();
            console.log('like after GC job');
        }, 100);

        jasmine.clock().tick(101);

        jasmine.clock().uninstall();
    });

});