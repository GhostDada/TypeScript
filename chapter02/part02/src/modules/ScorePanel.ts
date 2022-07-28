// 记分牌类
class ScorePanel {
    score = 0; //记录分数
    level = 1; //记录登记

    scoreElement: HTMLElement; //分数的节点
    levelElement: HTMLElement; //等级的节点

    maxLevel: number;//限制最大等级的变量
    upScore: number;//提升等级的分数

    constructor(maxLevel = 10, upScore = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分的方法
    addScore() {
        this.scoreElement.innerHTML = ++this.score + '';

        //分数为10的倍数时 等级提升
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    //等级提升的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;
//测试
// const sp = new ScorePanel();

// for(let i = 0;i<20;i++){
//     sp.addScore();
// }