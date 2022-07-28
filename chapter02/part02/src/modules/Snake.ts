class Snake {
    //蛇的容器
    element: HTMLElement;
    //蛇头
    head: HTMLElement;
    //蛇身
    bodies: HTMLCollection;

    constructor(){
        this.element = document.querySelector('.snake')!;
        this.head = document.querySelector('.snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //蛇的X坐标
    get X(){
        return this.head.offsetLeft;
    }
    //蛇的Y坐标
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇的X坐标
    set X(value){
        //如果新值和旧值相同 不在运行
        if(this.X === value) return;

        //X 的合法范围是0-290
        if(value < 0 || value >290) throw new Error("蛇撞墙啦！");

        //修改X 时 蛇向右走则不能向左走，反之  逻辑： 判断蛇头的坐标是否和下一节坐标相同
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //如果蛇向右走 想要向左走 则继续向右走
            if(value > this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

        //身体的移动
        this.moveBody();

        this.head.style.left = value +'px';

        //检查蛇是否装到自己
        this.checkHeadBody();
    }
    //设置蛇的Y坐标
    set Y(value){
        //如果新值和旧值相同 不在运行
        if(this.Y === value) return;

        //Y 的合法范围是0-290
        if(value < 0 || value >290) throw new Error("蛇撞墙啦！");

        //修改Y 时 蛇向上走则不能向下走，反之  逻辑： 判断蛇头的坐标是否和下一节坐标相同
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            //如果蛇向右走 想要向左走 则继续向右走
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }

        //身体的移动
        this.moveBody();

        this.head.style.top = value +'px';

        //检查蛇是否装到自己
        this.checkHeadBody();
    }
    //蛇身增加的方法
    addBody(){
        //创建div节点
        let newDiv: HTMLElement = document.createElement("div");
        //在蛇的容器内添加 div标签
        this.element.insertAdjacentElement("beforeend",newDiv);
    }
    //蛇身体移动的方法
    moveBody(){
        /**
         *  原理： 后面一节的身体等于上一节的身体
         *          第四节 = 第三节；
         *          第三节 = 第二节
         *          ...
         */
        //获取所有的身体
        for(let i = this.bodies.length - 1; i>0; i--){
            //获取前一节身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            //将前一节的身体赋予上一节身体
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    //检查蛇是否装到自己
    checkHeadBody(){
        //逻辑：判断蛇头的坐标适合身体的坐标相同
        //获取所有蛇的身体
        for(let i=1;i<this.bodies.length;i++){
            if(this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop){
                throw new Error("蛇撞到自己啦!");
            }
        }
    }
}

export default Snake;