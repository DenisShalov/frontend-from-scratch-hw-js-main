// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(numOne, numTwo, numThree) {
    let max = Number.MIN_SAFE_INTEGER;

        if(numOne > max && numTwo < numOne && numThree < numOne){
            max = numOne;
        }
        else if(numTwo > numOne && numThree < numTwo){
            max = numTwo;
        }else{ 
            max = numThree;
        }
    
    return max;
}
