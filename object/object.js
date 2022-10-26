
// Object Literal

// let book = {
//     name: "Harry Potter",
//     category: "Fantasy",
//     published: true,
// }

// book.price = 1000;

// Object.defineProperty(book, 'price', {
//     enumerable: true,    
//     configurable: false, 
//     writable: false,     
//     value: '1000'
// });

// Object.defineProperties(book, {
//     price: {
//       value: 1000,
//       enumerable: true,
//       configurable: false,
//       writable: false
//     },
//     edition: {
//       value: 2,
//       enumerable: true,
//       configurable: false,
//       writable: false
//     }
//   });

// console.log(book)


// Object Constructor

// function book(name,category,published){
//     this.name = name,
//     this.category = category,
//     this.published = published,
//     this.getName = function(){
//         return `book name is ${this.name} in category ${this.category}`
//     }
// }
// const harryPotter = new book('Harry Potter','Fantasy',true)
// // harryPotter.price = 1000;

// console.log(harryPotter)
// console.log(harryPotter.getName());


// Object.create()

// prototype object
// let book = {
//     name: "book-template",
//     category: "book-template",
//     published: true
// }

// //create empty object use book as prototype object
// let harryPotter = Object.create(book);

// //create object use book as prototype object
// let harryPotter = Object.create(book,{
//     name: {
//         value: "harry potter",
//         enumerable: true,
//         configurable: false,
//         writable: false
//     }
// });

// Object.defineProperties(harryPotter,{
//     name: {
//         value: "Harry Potter",
//         enumerable: true,
//         configurable: false,
//         writable: false
//     },
//     category: {
//         value: "Fantasy",
//         enumerable: true,
//         configurable: false,
//         writable: false
//     },
//     published: {
//         value: true,
//         enumerable: true,
//         configurable: false,
//         writable: false
//     },
// })
// console.log(harryPotter);


//Object.assign()
// const target = { a: 1,b: 2 };
// const source = { b:4,c: 5 };

// const object = Object.assign(target,source);

// console.log(target);

// console.log(object === target)



// ES6 class
class Book {
    constructor(name,category,published){
        this.name = name;
        this.category = category;
        this.published = published;
    }
    getName(){
        console.log(`Book name is : ${this.name}.`)
    }
    getCategory(){
        console.log(`Book price is : ${this.category}.`)
    }
}

const harryPotter = new Book('Harry Potter','Fantasy',true);
console.log(harryPotter);
harryPotter.getName();
harryPotter.getCategory();

