
function reverseString(str) {
    
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function factorialize(num) {
    if(num == 0){
        return 1;
    }
    return num * factorialize(num-1);
} 
console.log(factorialize(5));

function findLongestWordLength(str) {
    let arr = str.split(" ");
    let max =0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > max) max = arr[i].length
    }
    return max;
}  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function largestOfFour(arr) {
    let newarr = [];
    for(let i = 0; i< arr.length;i++){
        newarr.push(Math.max(...arr[i]));
    }
    return newarr;
}
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

let d = [12,45,56];
console.log(Math.max(12,45));


function confirmEnding(str, target) {
    console.log(str.substring(str.length-target.length));
    if(str.substring(str.length-target.length) === target) return true;
    return false;
}
  
console.log(confirmEnding("Open sesame", "same"));

function repeatStringNumTimes(str, num) {
    if(num <=0) return "";
    for(let i=0;i<num;i++){
      str += str;
    }
    return str;
}
  
 console.log( repeatStringNumTimes("abc", 3));


function truncateString(str, num) {
    let len = str.length;
    if(len > num){
        str = str.substring(0,num)+ "...";
    }else{
        str = str.substring(0,num);
    }
    return str;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function titleCase(str) {
    let e =[];
    str = str.toLowerCase();
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let ar2 = arr[i].split("");ar2.splice(0,1,ar2[0].toUpperCase());
        let s = ar2.join("");        
        e.push(s);        
    }
    return e.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
    let arr3 = arr2;
    let t_back = arr3.splice(n);   
    
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
    }
    arr3 = arr3.concat(t_back);
    return arr3;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


function bouncer(arr) {
    let a = [];
    for(let i=0; i<arr.length;i++){
        if(typeof arr[i] == "string" && arr[i] != ""){
            a.push(arr[i]);   
            continue;
        }
        if(arr[i] == false ||isNaN(arr[i]) || arr[i] == null || arr[i] == 0 || arr[i] == undefined){
        continue;
      }else{
        a.push(arr[i]);   
      }
    }
    return a;
}
  
console.log(bouncer([7, "ate", "", false, 9]));

let w = "qweqweq";
console.log(typeof w =="string");



