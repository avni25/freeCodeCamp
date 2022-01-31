function sumAll(arr) {
    let a = [...arr];
    a.sort((a,b)=> a-b);
    let sum=0;
    for (let i = a[0]; i <= a[1]; i++) {
        sum += i;
    }
    return sum;
}  
console.log(sumAll([1, 4]));

function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
     
}
  


console.log("asdasdasd");

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));




























