//字面量  | 表示或的意思
let a: 123 | '123';
let b:true | 132;

//any数据类型  会使自己的ts语法检查关闭 同时也会影响他人（尽量别用）
let c: any; 
c = 123;
c = '132';
c = true;

//unknown ：未知的数据类型  类似any  只是安全类型的any
let d: unknown;
d = 'string';
d = 123;
d = true;

//void  函数没有返回值 
function fu(): void{
    console.log('你好啊');
}

//never  函数永远不会有返回值
function fu2(): never{
    throw new Error("出错啦");
}