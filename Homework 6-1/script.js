
let arr = [3, 28, 124, 6, 47, 21];
console.log(arr)

// sum of array
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("Sum of array: " + sum);
}
arraySum(arr);

// max number of array
function maxOfArray(array) {
  console.log("Max number: " + Math.max.apply(null, array));
}
maxOfArray(arr);

// min number of array
function minOfArray(array) {
  console.log("Min number: " + Math.min.apply(null, array));
}
minOfArray(arr);

// replace min and max 
function swap(array) {
  let temp = array[array.indexOf(Math.max.apply(null, array))];
  array[array.indexOf(Math.max.apply(null, array))] = array[array.indexOf(Math.min.apply(null, array))];
  array[array.indexOf(Math.min.apply(null, array))] = temp;
  console.log(array)
}
swap(arr);

// callback
function createQuote(quote, callback) {
  let myQuote = "Where is the money, " + quote;
  callback(myQuote);
}

function logQuote(quote) {
  console.log(quote);
}

createQuote("Lebowski?", logQuote);

// replace
let a = [3, 68, 38, 44, 56, 21];
function replace(array) {
  for (let i = 0; i < array.length; i++) {

    if (array[i] % 3 === 0 && array[i] % 7 === 0) {
      array[i] = "foobar"
    }

    else if (array[i] % 7 === 0) {
      array[i] = "bar"
    }

    else if (array[i] % 3 === 0) {
      array[i] = "foo"
    }

  }

  console.log(array)
}

replace(a)

// match of two strings
function checker(first, second) {
  let hits = 0
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] == second[j]) {
        hits++;
      }
    }
  }
  let percent = hits / (first.length + second.length) * 100 + " %";
  console.log("Number of matches: " + hits)
  console.log("Number of matches (in percent): " + percent)
  
}

checker("Democracy", "Republic") 

