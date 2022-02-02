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
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
    console.log(arguments.length);
    let res=[...arguments[0]];
    let t=[];
    for (let i = 1; i < arguments.length; i++) {
        if(!arguments[0].includes(arguments[i])){
            console.log(arguments[i]);
        }
        console.log();
    }
    return res;
}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


























