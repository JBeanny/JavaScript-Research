const getVolume = () => {
    const radius = document.getElementById("radius").value;
    if(radius < 0){
        return document.getElementById("volume").innerHTML = "invalid radius value"
    }
    const volume = (4*Math.PI*Math.pow(radius,3))/ 3
    document.getElementById("volume").innerHTML = volume.toFixed(2);
}