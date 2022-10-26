let array = [1,2,3,4,5,6,7,8,9,10];

const books = [
    {
        id: 1,
        category: 'fiction',
        name: "Harry Potter"
    },
    {
        id: 2,
        category: 'science',
        name: "The Origin of Species"
    },
    {
        id: 3,
        category: 'science',
        name: "Ideas and Opinions"
    },
];

const findEven = (number) => {
    return number%2 === 0;
}

const findOdd = (number) => {
    return number%2 !== 0;
}

const findPrime = (number) => {
    let isPrime = true;
    for(let i=2;i<=number/2;i++){
        if(number%i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

const findScienceBook = (book) => {
    return book.category === "science";
}

const filter = (array,callback) => {
    let newArray = [];
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// console.log(filter(array,findEven));
// console.log(filter(array,findOdd));
// console.log(filter(array,findPrime));
const newBook = books.filter((val)=>{
    return val.category === "science";
})
console.log(newBook);
console.log(filter(books,findScienceBook));