    setTimeout(() => {
        document.getElementById("boton").style.display = "inline-block";
    }, 3000);

function change () {
    document.getElementById("cambio").style.display = "none";
    document.getElementById("nuevo").style.display = "block";
}

setTimeout(() => {
    document.getElementById("siguientee").style.display = "inline-block";
}, 3000);

function changes () {
    document.getElementById("nuevo").style.display = "none";
    document.getElementById("vdd2").style.display = "block";
}

function secret (){
    document.getElementById("vdd2").style.display = "none";
    document.getElementById("secreto").style.display = "block";
}