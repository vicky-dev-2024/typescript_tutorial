function sumOfArray<T extends number>(arr: T[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function prop<T, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key]);
    return obj[key];
}
let str = prop({ name: 'John' },'name');
console.log(str);

// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5];
const result: number = sumOfArray(numbers);
console.log("Sum of numbers:", result); // Output: Sum of numbers: 15

