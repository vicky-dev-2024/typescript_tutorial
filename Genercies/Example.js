function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function prop(obj, key) {
    console.log(obj[key]);
    return obj[key];
}
var str = prop({ name: 'John' }, 'name');
console.log(str);
// Example usage:
var numbers = [1, 2, 3, 4, 5];
var result = sumOfArray(numbers);
console.log("Sum of numbers:", result); // Output: Sum of numbers: 15
