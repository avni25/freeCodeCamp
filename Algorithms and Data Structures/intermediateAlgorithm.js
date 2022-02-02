function sumAll(arr) {
    let a = [...arr];
    a.sort((a,b)=> a-b);
    let sum=0;
    for (let i = a[0]; i <= a[1]; i++) {
        sum += i;
    }
    return sum;
}  
// console.log(sumAll([1, 4]));



function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
    
}
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr) {
    let arr2 = [...arguments[0]];
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(`i:${i} - j: ${j} : ${arr2[j]} ${arguments[i]}`);
            if(arr2[j] == arguments[i] ){
                console.log(`removing ${arr2.indexOf(arguments[i])} val: ${arr2[j]}`);     
                arr2.splice(arr2.indexOf(arguments[i]), 1);
                j--;
            } 

        }
    }
    return arr2;
}
  

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

function destroyer2(arr, ...args){
    
    return arr.filter(item => !args.includes(item));
}
console.log(destroyer2([3, 5, 1, 2, 2], 2, 3, 5));


function whatIsInAName(collection, source) {
    let arr = [...collection];
    let props = Object.getOwnPropertyNames(source);
    

    return arr.filter(obj => {
        for (let i = 0; i < props.length; i++) {
            if(!obj.hasOwnProperty(props[i]) || obj[props[i]] !== source[props[i]] ) return false;
        }
        return true;
    });
}
  
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],
 { "apple": 1 }));



 function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([^a-zA-Z0-9])/g, "-").toLowerCase();
}
  
console.log(spinalCase('ThisIs Spinal Tap'));


let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John























