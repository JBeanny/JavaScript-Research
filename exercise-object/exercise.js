//1
// const author = {
//     name: "John",
//     genre: "Fantasy",
//     year: 2015,
//     introduction(){
//         console.log(`${this.name}-${this.genre}-${this.year}`)
//     }
// }
// author.introduction();


//2
// const luckyNumber = new Object()
// luckyNumber.luckyDraw = true;
// luckyNumber.value = function(){
//     const random = Math.random()*10;
//     console.log(random.toFixed())
// }
// luckyNumber.value()


//3
// class Player {
//     constructor(energy,power,level){
//         this.energy = energy;
//         this.power = power;
//         this.level = level;
//     }
//     powerControl(){
//         return this.power - this.energy;
//     }
// }

// const ryu = new Player(200,500,1);
// console.log(ryu);


//4
// const HR = {
//     company: "Zimpak Software",
//     hiring: false,
//     employees: 100,
//     message(){
//         this.employees > 100 ?
//         console.log("Zimpak is not hiring") :
//         console.log(`${this.company} has ${this.employees} and hiring: ${this.hiring}`)
//     }
// }

// HR.message()