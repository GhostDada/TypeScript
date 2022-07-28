(function(){
    class Person {
        /**
         *  属性的前面可以有修饰符
         *      public 公共 所有作用域可以访问（修改）
         *      private 私有属性 只能在当前类访问（修改） 外部若要访问（修改） 则暴露方法给外部访问
         *      protected 保护属性  只能在当前类和子类中访问（修改） 外部不可访问（修改）
         */

        private _name: string;
        private _age: number;

        constructor(name: string,age: number){
            this._name = name;
            this._age = age;
        }

        get name(){
            return this._name;
        }
        set name(value){
            this._name = value;
        }

        get age(){
            return this._age;
        }
        set age(value){
            this._age = value;
        }
    }

    const person = new Person('你好',22);

    // person.name = 'asd'; //报错
    // person.age = 12; //报错

    person.name = '123';

    class A {
        protected name: string;

        constructor(name: string){
            this.name = name;
        }
    }

    class B extends A {
        test(){
            console.log(this.name);
        }
    }

    const b = new B('123');
    // B.name = '123' 报错

    class C {
        // name: string;
        // age: number;

        // constructor(name: string,age: number){
        //     this.age = age;
        //     this.name = name;
        // }

        constructor(public name: string,public age: number){}  //等同于上面的代码
    }
})();