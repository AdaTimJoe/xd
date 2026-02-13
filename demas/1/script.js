const boton = document.getElementById('btnEnviar');
const nombree = document.getElementById("name");
const boton2 = document.getElementById('btnEnviar2');
const agee = document.getElementById("age");
const boton3 = document.getElementById('btnEnviar3');
const heig = document.getElementById("heig");
const page = document.getElementById("aapg");
const enviar = document.getElementById('sendd');

boton.addEventListener("click", function() {
    let nombre =  nombree.value

    if (nombre === "Nicole" || nombre === "nicole" || nombre === "NICOLE") {
        alert("Correcto")
    } else {
        alert("Incorrecto")
    }
})

boton2.addEventListener("click", function() {
    let age = agee.value

    if (age === "18" || age === "19") {
        alert("Correcto")
    } else {
        alert("Incorrecto")
    }
})

boton3.addEventListener("click", function() {
    let hei = heig.value

    if (hei === "1.50" || hei === "1.51" || hei === "1.52" || hei === "1.53" || hei === "1.54" || hei === "1.55" || hei === "1.56" || hei === "1.57" || hei === "1.58") {
        alert("Correcto")
    } else {
        alert("Incorrecto")
    }
})

enviar.addEventListener("click", function() {
    if (nombree.value === "Nicole" || nombree.value === "nicole" || nombree.value === "NICOLE" && agee.value === "18" || agee.value === "19" && heig.value === "1.50" || heig.value === "1.51" || heig.value === "1.52" || heig.value === "1.53" || heig.value === "1.54" || heig.value === "1.55" || heig.value === "1.56" || heig.value === "1.57" || heig.value === "1.58") {
        alert("Si puedes pasar")
        window.location.replace("indexx.html");
    } else {
        alert("Hay algunos espacios incorrectos, arregla eso para poder avanzar")
    }
})