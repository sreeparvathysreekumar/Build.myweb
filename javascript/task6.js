function sumOrDifference(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        
        return a + b;
    } else if (a % 2 !== 0 && b % 2 !== 0) {

        return a - b;
    } else {
    
        return -1;
    }
}


console.log(sumOrDifference(2, 4)); 
console.log(sumOrDifference(3, 5)); 
console.log(sumOrDifference(2, 3)); 
