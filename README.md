
# TOTO UI
基于react 的 UI库。
目前版本借鉴与 [Amaze UI React][amazeui-react]。
 
 **规范及工具**：
 
 - [React 编码规范](https://github.com/Minwe/style-guide/blob/master/React.js.md)
 - [React JetBrains 编辑器 Live Templates](https://github.com/Minwe/jetbrains-react)

## 开发及构建

### 目录结构

```
├── package.json
├── lib          # 构建目录
├── example          # 使用案例
├── src           # 组件源文件（JSX）
├── ui           # 组件样式文件(SASS)
```

### 开发及文档

```
npm install
```

### 案例开发 ，进入 example 目录下

```
gulp watch
```
 
# Dist / Build
On production use files (JS and CSS) only from `lib/` folder, there will be the most stable versions, `src/` folder is only for development purpose

### Build

Swiper uses `gulp` to build a development (build) and dist versions.

First you need to have `gulp-cli` which you should install globally.

```
$ npm install --save totoui
```

##### 其他说明
1.关于 npm 的 scripts 方法：
    这个方法在 npm install 模块全部安装完毕之后执行，当然也可以同个 shell 命令独立执行。所以在项目源码并不存在lib 这个目录，lib 目录是用户安装这个项目模块的时候生成，用于保存 babel 编译完成之后的文件。
2.关于 eslint： 
    eslint 用于检测代码规范，支持 jsx 语法（目前需要 eslint-plugin-react 插件支持）。使用 .eslintrc 文件进行检测规则配置。

##### 使用gulp 4.0

```
# 如果安装过全局的 gulp 的话先卸载之
$ npm uninstall gulp -g

# 安装全局的 gulp 4.0
$ npm install "gulpjs/gulp#4.0" -g

# 到项目目录里删掉本地的 gulp
$ npm rm gulp --save-dev

# 安装本地的 gulp 4.0
$ npm install "gulpjs/gulp#4.0" --save-dev
```

