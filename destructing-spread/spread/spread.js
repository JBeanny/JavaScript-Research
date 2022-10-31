// //1 merge array

// const A = [1,2,3];
// const B = [4,5,6];

// const C = [...A,...B];
// console.log(C);


// const arrays=[4,7,8,1,9];
// const min=Math.min(...arrays);
// console.log(min);
// console.log(...arrays);
// //2

// const numbers = [1,2,3,4,5];

// const [...rest] = numbers;
// const rest1 = {...numbers}
// console.log(a,rest);

// //3

const myVehicle = {
    model: 'Mustang',
    color: 'red',
    brand: 'Ford',
  }
  
const updateMyVehicle = {
type: 'car',
year: 2021, 
color: 'yellow'
}
const { brand:b} = myVehicle;
const {type} = updateMyVehicle; 

// const myUpdatedVehicle = {...updateMyVehicle,...myVehicle};
// const myUpdatedVehicle = {brand,type}

console.log(myUpdatedVehicle);
















//2 copy array

// const number = [1,2,3,4,5];
// const a = [...number];
// console.log(a);


//3  convert string to array

// const string = "hello world my friend, my guys";
// const string = "12 34556";
// const [b,...a] = string;
// console.log(b,a);
