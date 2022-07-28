"use strict";
(function () {
    //定义一个动物父类 Animal
    class Animal {
        //构造函数
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        //方法
        sayHello() {
            console.log('动物再叫~~~');
        }
    }
    //定义一个狗类（子类） 并且继承 Animal （父类） 
    class Dog extends Animal {
        run() {
            console.log('小狗再跑');
        }
        //重写父类中已有的方法
        sayHello() {
            console.log('小狗再叫');
        }
    }
    //定义一个猫类（子类） 并且继承 Animal （父类） 
    class Cat extends Animal {
        sayHello() {
            console.log('小猫再叫');
        }
    }
    const dog = new Dog('小狗', 3);
    const cat = new Cat('小猫', 4);
    console.log(dog);
    console.log(cat);
    console.log(dog.run);
    console.log(dog.sayHello);
    console.log(cat.sayHello);
})();
