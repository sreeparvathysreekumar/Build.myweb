function sumPositiveArray(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumPositiveArray([1, -2, 3, 4, -5])); 
console.log(sumPositiveArray([-1, -2, -3, -4])); 