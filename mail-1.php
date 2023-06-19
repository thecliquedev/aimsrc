
<?php
    include('PHPMailer/PHPMailerAutoload.php');

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    
    echo smtp_mailer('s@ajnasoft.com', 'Website Contact Us From', "Name: $name <br> E-mail: $email <br> Phone: $phone <br> Message: $message");
    function smtp_mailer($to,$subject, $msg){
        $mail = new PHPMailer(); 
        //$mail->SMTPDebug=3;
        $mail->IsSMTP(); 
        $mail->SMTPAuth = true; 
        $mail->SMTPSecure = 'ssl'; 
        $mail->Host = "smtp.gmail.com";
        $mail->Port = "465"; 
        $mail->IsHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Username = "ajna.testmail@gmail.com";
        $mail->Password = 'ajna.testmail@google';
        $mail->SetFrom("ajna.testmail@gmail.com");
        $mail->Subject = $subject;
        $mail->Body =$msg;
        $mail->AddAddress($to);
        $mail->SMTPOptions=array('ssl'=>array(
            'verify_peer'=>false,
            'verify_peer_name'=>false,
            'allow_self_signed'=>false
        ));
        if(!$mail->Send()){
            echo $mail->ErrorInfo;
        }else{
            echo '<h3>Thank you, Your Message has been sent successfully.  We will get back to you soon!</h3>';
        }
    }
?>