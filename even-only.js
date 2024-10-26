

function defineEvenNumber(numbers){
    const array =[];
    for(const number of numbers){
        if(number % 2 === 0){
           array.push(number);
        }
    }
   return array;
}

const even = defineEvenNumber([1,2,3,4,5,6,7,8,9]);
console.log( 'even number',even);
// _______________ sum___________________

function sumOfEvenNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
           sum = sum + number;
        }
    }
   return sum;
}

const totalSum = sumOfEvenNumber([1,2,3,4,5,6,7,8,9]);
console.log( ' sum of even number', totalSum);