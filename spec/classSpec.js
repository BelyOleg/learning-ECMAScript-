/**
 * Created by Bely Oleg on 24.04.2018.
 */

'use strict';

describe('test classes', function() {

    it('constructor', function () {
        class TestClass {
            constructor(value1, value2 = '2'){
                this.field1 = value1;
                this.field2 = value2;
            }
        }

        let testClass = new TestClass('1');

        expect(testClass.field1).toEqual('1');
        expect(testClass.field2).toEqual('2');
    });

    it('method', function () {
        class TestClass {
            constructor(){
                this.calledMethod = false;
            }

            callMethod(){
                this.calledMethod = true;
            }
        }

        let testClass = new TestClass();

        expect(testClass.calledMethod).toBeFalsy();

        testClass.callMethod();

        expect(testClass.calledMethod).toBeTruthy();
    });

    it('static method', function () {
        class TestClass {
            static callStaticMethod(){
                return 1;
            }
        }

        expect(TestClass.callStaticMethod()).toEqual(1);
    });

    it('inheritance', function () {
        class ParentClass {
            callMethod(){
                return 1;
            }
        }

        class ChildClass extends ParentClass {
            callParentMethod(){
                return super.callMethod();
            }
        }

        expect(new ChildClass().callParentMethod()).toEqual(1);
    });

});