// Challenge: once

/*
Write a function once that accepts a callback as input and returns a function.
When the returned function is called the first time, 
it should call the callback and return that output. 
If it is called any additional times, instead of calling the callback again 
it will simply return the output value from the first time it was called.
*/

// Solution
function once(callback){
  let numOfCb = 0
  let output;
  function someFunc(...args){
    if (numOfCb !== 0){
      return output
    }
    output = callback(...args)
    numOfCb++
    return output
  }
  return someFunc;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

 //UNCOMMENT THESE TO TEST YOUR WORK!
 console.log(addByTwoOnce(5));  //should log 7
 console.log(addByTwoOnce(10));  //should log 7
 console.log(addByTwoOnce(9001));  //should log 7

 