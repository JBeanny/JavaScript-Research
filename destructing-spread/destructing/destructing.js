//1

const array = [1,2,3,4,5,6];
const first =array[0];
const second =array[1];

const [,,c,d,e,f] = array;
const [h,,i] = array;

console.log(h,i);
// console.log(c,d);
// console.log(a,b,c,d,e,f);