//1

const array = [1,2,3,4,5,6];

const [a,b,...rest] = array;
const [c,,d] = array;

console.log(a,b,rest);
console.log(c,d);