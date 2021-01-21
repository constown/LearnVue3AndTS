// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up
// 类似于一个数组
// 也可以手动赋值
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 10] = "Up";
    Direction1[Direction1["Down"] = 11] = "Down";
    Direction1[Direction1["Left"] = 12] = "Left";
    Direction1[Direction1["Right"] = 13] = "Right";
})(Direction1 || (Direction1 = {}));
// 也可以赋值字符串
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RiGHT";
})(Direction2 || (Direction2 = {}));
// 基本用法可以用来比较传回来的值
var value = 'UP';
if (value === Direction2.Up) {
    console.log('GO UP');
}
var value1 = 'UP';
if (value1 === "UP" /* Up */) {
    console.log('GO UP');
}
// 枚举的值有两种类型 一种常量值 一种计算值 只有常量值可以用常量枚举
