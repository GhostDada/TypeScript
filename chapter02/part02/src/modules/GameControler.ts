import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
//游戏控制器
class GameController {
    snake: Snake;
    food: Food;
    scorepanel: ScorePanel;
    //存储蛇的移动方向
    direction: string = "";
    //判断蛇是否存活
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel(10,2);
        this.init();
    }

    //调用此方法，游戏既开始
    init(){
        //获取用户按下的键
        document.addEventListener('keydown',this.keydownHandler.bind(this));  //这里的this是document的 不是我们想要的
        //让蛇动起来
        this.run();
    }

    //键盘按下事件
    keydownHandler(event: KeyboardEvent){
        this.direction = event.key;
    }

    //蛇移动的方法
    run(){
        //获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        //判断用户按下什么方向
        switch(this.direction){
            //上
            case "ArrowUp" : Y -= 10;   
                break;
            //右
            case "ArrowRight" : X +=10;
                break;
            //下
            case "ArrowDown" : Y += 10;
                break;
            //左
            case "ArrowLeft" : X -= 10;
                break;
        }

        //检查蛇是吃到了食物
        this.checkEat(X,Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            //蛇撞墙了 提示框
            alert((error as any).message);
            //修改蛇的存活
            this.isLive = false;
        }

        //开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorepanel.level -1) *30);
    }

    //蛇吃到食物的方法
    checkEat(X: number,Y :number){
        if(X === this.food.X && Y === this.food.Y){
            //食物的位置充值
            this.food.change();
            //分数增加 
            this.scorepanel.addScore();
            //蛇身变长
            this.snake.addBody();
        }
    }
}

export default GameController;