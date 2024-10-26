 function inEven (number){
    if(number % 2 ===0){
        return true;
    }
    else{
        return false;
    }
 }

//  console.log(inEven(23));
//  console.log('****************')
//  console.log(inEven(20));



 function douDleOrTripple (number , doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
 }

//  console.log(douDleOrTripple(5, true));
//  console.log(douDleOrTripple(5, false));

function numberOfElement (numbers){
    const len = numbers.length ;
    return len;
}

console.log(numberOfElement([12, 34, 46, 367]));