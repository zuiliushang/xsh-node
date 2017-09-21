# QuickStart

好工具比自己动手做任何事情让应用开发更加快速并且容易。

```Angular CLI```是一个用来创建项目、添加文件、并且执行各种持续的开发任务，如测试、捆绑和部署的命令行接口工具。

这个向导主要是在TypeScript上运行一个简单的Angular应用,使用Angular CLI这遵循对每个Angular项目都有好处。

在本章末尾，您将对CLI的开发有一个基本的理解，并为这些文档示例和实际应用程序提供基础。

## 第一步.建立开发环境

在做任何事情之前需要先搭建自己的开发环境

安装```Node.js® and npm```如果没有

> 确定node版本至少为6.9.x npm 3.x.x 

全局安装```Angular Cli```

## 第二步.创建一个新项目

打开一个命令窗口。

通过下面命令生成一个新项目和应用的骨架:
<pre>
ng new my-app
</pre>

> 耐心等待。它花费时间来建立一个新项目。很多它需要的npm packages会被安装。

### 第三步 Serve the application

进入项目的目录并且开启服务

<pre>
cd my-app
ng serve --open
</pre>