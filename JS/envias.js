document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el comportamiento predeterminado

    const formData = new FormData(this);

    fetch("PHP/datos.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("responseMessage").innerHTML = `<div class="alert alert-success">${data}</div>`;
            document.getElementById("contactForm").reset(); // Limpia el formulario
        })
        .catch((error) => {
            document.getElementById("responseMessage").innerHTML = `<div class="alert alert-danger">Error al enviar el mensaje. Inténtalo de nuevo.</div>`;
            console.error("Error:", error);
        });
});
