(function(){
    class Animal {
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(){
            console.log('动物再叫');
        }
    }

    class Dog extends Animal {
        age: number

        constructor(age: number,name: string){
            //当对子类写了构造函数时，子类的构造函数必须对父类的构造函数进行调用
            super(name);
            this.age = age;
        }

        sayHello(): void {
            //super 表示当前子类 的父类
            super.sayHello();//调用父类的sayHello方法
        }
    }
})();