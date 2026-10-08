const url ="http://localhost:3000/cadastros"


const loginAtual = document.querySelector("#input1")
const senhaAtual = document.querySelector("#input2")

async function verificar(){

    const dados1 = await fetch(url);

    const data = await dados1.json()

    const loginValido = data.some((item) => {
        return item.usuario == loginAtual.value && item.senha == senhaAtual.value
    })

    if(loginValido){
        alert("Login realizado com sucesso!");
        window.location.href="dashboard.html"
    }else{
        alert("Login ou senha errado!");
    }
}


