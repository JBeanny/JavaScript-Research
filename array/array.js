// length
// const array = [1,2,3,4,5];
// console.log(array.length);


// pop
// const array = [1,2,3,4,5];
// const poppedOut = array.pop();

// console.log(`PoppedOut: ${poppedOut}`);
// console.log(`Array: ${array}`); 


// push
// const array = [1,2,3,4,5];
// let newElement = 6;
// array.push(newElement);

// console.log(`Array: ${array}`); 


//sort
// const array = [1,3,5,2,4];
// array.sort()

// console.log(`Array: ${array}`); 


// 2D
// const twoDArray = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(twoDArray);


//filter
// const array = [1,2,3,4,5,6,7,8,9,10];
// const filtered = array.filter((val)=>{
//     return val%2===0;
// })
// console.log(filtered) 


//map
// const array = [1,2,3,4,5,6,7,8,9,10];
// const mapped = array.map((val)=>{
//     if(val%2 == 0){
//         return val*2;
//     }
//     return val;
// })
// console.log(mapped);


//forEach
// const array = [1,2,3,4,5];
// array.forEach((val,index)=>{
//     console.log(`index ${index}: ${val}`);
// })


//indexOf
// const array = [1,2,3,4,5];

// console.log(array.indexOf(3)); 

// console.log(array.indexOf(10)); 


//slice
const array = [1,2,3,4,5];
        
console.log(array.slice(2)); 
console.log(array.slice(2,4));
console.log(array)


//join 
// const array = ["I","Love","SabaiCode"];

// console.log(array.join(" ")); 


//reduce

// const array = [1,2,3,4,5];
// const initValue = 0;
// const sum = array.reduce(
//     (prev,cur)=>{
//         return prev+cur
//     },
//     initValue
// )
// console.log(sum);