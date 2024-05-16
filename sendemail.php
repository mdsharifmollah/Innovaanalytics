<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
if(isset($_POST['send'])){

    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $message = htmlentities($_POST['message']);
    
        $mail = new PHPMailer(true); 

        $mail->IsSMTP();                           
        $mail->SMTPAuth   = true;                      
        $mail->Host       = "aus.innova-analytics.ai"; 
        $mail->Username   = "info@aus.innova-analytics.ai";   
        $mail->Password   = "th#5XonT6uP2";           
        $mail->SMTPSecure = 'ssl';
        $mail->IsSendmail();  
        $mail->Port = 465;
        $mail->isHTML(true);
        $mail->setFrom($email, $name);
        $mail->addAddress('info@aus.innova-analytics.ai');
        $mail->Subject = ("$email");
        $mail->Body = $message;
        $mail->send();
     
       header("Location: ./contact.php?=email_sent!");
            
          
}  
        