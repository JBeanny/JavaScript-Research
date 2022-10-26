let array = ['Morning','Afternoon','Evening','Night'];

//normal
const map = (array) => {
    let newArray = [];
    for(let i=0;i<array.length;i++)
        newArray.push(`Good ${array[i]} !`);
    return newArray;
}
let newArray = map(array);
console.log(newArray);

//with callback
const map_cb = (array,callback) => {
    let newArray = [];
    for(let i=0;i<array.length;i++)
        newArray.push(callback(array[i]));
    return newArray;
}

const addGood = (value) => {
    return `Good ${value} !`;
}

const mapArr = map_cb(array,addGood);
console.log(mapArr)