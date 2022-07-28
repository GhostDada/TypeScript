class Dog {
    name: string;
    age: number;
    
    //构造函数  当创建实例时调用
    constructor(name: string,age: number){
        // this 指向当前实例
        this.name = name;
        this.age = age;
    }

    bark(){
        alert('旺旺旺');
    }
}

const dog = new Dog('小黑',3);
const dog2 = new Dog('小白',4);

console.log(dog);