let testStr = "freeCodeCamp";
let testRegex = /Code/i;   // regex formatı. arancak kelime flag i = ignorecase
console.log(testRegex.test(testStr));
//--------------------------
/**
 *  /dog|cat/   | operatoru or anlamında
 * iki kelimeyide istenilen string de arar
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/i; 
console.log(petRegex.test(petString));


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/ig; 
let result = extractStr.match(codingRegex); 
console.log(result);

// flag g= repeat
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /[A-Za-z]/ig; //flag g= repeat
let result2 = twinkleStar.match(starRegex); 
console.log(`res 2 :${result2}`);

// wildcard .
let exampleStr = "Let's have fun pun run sun nun";
let unRegex = /.un/gi; 
let result3 = unRegex.test(exampleStr);
console.log(`res 3 :${result3}`);
console.log(exampleStr.match(unRegex));


/**
 * Match Single Character with Multiple Possibilities
 *  bag, big, bug, bog,  
 *  regex = /b[aiu]g/   
 * will find big, bug, bag
 *  */ 
 let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
 let vowelRegex = /[aeiou]/gi; // will find all vowels in string
 let result4 = quoteSample.match(vowelRegex);
 console.log("res 4")
console.log(result4);

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // a dan z ye kadar olan tum harfleri iceriyorsa o harfleri dondurur
let result5 = quoteSample2.match(alphabetRegex); 
console.log("res 5")
console.log(result5);

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // 
let result6 = quoteSample3.match(myRegex); 
console.log("res 6")
console.log(result6);

/**
 * Match Single Characters Not Specified
 * /[^aeiou]/gi matches all characters that are not a vowel.
 * it counts white spaces too
 */
 let quoteSample4 = "3 blind mice.";
 let myRegex2 = /[^aeiou0-9]/gi;
 let result7 = quoteSample4.match(myRegex2); 
 console.log("res 7")
 console.log(result7);

// Match Characters that Occur One or More Times
// with +
 let difficultSpelling = "Mississippis has ssss";
 let myRegex3 = /s+/gi; 
 let result8 = difficultSpelling.match(myRegex3);
 console.log("res 8")
 console.log(result8);

// Match Characters that Occur Zero or More Times
let df = "P1P5P4CCCcP2P6P3";
let chewieRegex = /CC*/g;
console.log(df.match(chewieRegex));


 let text = "<h1>Winter is coming</h1>";
 let myRegex4 = /<.1*?>/ig; // Change this line
 let result9 = text.match(myRegex4);
 console.log("res 9")
 console.log(result9);


/**
 * Match Ending String Patterns
 * $
 * 
 */
 let caboose = "The last car on a train is the caboose";
 let lastRegex = /caboose$/; 
 let result10 = lastRegex.test(caboose);
 console.log("res 10")
 console.log(result10);

/**
 * /[A-Za-z0-9_]/    == /\w/
 * /[^A-Za-z0-9_]/   == /\W/
 * /[0-9]/           == /\d/
 * /[^0-9]/          == /\D/
 * /\s/              == count whitespaces
 * /\S/              == count non whitespaces
 */
 let movieName = "200145: A Space Odyssey";
 let numRegex = /\d/ig; 
 let result11 = movieName.match(numRegex).length;
 console.log("res 11")
 console.log(result11);



 let username = "JackOfAllTrades";
 let userCheck = /\w/ig; // Change this line
 let result12 = userCheck.test(username);
 console.log("res 12")
 console.log(result12);


/**
 * Specify Upper and Lower Number of Matches
 * /oh{3,6} no/ig   == between 3-6 times
 * /oh{3,} no/ig    == minimum 3 times
 * /oh{3} no/ig    == exact number of matches
 * */
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/ig; // Change this line
let result13 = ohRegex.test(ohStr);
console.log("res 13")
console.log(result13);

/**
 * Check for All or None
 * ?
 * ornekte u yu almayacak. yani
 * favorite beya favourite isin true oalcak
 * 
 */
 let favWord = "favorite";
 let favRegex = /favou?rite/; // Change this line
 let result14 = favRegex.test(favWord);
 console.log("res 14")
 console.log(result14);










