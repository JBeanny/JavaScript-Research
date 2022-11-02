const getBMI = () => {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    
    if(weight <= 0 || height <= 0){
        return document.getElementById("BMI").innerHTML = "Weight or Height can't be negative";
    }

    if(BMI < 18.5) message+=`You are underweight with BMI ${BMI}`;
    else if(BMI > 18.5 && BMI < 24.9) message+=`You are ideals with BMI ${BMI}`;
    if(BMI > 25 && BMI < 29.9) message+=`You are overweight with BMI ${BMI}`;
    if(BMI >= 30) message+=`You are obesity with BMI ${BMI}`;
    
    document.getElementById("BMI").innerHTML = message;
}