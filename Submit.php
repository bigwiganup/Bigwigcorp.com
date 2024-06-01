<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

ini_set("display_errors","on");

$fname = $_POST['Name'];
$services= $_POST['services'];
$email = $_POST['email'];
$phone = $_POST['contact'];
$msg = $_POST['message'];

$servername = "localhost";
$username = "u938605701_BigwigAdmin";
$password = "Admin@bigwig123";
$dbname = "u938605701_Bigwigcorp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Contact_Data (Sr, Name, Contact_no, Email, Service, Message) VALUES ('','$fname', '$phone', '$email', '$services','$msg')";
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>". $conn->error;
}
// Server settings
//    $mail->SMTPDebug = SMTP::DEBUG_SERVER;  // Enable verbose debug output
    $mail->isSMTP(true);                        // Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';  // Set the SMTP server to send through
    $mail->SMTPAuth   = true;               // Enable SMTP authentication
    $mail->Username   = 'sales@bigwigcorp.com';  // SMTP username
    $mail->Password   = 'Sales@2024';      // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  // Enable implicit TLS encryption
    $mail->Port       = 465;                // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('sales@bigwigcorp.com', 'Contact Form Responce : BigwigCorp.com');
    $mail->addAddress('anup.jadhav@bigwigcorp.com', 'Anup');     //Add a recipient
    $mail->addBCC('rahul@bigwigcorp.com','Rahul');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

// Subject
$mail->Subject = 'New Form Submission: ' . $fname ;

// Create the message body
$messageBody = "
<html>

<body>
    <p>Hi <b>Team,</b></p>
    <p>Here is a form submission from $fname  with the following details:</p>
    <ul>
        <li>Name: $fname </li>
        <li>Email: $email</li>
        <li>Phone: $phone</li>
        <li>Services: $services</li>
        <li>Message: $msg</li>
    </ul>
    <p>Please review and take appropriate action.</p>
    <br>
    <p>Best regards,</p>
    <p>Team Bigwigcorp.com</p>
    <br>
    <p>Powered by Bigwig Digital Solutions Pvt. Ltd.</p>
    <p><a href='https://bigwigcorp.com'>Visit Us</a></p>
</body>
</html>
";

// Set the message body in PHPMailer
$mail->isHTML(true);
$mail->Body = $messageBody;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
$mail->send();
        echo "<script>alert('Form Submitted')</script>";
        header("Location: https://bigwigcorp.com/");

} catch (Exception $e) {
     echo 'Message could not be sent.'; 
}

?>