function logar(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if ((usuario === "ADM") && (senha === "ADM")){
        document.write("Seja bem vindo, ADM.")
        // window.location.href = "../Pages/";
        }
    else {
        alert("Usuário ou senha incorretos!")
    }
}