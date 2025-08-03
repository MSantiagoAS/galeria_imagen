const imagenPrincipal = document.getElementById("imagen_principal");
const tituloImagen = document.getElementById("titulo_imagen");
const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", () => {
        imagenPrincipal.src = miniatura.src;
        tituloImagen.textContent = miniatura.dataset.titulo || "Imagen";
        tituloImagen.style.color = miniatura.dataset.color || "black";});
});
