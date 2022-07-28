const path = require('path');
//自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//自动清除打包后的文件并覆盖
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//webpack所有配置都写在这里
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包后的文件所在目录
    output: {
        path: path.resolve(__dirname,'dist'),
        //打包后的文件路径
        // path: "./dist",
        //打包后的文件名为
        filename: "bundle.js"
    },

    //指定webpack打包时要用的模块
    module: {
        //指定加载时的规则
        rules: [
            {
                //test指定的是生效的文件
                test: /\.ts$/,
                //使用loader
                use: 'ts-loader',
                //要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    //配置webpack插件
    plugins: [
        //自动生成html文件
        new HtmlWebpackPlugin({
            //设置html文件的标题
            // title: '作者是我',

            //根据指定html模板生成 
            template: './src/index.html',
        }),
        //自动清除打包文件并覆盖
        new CleanWebpackPlugin(),
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts','.js'],
    }
}