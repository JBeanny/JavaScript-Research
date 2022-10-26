const numbers = [1,2,3,4,5];
const strings = ['Good','Morning','Everyone','Okay','Bro'];

//1. make pair
// const makePair = (num1,num2) => {
//     return [num1,num2];
// }
// console.log(makePair(1,2))

//1. make pair
const makePair = (...array) => {
    return array;
}
console.log(makePair(1,2,3,4,5))


//2. reverse an array
// const reverseArray = (array) => {
//     return array.reverse();
// }
// console.log(reverseArray(numbers));


//3. convert array to string
// const convertToString = (array) => {
//     return array.join(" ");
// }
// console.log(convertToString(strings))


//4. findElement 
// const findElement = (array,element) => {
//     if(array.indexOf(element) == -1) return false;
//     return true;
// }
// console.log(findElement(numbers,5));

//5. 50-30-20
// const fiftyThirtyTwenty = (budget) => {
//     return result = {
//         Needs: budget * 0.5,
//         Wants: budget * 0.3,
//         Savings: budget * 0.2
//     };
// }
// console.log(fiftyThirtyTwenty(50000))


//6. less than, greater than
// const lessThanGreaterThan = (num1,num2,array) => {
//     const result = array.filter((val) => {
//         return val > num1 && val < num2;
//     })
//     return result;
// }
// console.log(lessThanGreaterThan(2,5,numbers));


//7. string to number
// const convertToNumber = (strings) => {
//     const numbers = strings.map((val) => {
//         return Number(val);
//     })
//     return numbers;
// }
// console.log(convertToNumber(['1.5','2.3','3','4','5']));


//8. find min and max
// const findMinMax = (array) => {
//     array.sort((a,b) => {
//         return a-b;
//     });

//     return {
//         minimum: array[0],
//         maximum: array[array.length-1]
//     };
// }
// const array = [4,5,20,2,3,1];
// console.log(findMinMax(array));


//9. number split
// const numberSplit = (num) => {
//     const remain = num%2;
//     let first = second = (num-remain)/2;
//     if(num%2 != 0) second += remain;
//     return [first,second];
// }
// console.log(numberSplit(11));


//10. filter string out of array
// const array = [1,2,3,0,'string','string'];

// const filterStringOut = (array) => {
//     const result = array.filter((val) => {
//         return val*1;
//     })
//     return result
// }
// console.log(filterStringOut(array));