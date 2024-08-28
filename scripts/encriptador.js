// Función para validar el texto ingresado
function validarTexto(texto) {
    // Expresión regular para permitir solo letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z\s]*$/;

    // Retorna verdadero si el texto cumple con el patrón, de lo contrario, falso
    return regex.test(texto);
}

// Función para verificar si el texto tiene mayúsculas y convertirlo a minúsculas si el usuario lo acepta
function verificarMayusculas(texto) {
    // Expresión regular para detectar mayúsculas
    const regexMayusculas = /[A-Z]/;

    // Si se detectan mayúsculas en el texto
    if (regexMayusculas.test(texto)) {
        // Mostrar un diálogo de confirmación al usuario
        const convertir = confirm("El texto contiene letras mayúsculas. ¿Desea convertirlo a minúsculas?");
        
        // Si el usuario acepta, convertir el texto a minúsculas
        if (convertir) {
            texto = texto.toLowerCase();
        }
    }

    return texto;
}

// Función para encriptar el texto
function encriptarTexto() {
    // Obtener el texto del área de entrada
    let texto = document.getElementById("inputTexto").value;

     // Verificar mayúsculas y convertir si es necesario
     texto = verificarMayusculas(texto);

     // Validar el texto
     if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    // Realizar las reemplazos de acuerdo a las reglas dadas
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el resultado en el área de resultado
    document.getElementById("resultadoTexto").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
    // Obtener el texto del área de entrada
    let texto = document.getElementById("inputTexto").value;

     // Verificar mayúsculas y convertir si es necesario
     texto = verificarMayusculas(texto);

     // Validar el texto
     if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    // Realizar los reemplazos inversos para desencriptar el texto
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el resultado en el área de resultado
    document.getElementById("resultadoTexto").value = textoDesencriptado;
}

// Función para copiar el texto del área de resultado al portapapeles
function copiarTexto() {
    // Obtener el área de resultado
    let resultadoTexto = document.getElementById("resultadoTexto");

    // Seleccionar el texto en el área de resultado
    resultadoTexto.select();
    resultadoTexto.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Mostrar una alerta para informar al usuario
    alert("Texto copiado al portapapeles!");
}