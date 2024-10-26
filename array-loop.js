

function sumOfNumbers (numbers){
  let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
     return sum;
}



console.log('sum of the number',sumOfNumbers([1, 3, 5, 7, 8]));