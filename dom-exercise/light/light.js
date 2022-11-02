const lightControl = (id) => {
    const image = document.getElementById('img');
    id === "on" ?
    image.setAttribute('src',"https://www.w3schools.com/html/pic_bulbon.gif")
    :
    image.setAttribute('src',"https://www.w3schools.com/html/pic_bulboff.gif")
}