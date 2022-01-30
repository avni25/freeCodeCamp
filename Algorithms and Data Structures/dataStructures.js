/*array.push()
array.pop()   ->  delete last element in array and return it
array.shift()  -> delete first element in array and return it
array.unshift() -> add new element to first index of array



obj.hasOwnProperty()
Object.freeze(obj)  -> prevents modification
*/


//spread operator
/*
const arr = [6, 89, 3, 45,64];
const maximus = Math.max(...arr);
*/


function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); // cikarilan eleman yeni bir degiskene atanabilir
    return [shifted, popped];
}  
console.log(popShift(['challenge', 'is', 'not', 'complete']));


// SPLICE  
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let qw =arr.splice(3,1);
console.log(`qw: ${qw}`);
console.log(arr);
arr.splice(3,2);
console.log(arr);
arr.splice(3);
console.log(arr);

function remove(arr, index){
  arr.splice(index, 1);
  return arr;
}

console.log(remove([0,1,2,3,4,5,6,7,8,9], 5));

// SLICE: belirtilen elemanlarla yeni bir dizi olusturur.
// eski dizi ayni kalır
function forecast(arr) {
    arr = arr.slice(2,4);
    return arr;
}  
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/**
 * Combine Arrays with the Spread Operator
 * 
 */
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=['learning', ...fragment, 'is', 'fun'];
    return sentence;
}  
console.log(spreadOut());

/**
 * arr.indexOf(element) :  element dizide varsa indexi, yoksa -1 dondurur
*/


function filteredArray(arr, elem) {
    let newArr = [...arr];
    // Only change code below this line
    for(let i = 0;i<arr.length;i++){      
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j] == elem){
            newArr.splice(i,1);        
        }
      }
      
    }
    
    // Only change code above this line
    return newArr;
}
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
console.log(users.Alan);
console.log(Object.keys(users));
// for in will iterate objects keys
for(let user in users){
    console.log(users[user].online);
}


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
  }
  console.log(addFriend(user, 'Pete'));

 

