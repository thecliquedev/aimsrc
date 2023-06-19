
<?php
    include('PHPMailer/PHPMailerAutoload.php');

    $name = $_POST['name'];
    $email = $_POST['email'];
    $department = $_POST['department'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    if($department == "Admissions"){
        echo smtp_mailer('aimsrcprincipaloff@gmail.com', 'Website Contact Us From', "Name: $name <br> E-mail: $email <br> Phone: $phone <br> Message: $message");
    }else if($department == "Reception"){
        echo smtp_mailer('info@aimsrc.com', 'Website Contact Us From', "Name: $name <br> E-mail: $email <br> Phone: $phone <br> Message: $message");
    }else if ($department == "Career"){
        echo smtp_mailer('career@aimsrc.com', 'Website Contact Us From', "Name: $name <br> E-mail: $email <br> Phone: $phone <br> Message: $message");
   
    }else{
        echo smtp_mailer('info@aimsrc.com', 'Website Contact Us From', "Name: $name <br> E-mail: $email <br> Phone: $phone <br> Message: $message");
    }
    
    
    function smtp_mailer($to,$subject, $msg){
        $mail = new PHPMailer(); 
        //$mail->SMTPDebug=3;
        $mail->IsSMTP(); 
        $mail->SMTPAuth = true; 
        $mail->SMTPSecure = 'tls'; 
        $mail->Host = "smtp.sendgrid.net";
        $mail->Port = "587"; 
        $mail->IsHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Username = "apikey";
        $mail->Password = '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';
        $mail->SetFrom("webmaster@akashinternationalschool.com");
        $mail->Subject = $subject;
        $mail->Body =$msg;
        $mail->AddAddress($to);
        // $mail->SMTPOptions=array('ssl'=>array(
        //     'verify_peer'=>false,
        //     'verify_peer_name'=>false,
        //     'allow_self_signed'=>false
        // ));
        if(!$mail->Send()){
            echo $mail->ErrorInfo;
        }else{
            echo '<h3>Thank you, Your Message has been sent successfully.  We will get back to you soon!</h3>';
        }
    }
?>