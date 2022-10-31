const max = Math.max(1,6,8,5)




//1
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3,5,4));
console.log(sum(1, 2, 3, 4));


//2 
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
myFun("one", "two", "three", "four", "five", "six");


