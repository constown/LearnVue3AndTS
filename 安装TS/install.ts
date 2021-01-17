const hello = (name: string) => {
    return `hello ${name}`
}

hello('typescript')

// 类型错误会报错
// hello(123)


// 默认你已经有 node 环境并且 node >= 12

// 1.安装 typescript
// npm i -g typescript
// 安装完成后，会有一个 tsc 命令，可使用 tsc -v 查看版本
// tsc 就是增强编辑的功能，但是主流的编辑器都支持ts的功能。

// ts 编译成 js
// 终端运行 tsc [filename]