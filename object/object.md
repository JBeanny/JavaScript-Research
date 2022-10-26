# What is Object ?

    - Object is a standalone entity with properties and type.

    - Compare object with a cup: a cup is and object with properties
      : color,design,weight,material it made of,etc.

    - Object can be contained more than one datatype.

### Example:
    const people = {
        {
            id: 1,
            name: "person1",
            age: 20,
            major: "Computer Science"
        },
        {
            id: 2,
            name: "person2",
            age: 20,
            major: "Artificial Intelligent"
        },
        {
            id: 3,
            name: "person3",
            age: 20,
            major: "IT Support"
        },
    };

# 5 ways to create object in JavaScript

### 1.Object Literal

- Create Object

        //create an empty object
        let book = {} 

        //create object with props
        let book = {
            name: "Harry Potter",
            category: "Fantasy",
            published: true,
        }

- Add props and methods to an existing object using dot notation (.) or bracket notation [name]

        // Dot notation
        book.price = 1000;

        //Bracket notation
        book["price"] = 1000;

        Output: 
            let book = {
                name: "Harry Potter",
                category: "Fantasy",
                published: true,
                price: 1000
            }

- One more way to add props or methods into an existing object but a bit complex

    - Syntax: 

            // add one property at a time
            Object.defineProperty(object,propertyName,descriptor)

            // add multiple properties at a time

    - Example:

            let book = {
                name: "Harry Potter",
                category: "Fantasy",
                published: true
            }
            
            // add 1 property
            Object.defineProperty(book, 'price', {
                enumerable: true,
                configurable: false,
                writable: false,
                value: 1000
            });

            // add multiple properties
            Object.defineProperties(book, {
                price: {
                    value: 1000,
                    enumerable: true,
                    configurable: false,
                    writable: false
                },
                edition: {
                    value: 2,
                    enumerable: true,
                    configurable: false,
                    writable: false
                }
            });

                enumerable: true,     // value can be enumerated
                configurable: false,  // value cannot be reconfigured
                writable: false,     // value cannot be changed


### 2.Object Constructor (new keyword)

- Create object

        // create an empty object
        let book = new Object();

        // create object with props
        function book(name,category,published){
            this.name = name,
            this.category = category,
            this.published = published
        }
        const books = new book('Harry Potter','Fantasy',true)

- Add property to an existing object

        books.price = 1000;

        Output: 
            book {
                name: 'Harry Potter',
                category: 'Fantasy',
                published: true,
                price: 1000
            }

### 3.Object.create()

- Create Object

    - Syntax:

            Object.create(prototypeObject, propertiesObject)

            prototypeObject (required)
            propertiesObject (optional)
    
    - Example:

            //create a prototype Object
            let book = {
                name: "book-template",
                category: "book-template",
                published: true
            }

            //create empty object use book as prototype object
            let harryPotter = Object.create(book);
            console.log(harryPotter) // expected output: {}

            // create object use book as prototype and declare property
            let harryPotter = Object.create(book,{
                name: {
                    value: "harry potter",
                    enumerable: true,
                    configurable: false,
                    writable: false
                }
            });
            console.log(harryPotter) //expected output: { name: "harry potter" }
            

- Add properties to existing object

    - Example: 

            Object.defineProperties(harryPotter,{
                name: {
                    value: "Harry Potter",
                    enumerable: true,
                    configurable: false,
                    writable: false
                },
                category: {
                    value: "Fantasy",
                    enumerable: true,
                    configurable: false,
                    writable: false
                },
                published: {
                    value: true,
                    enumerable: true,
                    configurable: false,
                    writable: false
                },
            })


### 4. Object.assign()

- Create Object

    - Syntax: 
        
            Object.assign(target,source)

    - Example:

            const target = { a: 1,b: 2 };
            const source = { b:4,c: 5 };

            const object = Object.assign(target,source);

            console.log(target);
            // expected output: { a:1,b:4,c:5 }

            console.log(object === target)
            // expected output: true;


### ES6 Classes

- Create Object

    - Syntax: 

            class class_name{
                constructor(parameter){
                    this.parameter = parameter;
                }
            }

    - Example: 

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



# What is this keyword ?

- In JavaScript, the this keyword refers to an object depends on what object being invoked.

- this keyword itself refers to the global object

- Example:

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






