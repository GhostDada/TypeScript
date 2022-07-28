// oject对象 
let a: object;
a = {};
a = function(){};

// {} 指定对象包含哪些属性
//语法 {属性名：属性值,属性名：属性值}
// 在属性名后加上? 表示可选
let b: {name: string,age?: number};
b = {name:'你好啊',age:18};
b = {name:'梁兆浩'}

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name:'a',age:21,gender:'男'};

//指定函数结构的类型
let e: (a: number,b: number)=>number;
e = function(a,b){
    return a+ b;
}

//数组数据类型的定义 1. 类型[]  2.Array<类型>

//表示字符串数组
let f: string[]
f = ['123','123'];

//表示数值数组
let g: number[];
g = [123,123];

// Array<string> 表示字符串数组
let i: Array<string>;
i = ['123','123'];

//元组 固定长度的数组
let j: [name: string,age: number];
j = ['123',123];

//枚举 enum
enum Gender{
    male,//男
    female,//女
}
let k: {name: string,age: number,gender: Gender}
k = {name:'梁兆浩', age: 21, gender: Gender.male};


// & 表示同时
let l: {name:string} & {age: number};
l = {name:'a',age: 123};

// 类型的别名
type myType = 1 | 2 | 3 | 4;
let n:myType;
n = 1;
