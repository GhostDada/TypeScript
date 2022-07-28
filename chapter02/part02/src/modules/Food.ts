//食物类
class Food {
    //食物的属性
    element: HTMLElement;

    constructor() {
        this.element = document.querySelector('.food')!;
    }

    //X的坐标
    get X() {
        return this.element.offsetLeft;
    }
    //Y的坐标
    get Y() {
        return this.element.offsetTop;
    }
    //修改食物的坐标
    change() {
        /**
         *  生成一个随机的坐标 
         *  食物最小坐标是0  最大坐标是290  
         *  蛇移动一格为 10 
         */
        let X = Math.round(Math.random() * 29) * 10;  //随机生成一个0-29的数 再乘以10 
        let Y = Math.round(Math.random() * 29) * 10;

        this.element.style.left = X + 'px';
        this.element.style.top = Y + 'px';
    }
}

export default Food;
//测试
// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.change);