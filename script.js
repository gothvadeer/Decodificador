const inputTexto = document.querySelector(".digite-texto");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {

    const textoCriptografado = criptografar(inputTexto.value)
    mensagem.value = textoCriptografado

    mensagem.style.backgroundImage = "none";

}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringCriptografada;
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptado;
    mensagem.style.backgroundImage = "none";
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["imes", "i"], ["ai", "a"], ["enter", "e"], ["ufat", "u"], ["ober", "o"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    const copiedText = mensagem;
    navigator.clipboard.writeText(copiedText.textContent);
    alert("texto copiado!");
    inputTexto.value = copiedText.value;
    copiedText.value = "";
}