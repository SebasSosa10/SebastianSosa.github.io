<?php
// Configura los encabezados y verifica si se reciben los datos correctos
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre'] ?? '';
    $email = $_POST['email'] ?? '';
    $asunto = $_POST['asunto'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    // Verifica que no falten datos
    if (empty($nombre) || empty($email) || empty($asunto) || empty($mensaje)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Configura el correo
    $to = "joansebastiansosa10@gmail.com"; // Cambia por tu correo
    $subject = "Formulario de Contacto: $asunto";
    $body = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";
    $headers = "From: $email\r\n" .
        "Reply-To: $email\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "El mensaje ha sido enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.";
    }
} else {
    echo "Método no permitido.";
}
?>