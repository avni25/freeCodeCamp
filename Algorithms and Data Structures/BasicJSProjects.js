function palindrome(str) {
    let regex = /[A-Za-z0-9]/gi;
    let s1 = str.match(regex).join("").toLowerCase();
    let s2 = str.match(regex).reverse().join("").toLowerCase();
    console.log(s1+ " - "+ s2);
    if(s1 == s2) return true;
    return false;
}
  
console.log(palindrome("1 eye for of 1 eye."));


function rot13(str) {
   let alph = 'abcdefghijklmnopqrstuvwxyz'.split(""); 
   let sarr = [];
   let regex = /[^A-Za-z0-9]/gi;
   for(let i=0;i<str.length;i++){
       if(str.toLowerCase()[i].match(regex)){
           sarr.push(str.toLowerCase()[i]);
       }else{
            sarr.push(alph[Math.abs(str.toLowerCase().charCodeAt(i)+13-97)%26]);

       }
    }   
   return sarr.join("").toUpperCase();
}
  
console.log(rot13("SERR PBQR PNZC"));


function convertToRoman(num) {
    let arr1 = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    let arr2 = ["L", "C", "D", "M"];

    

    return num;
}
   
console.log(convertToRoman(36));


