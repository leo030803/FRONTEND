const button = document.querySelector("button")
button.onclick = (event) => {
    
    event.preventDefault()
   
    signUpEagle()
}


function signUpEagle() {

     const name = document.querySelector("#name").value
     const email = document.querySelector("#email").value
     const age = document.querySelector("#age").value
     const nickname = document.querySelector("#nickname").value
     const password = document.querySelector("#password").value

     if (name === "" || email === "" || age === "" || nickname === "") {

        alert("Preencha todas as informações!")
        return
     }

     const user = {

        name,
        email,
        age,
        nickname,
        password
     }

     console.log(user)

     // enviar o user para o backend

     fetch("http://localhost:3333/cadastrar")
}