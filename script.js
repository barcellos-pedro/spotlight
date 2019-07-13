let nome = document.querySelector('#nome');
let sobrenome = document.querySelector('#sobrenome');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let btnEnviar = document.querySelector('.enviar');

btnEnviar.addEventListener("click", ()=>{
    fetch('http://localhost:8000/usuarios',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome.value,
            'sobrenome': sobrenome.value,
            'username' : username.value,
            'email': email.value,
            'senha': senha.value

        })
    })
    .then((response)=>{
        return response.json()
        })
    .then((data)=>{

        console.log(data)
    
    })
    .catch(function(erro){
        console.log(erro)
    })
} )