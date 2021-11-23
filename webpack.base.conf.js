const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require('vue-loader');
// const devMode = process.env.NODE_ENV !== "production";
// devMode ? "style-loader" : MiniCssExtractPlugin.loader
let htmlPageNames = [];
const fs = require('fs');
const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/' 
}
const pages = fs.readdirSync('./src/html/')
pages.forEach(page => {
    if (page.endsWith('.html')) {
        htmlPageNames.push(page.split('.html')[0])
    }
})
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new HtmlWebpackPlugin({
      template: `${PATHS.src}/html/${name}.html`, // relative path to the HTML files
      filename: `${name}.html`, // output HTML files
    //   chunks: [`${name}`] // respective JS files
    })
  });
module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app:  path.resolve(__dirname, PATHS.src)
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,//автоматически возьмет имя из entry,
        path: path.resolve(__dirname, PATHS.dist),
        // assetModuleFilename: `${PATHS.assets}img/[name][ext]`
        // publicPath: '/dist'    
    },
    stats: {
        children: true,
      },
    optimization: {
        splitChunks: {
            cacheGroups: {
                defaultVendors: {

                    filename: `${PATHS.assets}js/vendors.js`,
                    test: /node_modules/,
                    chunks: 'all',
                    // enforce: true
                }
            }
        }
    },
    // devServer: {
    //     port: 8081,
    //     client: {
    //         overlay: {
    //             errors: true,
    //             warnings: false,
    //           },
    //       },//вывод ошибок на экран сайта
    // },
   
    module: {
        rules: [
            //javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,//исключить файлы из этой папки
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            //для того чтобы в js можно было импортировать изображения
            // {
            //     test: /\.(png|jpg|jpeg|webp|svg|gif)$/,
            //     type: 'asset/resource',
            // },
            {//обработка изображений
                test: /\.(png|jpg|jpeg|webp|svg|gif)$/,
                use: [
                    /* config.module.rule('images').use('url-loader') */
                    // 'raw-loader',
                    {
                    //   loader: 'url-loader',
                    //   options: {
                    //     limit: 8192,
                    //     fallback: {
                          loader: 'file-loader',
                          options: {
                            name: `${PATHS.assets}img/[name].[ext]`,
                            esModule: false
                            // emitFile: false,
                          }
                        }
                    //   }
                    // }
                  ],
                //   type: 'asset/resource',
                //   generator: {
                //     filename: `assets/[name][ext]`
                //   }
            },
            {//обработка шрифтов
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                loader: 'file-loader',
                options: {
                    name: `[name].[ext]`,
                    outputPath: `${PATHS.assets}fonts/`
                }
            },
                //   type: 'asset/resource',
                //   generator: {
                //     filename: `assets/[name][ext]`
                //   }
            //шрифты и svg
            // {
            //     test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            //     type: 'javascript/auto',
            // },
                //scss|css
            {
                test: /\.(scss|css)$/,
                use: [
                "style-loader", 
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[local]",
                        },
                        // importLoaders: 1,
                        esModule: false,
                        sourceMap: true
                    }
                },
                {loader: 'postcss-loader',
                 options: 
                    { 
                        sourceMap: true 
                    }
                }, 
                {loader: 'sass-loader',
                 options: 
                    { 
                        sourceMap: true 
                    }
                }, 
                // 'sass-loader',
                
            ],    
            },
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, './src'), 
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({//собирает html
            template: path.resolve(__dirname, `${PATHS.src}/html/index.html`), // шаблон
            filename: `index.html`, // название выходного файла,
            // hash: true//добавление хешей к стилям и js
            // inject: false//автоподключение стилей и js
        }),
        new MiniCssExtractPlugin({filename: `${PATHS.assets}css/[name].css`}),//извлекает файлы стилей из js
        new ImageminPlugin({ disable: process.env.NODE_ENV !== 'production', test: /\.(jpe?g|png|gif|svg)$/i }),
        new copyWebpackPlugin(//копирует файлы 
            {
                patterns: [
                    {
                        from: `${PATHS.src}/assets/img`,
                        to: `${PATHS.assets}img`
                    },
                    {
                        from: `${PATHS.src}/assets/fonts`,
                        to: `${PATHS.assets}fonts`
                    },
                    {
                        from: `${PATHS.src}/static`,
                        to: ``
                    },
                ]
            }
        ),
       
        
    ].concat(multipleHtmlPlugins),
   
}