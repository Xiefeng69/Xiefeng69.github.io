# Xiefeng69.github.io

You can visit my website by clicking [here](https://xiefeng69.github.io/).

网址：`https://xiefeng69.github.io/`

or scan the QR code (supported by [caoliao](https://cli.im/)):

<img src="QRcode.png" width=40% />

<!-- ![the QR code](QRcode.png) -->

## 🔍 Technologies Stack

+ Framework: [Gatsby](https://www.gatsbyjs.com)
+ JS framework: React
+ UI framework: AntDesign
+ 响应式开发：@media / rem / AntDesign Grid component
+ CSS-in-JS: styled-component

## 🐰 Version information
+ 2021.12.2: The Version1.0 has been released!

## 🚀 Setup

step 1: Download the dependencies of the project:
```
npm install
```
step 2: Start the project, site is now running at localhost `http://localhost:8000`:
```
npm run develop
```
step 3: Build the project, the gatsby will generate `\public` folder:
```
npm run build
```
step 4: Deploy the project. In deploy step, we use **gh-pages** to deploy our pages to the github automatically. Before run deply, you need to run `Build` command.
```
npm install gh-pages --save-dev
npm run deploy
```

## 💫 Branch explaination
1. **main**: The <i>main</i> store the source code of every published version.
2. **dev**: The <i>dev</i> store the source code of development mode.
3. **master**: The <i>master</i> store the builded code after run the deploy command. The deploy command will automatically push the `\public` folder.

## 注意事项
Gatsby works with CSS Modules by default, no need for extra plugins.

```javascript
import * as styles from './[componentName].module.css'
```

关于静态图片打包关注: [here](https://blog.csdn.net/waillyer/article/details/109615281)

## 📒 Write in the last

如果有任何适配、兼容、图像清晰度、文案错误等，请您联系我进行更改，我将十分感谢🙏
