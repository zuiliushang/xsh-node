# Redux
Redux是一个Javascript应用的可见的状态容器。

它可以帮助编写运行在不同的环境(client,server和native)的应用并且拥有相同的举动。并且容易测试。最重要的是，Redux提供一个最好的开发经验。例如实时代码编辑器绑定一个time traveling debugger。

可以使用Redux和React一起或者其它的视图库。

很小(2kb,包含依赖)

## 开发人员的经验

是创建一个具有最小API但完全可预测的行为的状态管理库，因此可以实现日志记录、热重加载、时间旅行、通用应用程序、记录和重播，而不需要开发人员的任何支持。

## 安装

安装稳定版本:
<pre>
npm install --save redux
</pre>

默认使用npm作为包管理。

更多是将Redux作为一个CommonJS模块的集合。这些模块可以通过引入redux到一个Webpack，Browserify或者一个Node环境。如果使用在edge并且使用Rollup,也能很好支持。

## 补充其他依赖包

更多时候,可能需要```react binding```和```developer tools```。
<pre>
npm install --save react-redux
npm install --save-dev redux-devtools
</pre>
注意不像Redux本身，很多包在Redux生态系统不会提供UMD创建。所以建议使用CommonJS模板建立比如	```Webpack```和```Browserify```来得到更舒适的体验。

## 要旨

应用的整个状态都存储在一个简单存储的对象树里。
唯一的方法来改变状态树是编辑一个```action```，