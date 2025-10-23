function receiveData() {

    fetch("http://localhost:3333").then(response => response.json()).then(data => console.log(data.message))
}