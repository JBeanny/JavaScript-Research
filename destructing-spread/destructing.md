# Destructing Array

- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

- Example:

        const array = [1,2,3,4,5,6];

        const [a,b,...rest] = array;

        console.log(a,b)