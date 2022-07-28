"use strict";
//  使用class 关键字定义一个类  主要包括属性和方法
class Person {
    constructor() {
        this.age = 21;
    }
    //方法
    sayHello() {
        console.log('hello');
    }
}
/**
 * 1.定义一个实例属性  name = xxx;
 * 2.定义一个静态属性  static name = xxx;
 */
//属性
// name = '梁兆浩';
Person.sex = '男';
const person = new Person();
// console.log(person.name);
console.log(Person.sex);
