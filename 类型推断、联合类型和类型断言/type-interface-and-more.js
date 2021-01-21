// 在没有明确指明类型的时候，会进行类型推断
var str = 'str';
// 会报错
// str = 123
// 联合类型 既可以是 number 也可以是 string
var numberOrString;
// 在没有赋值的时候，可以访问联合类型里共有的属性和方法
numberOrString.toString();
// 如果要提前获取到类型的方法
// 类型断言 as 关键字
function getLength(input) {
    var str = input;
    if (str.length) {
        return str.length;
    }
    else {
        var number = input;
        return number.toString().length;
    }
}
// type guard 遇到一个联合类型的方法，会自动缩小范围
function getLength2(input) {
    if (typeof input === 'string') {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
