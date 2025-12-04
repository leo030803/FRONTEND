const button = document.querySelector("button")
button.onclick = (event) => {
    
    event.preventDefault()
   
    login()
}


 async function login() {

     
     const email = document.querySelector("#email").value
     const password = document.querySelector("#password").value

     if (email === "" || password === "") {

        alert("Preencha todas as informações!")
        return
     }

     const user = {

        
        email,
        password
     }

     

     // enviar o user para o backend

     const response = await fetch("http://localhost:3333/login", {

      method: "POST",
      headers: {

         "Content-Type": "application/json"
      },

      body: JSON.stringify({ user })

 } ).then(response => response.json())

  console.log(response)

  // const { message } = response

  // alert(message)

  // window.location.href = "../index.html"
}