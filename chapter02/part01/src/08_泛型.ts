/**
 *  当属性不明确时 可以使用泛型
 */

//定义了一个泛型 T 返回值也为T
function fu<T>(a: T):T{
    return a;
};

fu<number>(123);

function fu2<T,K>(a: T,b: K): T{
    console.log(b);
    return a;
}

fu2<number,string>(123,'123');

interface Inter{
    length: number;
}

function fn3<T extends Inter>(name: T): number{
    return name.length;
}

//泛型类 指定泛型的类型
class D<T>{
    name: T
    constructor(name: T){
        this.name = name;
    }
}

const d = new D(123);
