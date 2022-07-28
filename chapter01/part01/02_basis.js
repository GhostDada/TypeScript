//将变量的值的类型设置为number，则只能输入number类型的值
var a;
a = 123;
//对变量直接声明同时赋值， ts会自动检测到变量的类型
var b = true;
// b = 123;会报错 因为b的类型是boolean
b = false;
//对于函数 我们可以对参数的类型进行指定类型  
// function sum(a: number,b: number){
//     return a + b;
// };
// 也可以对返回值进行类型限制
function sum(a, b) {
    return a + b;
}
sum(123, 456);
