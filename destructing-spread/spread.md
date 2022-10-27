# Spread Operator

- The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

### Example

- Merge Array:

    - Example 1:

            const A = [1,2,3];
            const B = [4,5,6];

            const C = [...A,...B];
            console.log(C);

    - Example 2:

            const numbers = [1,2,3,4,5];

            const [a,...rest] = numbers;
            console.log(a,rest);

    - Example 3:

            const myVehicle = {
                brand: 'Ford',
                model: 'Mustang',
                color: 'red'
            }
            
            const updateMyVehicle = {
            type: 'car',
            year: 2021, 
            color: 'yellow'
            }

            const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};

            console.log(myUpdatedVehicle);


- Copy Array

    - Example 1:

            const number = [1,2,3,4,5];
            const [...a] = number;
            console.log(a);