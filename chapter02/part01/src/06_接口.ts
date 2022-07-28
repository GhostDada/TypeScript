(function(){
     /**
      *  接口 interface ： 用来规范类的结构
      */


     //定义一个接口  接口中的属性和方法都是用来约束结构的，没有实际值
     interface myInterface {
        name: string;
        sayHello(): void;
     }

     /**
      *  定义一个类并且实现接口
      *     实现接口 ：就是使类满足接口的需求
      */
     class Animal implements myInterface {
        name: string;

        constructor(name: string){
            this.name = name;
        }

        sayHello(): void {
            
        }
     }
})();