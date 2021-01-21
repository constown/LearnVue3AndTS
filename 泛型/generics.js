function echo(arg) {
    return arg;
}
var res = echo(123);
// 这样就丧失了类型
function echo2(arg) {
    return arg;
}
var res2 = echo(123);
// 泛型 在开始不指定类型，在使用的时候指定类型
function echo3(arg) {
    return arg;
}
var res3 = echo3('str');
// T 就是泛型的名称
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var res4 = swap(['str', 123]);
