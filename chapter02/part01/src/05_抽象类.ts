(function(){
    /**
     *   abstract class 类名 表示定义了一个抽象类 
     *      抽象类只能被继承 不能修改抽象类里面的属性和方法
     */
    abstract class Animal {
        name: string;

        constructor(name: string){
            this.name = name;
        }

        /**
         *  abstract 方法名（）   表示定义了一个抽象方法 
         * 抽象方法 ： 当子类继承时 必须重写方法
         */
        abstract sayHello(): void;
    }

    class Dog extends Animal {

        sayHello(): void {
            console.log('旺旺旺');
        }
    }

    // class Cat extends Animal {
         //报错
    // }
})();