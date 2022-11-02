const getAge = () => {
    const username = document.getElementById("name").value;
    const birthday = document.getElementById("birthday").value;
    const birthYear = birthday.split("-")[0];

    const today = new Date();
    const age = today.getFullYear() - birthYear;

    const node = document.createElement("li");
    const birthdayText = document.createTextNode(`Hello ${username}, You are ${age} years old.`)
    node.appendChild(birthdayText)

    document.getElementById("bd").appendChild(node)
}

const clearList = () => {
    const element = document.getElementById("bd");
    let child = element.lastElementChild;
    
    while(child){
        element.removeChild(child);
        child = element.lastElementChild;
    }
}