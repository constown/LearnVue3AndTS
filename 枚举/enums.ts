// 数字枚举

enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up) // 0
console.log(Direction[0]) // Up
// 类似于一个数组

// 也可以手动赋值

enum Direction1 {
  Up = 10,
  Down,
  Left,
  Right
}

// 也可以赋值字符串
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RiGHT'
}

// 基本用法可以用来比较传回来的值
const value = 'UP'
if (value === Direction2.Up) {
  console.log('GO UP')
}

// 常量枚举 前面加个 const

const enum Direction3 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
const value1 = 'UP'
if (value1 === Direction3.Up) {
  console.log('GO UP')
}

// 枚举的值有两种类型 一种常量值 一种计算值 只有常量值可以用常量枚举