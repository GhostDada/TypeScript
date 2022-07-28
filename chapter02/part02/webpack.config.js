const path = require('path');
//自动生成html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//自动清除打包后的文件并覆盖
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//webpack所有配置都写在这里
module.exports = {
    mode: "development",
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包后的文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        //打包后的文件路径
        // path: "./dist",
        //打包后的文件名为
        filename: "bundle.js"
    },

    //指定webpack打包时要用的模块
    module: {
        //指定加载时的规则
        rules: [
            //配置ts 
            {
                //test指定的是生效的文件
                test: /\.ts$/,
                //使用loader
                use: [
                    //配置babel 配置兼容性问题
                    {
                        //加载器
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //指定要兼容的浏览器
                                        targets: {
                                            // "chrome":"88"
                                        },

                                        //指定使用core-js的版本
                                        // "core-js":"3"

                                        //使用core-js的方式  "usage" 表示按需加载
                                        // "useBuiltIns":"usage",
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                //要排除的文件
                exclude: /node-modules/
            },

            //配置less
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    //引入postcss 配置兼容性问题
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
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
        // new CleanWebpackPlugin(),
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js'],
    }
}