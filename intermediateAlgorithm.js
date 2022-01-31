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