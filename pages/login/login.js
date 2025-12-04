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

  // se existir response.message significa que o usuário errou algo. Por isso mostramos a mensagem na tela

  if (response.message) {

      alert(response.message)
      
      // recarrega a página
      
      window.location.reload()
      return
  }

   // desestruturar id e name de response

   const { id, name} = response

   // guardar a informação no sessionStorage convertida em JSON

   sessionStorage.setItem("user", JSON.stringify({ id, name}))

   alert("Login realizado com sucesso!")

   window.location.href = "../../index.html"
}