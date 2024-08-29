class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop():any{
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        this.elements.pop();
    }
}
let numbers1 = new Stack<number>(5);
numbers1.push(10);
numbers1.push(20);
numbers1.push(30);
numbers1.push(40);
numbers1.push(50);
numbers1.pop();
numbers1.pop();
console.log(numbers1);
