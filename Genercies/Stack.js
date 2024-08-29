var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        this.elements.pop();
    };
    return Stack;
}());
var numbers1 = new Stack(5);
numbers1.push(10);
numbers1.push(20);
numbers1.push(30);
numbers1.push(40);
numbers1.push(50);
numbers1.pop();
numbers1.pop();
console.log(numbers1);
