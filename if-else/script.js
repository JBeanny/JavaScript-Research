// var pet = "dog";

// if else statement
// if(pet === "dog"){
//     document.write(`<h1>dog</h1>`);
// }else if(pet === "cat"){
//     document.write(`<h1>cat</h1>`);
// }else{
//     document.write(`<h1>${pet}</h1>`);
// }


// ternary operator
// pet === "dog" ? document.write(`<h1>dog</h1>`) : document.write(`<h1>${pet}</h1>`);
                        //run when true          // run when false           


// switch case
// switch(pet){
//     case "dog": {
//         document.write(`<h1>dog</h1>`);
//         break;
//     }

//     case "cat": {
//         document.write(`<h1>cat</h1>`);
//         break;
//     }

//     default : {
//         document.write(`<h1>${pet}</h1>`);
//         break;
//     }
// }

//if
// if(pet === "dog"){
//     document.write(`<h1>dog</h1>`);
// }

//FizzBuzz
// for(let i=1;i<=100;i++){
    
//     if(i%3==0 && i%5!=0){
//         console.log("Fizz")
//     }else if(i%5==0 && i%3!=0){
//         console.log("Buzz")
//     }else if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else{
//         console.log(i);
//     }
// }

// var str='';
// const space = " ";
// const sharp = "#";
// const newLine = "\n";

// let column = parseInt(prompt("Please Enter Column: "));
// let row = parseInt(prompt("Please Enter Row: "));

// for(let i=1;i<=row;i++){
//     for(let j=1;j<=column;j++){
//         if(i%2!=0){
//             if(j%2!=0){
//                 str+=space;
//             }else{
//                 str+=sharp;
//             }
//         }else{
//             if(j%2!=0){
//                 str+=sharp;
//             }else{
//                 str+=space;
//             }
//         }
//     }
//     str+=newLine;
// }
// console.log(str);


const dropDuplicate = (array) => {
    if(!Array.isArray(array)) return;
    let newArray = array.filter((index,value)=>{
        return array.indexOf(index) === value;
    })
    return newArray;
}
let array = [3,12,3,4,12,3,3,4];
console.log(dropDuplicate(array));

// const capitalize = (string) => {
//     let str = "";
//     let upper;
//     const strLength = string.length;
//     for(let i=0;i<strLength;i++){
//         if(string[i-1] == " ") continue;

//         if(i == 0){
//             upper = string[i].toUpperCase();
//             str+=upper;
//         }else if(string[i] == " "){
//             upper = string[i+1].toUpperCase();
//             str+=` ${upper}`;
//         }else{
//             str+=string[i];
//         }
//     }
//     return str;
// }

// console.log(capitalize("hello world my friend my people my"));