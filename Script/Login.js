function logar(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if ((usuario === "ADM") && (senha === "ADM")){
        window.location = "../Pages/Opcoes.html"

        }
    else {
        alert("Usuário ou senha incorretos!")
    }
}