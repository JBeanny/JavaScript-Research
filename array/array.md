# What is array ? When and Why using it ?

- Array is a single variable that is used to store  different elements with the same datatype.

- It is often used when we want to store a list of elements and access them by a single variable

- Because it is a single variable that store different elements and can be accessed by calling only a single name

- Index of array starts from 0

- Example: 

        const array = [1,2,3,4,5];

        //if we want to get number: 3
        console.log(array[2]);

# Array built-in properties

## length

- length property is used to get the length of array

- Example: 

        const array = [1,2,3,4,5];

        console.log(array.length); // expected output: 5

## pop

- pop property is used to pop out the last element of an array

- Example: 

        const array = [1,2,3,4,5];
        const poppedOut = array.pop();

        console.log(`PoppedOut: ${poppedOut}`); //expected output: 5
        console.log(`Array: ${array}`); // 1,2,3,4

## push

- push property is used to push new element to the index after the last index of the original array

- Example: 

        const array = [1,2,3,4,5];
        let newElement = 6;
        array.push(newElement);

        console.log(`Array: ${array}`); // expected output: 1,2,3,4,5,6

## sort

- sort property is used to sort the elements in an array. default sort order is ascending

- Example: 

        const array = [1,3,5,2,4];
        array.sort()

        console.log(`Array: ${array}`); // expected output: 1,2,3,4,5


# What is 2D array ?

- 2D Array is a collection of items which share a common name and they are organized as a matrix in the form of rows and columns.

- Example: 

        const twoDArray = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]

        console.log(twoDArray); // expected output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]


# Explain array methods

## filter

- as the word itself presents the meaning, to claim array elements which are according to the provided condition

- Example:

        const array = [1,2,3,4,5,6,7,8,9,10];
        const filtered = array.filter((val)=>{
            return val%2===0;
        })
        console.log(filtered) 
        // expected output: 2,4,6,8,10  


## map

- map loops through the array but we can modify the array's elements before returning or adding to new array

- Example: 

        const array = [1,2,3,4,5,6,7,8,9,10];
        const mapped = array.map((val)=>{
            if(val%2 == 0){
                return val*2;
            }
            return val;
        })
        console.log(mapped);


## forEach

- forEach method executes a provided function once for each array element

- Example: 

        const array = [1,2,3,4,5];
        array.forEach((val,index)=>{
            console.log(`index ${index}: ${val}`);
        })


## indexOf

- indexOf is used to get the index of the array element

- indexOf return index of the element if the element is found, but it will return -1 if the element is not found.

- Example: 

        const array = [1,2,3,4,5];

        console.log(array.indexOf(3)); // expected output: 2

        console.log(array.indexOf(10)) //expected output: -1


## slice

- slice is used to slice out the element of specific given index 

- slice accept 2 parameters (start,end)

- Example:

        const array = [1,2,3,4,5];
        
        console.log(array.slice(2)); // expected output: 3,4,5

        console.log(array.slice(2,4)); // expected output; 3,4


## join

- join is used to concatenate all elements inside the array into a string

- join accept a parameter to separate between elements

- Example: 

        const array = ["I","Love","SabaiCode"];

        console.log(array.join(" ")); // expected output: I Love SabaiCode


## reduce

- reduce is used to loop through the array element, and passing value from calculation on the preceding element to the next element.

- Example:

        const array = [1,2,3,4,5];
        const initValue = 0;
        const sum = array.reduce(
        (prev,cur)=>{
                return prev+cur
        },
        initValue
        )
        console.log(sum); // expected output: 15
