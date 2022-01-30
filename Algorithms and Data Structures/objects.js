

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`); 
    }
      
      
    
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList);

//Write Concise Object Literal Declarations Using Object Property Shorthand
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
//short form in ES6
const getMousePosition2 = (x, y) => ({ x, y });

const pr = new Promise((resolve, reject)=>{
  if(false) resolve("inside promise");
  else reject("rejected");
}).then(res => console.log(res)).catch(res => console.log(res));



let arr3 = [];
arr3.push(1);
console.log(arr3);
arr3= [];
console.log(arr3);




