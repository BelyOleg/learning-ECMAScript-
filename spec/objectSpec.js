/**
 * Created by Bely Oleg on 23.04.2018.
 */

'use strict';

describe('test objects', function() {
    it('creation', function() {
        let a = 1,
            b = [2],
            obj = {
                a,
                b
            },
            prop = 'propName1',
            obj2 = {
                [prop]: 'value1'
            };

        expect(obj.a).toEqual(1);
        expect(obj.b).toEqual([2]);
        expect(obj2.propName1).toEqual('value1');
    });

    it('object assign', function () {
        let obj1 = {
                propA: 'valueA'
            },
            obj2 = {
                propB: 'valueB'
            };

        Object.assign(obj1, obj2);

        expect(obj1.propB).toBeDefined();
        expect(obj1.propA).toEqual('valueA');
        expect(obj1.propB).toEqual('valueB');
    });

    it('object is method', function () {
        let valueA = 'A',
            valueB = 'b',
            valueA2 = 'A';

        expect(Object.is(valueA, valueB)).toBeFalsy();
        expect(Object.is(valueA, valueA2)).toBeTruthy();
    });

    it('methods', function () {
        let obj = {
                _name: 'ivan',

                get name(){
                    return this._name;
                },

                set name(name){
                    this._name = name;
                },

                getNameUpperCase(){
                    return this._name.toUpperCase();
                }
            };

        expect(obj.getNameUpperCase()).toEqual('IVAN');
        expect(obj.name).toEqual('ivan');

        obj.name = 'john';

        expect(obj.getNameUpperCase()).toEqual('JOHN');
        expect(obj.name).toEqual('john');
    });

    it('inheritance', function () {
        let objSuper = {
            get1(){
                return 1;
            }
        }, obj = {
            getSuper1(){
                return super.get1();
            }
        }, obj2 = {
            __proto__: objSuper
        };

        Object.assign(obj2, obj);

        Object.setPrototypeOf(obj, objSuper);

        expect(objSuper.get1()).toEqual(1);
        expect(obj.getSuper1()).toEqual(1);
        expect(obj2.getSuper1()).toEqual(1);
    });

});