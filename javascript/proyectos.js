

function buscarProyecto() {
    let busqueda = document.getElementById("searchInput").value.toLowerCase();

    document.getElementById("proyecto1").style.display = "block";
    document.getElementById("proyecto2").style.display = "block";
    document.getElementById("proyecto3").style.display = "block";

    if (busqueda === "javascript") {
        document.getElementById("proyecto2").style.display = "none";
        document.getElementById("proyecto3").style.display = "none";
    } else if (busqueda === "react") {
        document.getElementById("proyecto1").style.display = "none";
        document.getElementById("proyecto3").style.display = "none";
    } else if (busqueda === "angular") {
        document.getElementById("proyecto1").style.display = "none";
        document.getElementById("proyecto2").style.display = "none";
    }
}

document
    .getElementById("searchInput")
    .addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            buscarProyecto();
        }
    });

document.getElementById("searchInput").addEventListener("input", function () {
    if (this.value.trim() === "") {
        document.getElementById("proyecto1").style.display = "block";
        document.getElementById("proyecto2").style.display = "block";
        document.getElementById("proyecto3").style.display = "block";
    }
});
