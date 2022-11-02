const getFullName = () => {
    const first = document.getElementById("first-name").value;
    const last = document.getElementById("last-name").value; 
    document.getElementById("fullname").innerHTML = `${first} ${last}`;
    event.preventDefault(); 
}