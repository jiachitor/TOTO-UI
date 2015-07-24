
# 代码说明

### 1.关于 npm 的 scripts 方法
  这个方法在 npm install 模块全部安装完毕之后执行，当然也可以同个 shell 命令独立执行。所以在项目源码并不存在lib 这个目录，lib 目录是用户安装这个项目模块的时候生成，用于保存 babel 编译完成之后的文件。
   
### 2.关于 eslint 
  eslint 用于检测代码规范，支持 jsx 语法（目前需要 eslint-plugin-react 插件支持）。使用 .eslintrc 文件进行检测规则配置。

### 3.编译就是文件
```sh
npm install 
```
或者
 ```sh
 npm run prepublish
 ```
