//1

// const myColor = ['Red','Green','White','Black','Orange'];

// // const string = myColor.join(",");
// const string = myColor.join("+");

// console.log(string);

//2
const myColor = ['Red','Green','White','Black','Orange'];

myColor.forEach((val,index)=>{
    if(index === 0) console.log(`1st choice is ${val}`);
    else if(index === 1) console.log(`2nd choice is ${val}`);
    else if(index === 2) console.log(`3rd choice is ${val}`);
    else console.log(`${index+1}th choice is ${val}`);
})

//3 
// const findLastIndex = (array,index) => {
//     let found = array.lastIndexOf(array[index]);
//     if(found == -1) return `Not Found`;
//     return `Last Index is ${found} with value: ${array[found]}`;
// }

// const array = [1,2,3,4,5,6];
// console.log(findLastIndex(array,5))