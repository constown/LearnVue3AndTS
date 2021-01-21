function echWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var arrs = echWithArr([1, 2, 3]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str = echoWithLength('str');
var obj = echoWithLength({ length: 10 });
var arr2 = echoWithLength([1, 2, 3]);
