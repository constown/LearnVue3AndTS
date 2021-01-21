var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
// queue.push('str')
console.log(queue.pop().toFixed());
var kp1 = { key: 1, value: 'str' };
var kp2 = { key: 'str', value: 1 };
var arr = [1, 2, 3];
var arrTwo = [1, 2, 3];
