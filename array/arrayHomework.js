const numbers = [1,2,3,4,5];
const strings = ['Good','Morning','Everyone','Okay','Bro'];

const arrayGenerator = (...elements) => elements;

//1. make pair
// const makePair = (num1,num2) => {
//     return [num1,num2];
// }
// console.log(makePair(1,2))

//1. make pair
// const makePair = (...array) => {
//     return array;
// }
// console.log(makePair(1,2,3,4,5))


//2. reverse an array
// const reverseArray = (array) => {
//     return array.reverse();
// }
// console.log(reverseArray(numbers));

// const reverseArrayToo = (array) => {
//     const length = array.length - 1;
//     const newArray = [];
    
//     for(let i=length;i>=0;i--){
//         newArray.push(array[i]);
//     }
//     return newArray;
// }
// console.log(reverseArrayToo(numbers))


//3. convert array to string
// const convertToString = (array) => {
//     return array.join(" ");
// }
// console.log(convertToString(strings))

// const convertToStringToo = (array) => {
//     let text = "";
//     for(let i=0;i<array.length;i++){
//         text+=array[i] + " ";
//     }
//     return text;
// }
// console.log(convertToStringToo(strings));


//4. findElement 
// const findElement = (array,element) => {
//     if(array.indexOf(element) == -1) return false;
//     return true;
// }
// console.log(findElement(numbers,5));

// const findElementToo = (array,element) => {
//     for(let i=0;i<array.length;i++){
//         if(array[i] === element) return true;
//     }
//     return false;
// }
// console.log(findElementToo(arrayGenerator('good','morning','bye'),'hello'));

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


// 7. string to number
const convertToNumber = (strings) => {
    return strings.map((val) => {
        return Number(val);
    })
}
console.log(convertToNumber(['1.5','2.3','3','4','5']));


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


//11 even all the way

// const number = arrayGenerator(1,3,2,6,4,8);

// const evenAllTheWay = (array) => {
//     return array.filter((val,index) => {
//         return (val%2 === 0 && index%2 === 0);
//     })
// }
// console.log(evenAllTheWay(number));


//12 phone number formatting

// const phone = arrayGenerator(0,1,2,3,4,5,6,7,8,9);

// const phoneNumFormat = (array) => {
//     // const string = array.join("")
//     const phone_num = array.map((val,index) => {
//         if(index == 0) return "(" +val;
//         else if(index == 2) return val+") ";
//         else{
//             if(index == 5) return val+"-";
//             return val;
//         }
//     })
//     return phone_num.join("");
// }
// console.log(phoneNumFormat(phone));


//13 divisible by n

// const divisibleLength = (start,end,divisor) => {
//     const divisible = [];
//     for(let i=start;i<end;i++){
//         if(i%divisor === 0) divisible.push(i);
//     }
//     return divisible;
// }
// console.log(divisibleLength(1,10,3));


//14

// const convertObj = (obj) => {
//     const propNames = Object.keys(obj);
//     const propValues = Object.values(obj);
//     const length = propNames.length;
//     const array = [];

//     for(let i=0;i<length;i++){
//         array.push([propNames[i],propValues[i]]);
//     }
//     return array;
// }

// const convertObjToo = (obj) => {
//     return Object.entries(obj);
// }

// const obj = {
//     a: 1,
//     b: 2,
// }
// console.log("Method 1:" ,convertObjToo(obj));
// console.log("Method 2:" ,convertObj(obj));


//15 concatenating 2 array int

// const concatenateArrays = (first,second) => {
//     return [...first,...second];
// }

// const phone = arrayGenerator(0,1,2,3,4,5);
// console.log(concatenateArrays(numbers,phone));