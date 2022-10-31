# Array Method

### concat

- The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

- Example: 

        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];
        const array3 = array1.concat(array2);

        console.log(array3);


### lastIndexOf

- The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

- lastIndexOf method is the same of indexOf method, it will return -1 if the element is not found in the given array

- Example:

        const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

        const searchTerm = 'dog';

        console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);


### every

- The every() method tests whether all elements in the array pass the test implemented by the provided function. 

- It returns a Boolean value.

- Example: 

        const isBelowThreshold = (currentValue) => currentValue < 40;

        const array1 = [1, 30, 39, 29, 10, 13];

        console.log(array1.every(isBelowThreshold));


### includes

- The includes() method determines whether an array includes a certain value among its entries.

- It return true or false as appropriate.

- Example: 

        const array1 = [1, 2, 3];

        console.log(array1.includes(2));


### reverse

- The reverse() method reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. 

- In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

- Example: 

        const array1 = ['one', 'two', 'three'];
        console.log('array1:', array1);



