document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); 

        const formData = new FormData(this);

        fetch("PHP/datos.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                document.getElementById("responseMessage").innerHTML = `<div class="alert alert-success">${data}</div>`;
                this.reset();
            })
            .catch((error) => {
                document.getElementById("responseMessage").innerHTML = `<div class="alert alert-danger">Error al enviar el mensaje. Inténtalo de nuevo.</div>`;
                console.error("Error:", error);
            });
    });
});