<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "harce@sorba.com.mx";
$email_subject = "Contacto desde el sitio web";
$email_from = "hmandraque@gmail.com";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['name']) ||
!isset($_POST['email']) ||
!isset($_POST['phone']) ||
!isset($_POST['comments'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['name'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Teléfono: " . $_POST['phone'] . "\n";
$email_message .= "Comentarios: " . $_POST['comments'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
    
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
//dirección del remitente 
$headers .= "From: Geeky Theory ".$email_from."\r\n";

    /*
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();*/
$bool = mail($email_to, $email_subject, $email_message, $headers);
if($bool){
    header("Location: ../index.html");
}else{
    echo "Mensaje no enviado";
    header("Location: ../index.hmtml");
}
}
?>