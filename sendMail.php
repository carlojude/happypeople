<?php

    $email = $_POST['couponEmail'];
    $coupon = $_POST['coupon'];
    echo $coupon;
    //include PHPMailerAutoload.php
    require 'assets/includes/phpmailer/PHPMailerAutoload.php';

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    //set a host
    $mail->Host = "smtp.gmail.com";

    //enable SMTP
    $mail->isSMTP();
    $mail->SMTPDebug = 2;

    //set authentication to true
    $mail->SMTPAuth = true;

    //set login details for Gmail account
    $mail->Username = "carlojude22@gmail.com";
    $mail->Password = "carlojude";

    //set type of protection
    $mail->SMTPSecure = "ssl"; //or we can use TLS

    //set a port
    $mail->Port = 465; //or 587 if TLS

    //set subject
    $mail->Subject = "Happy People - Coupon Code";

    //set HTML to true
    $mail->isHTML(true);

    //set body
    $mail->Body = "Congratulations! You have received your coupon. Here is your coupon code: <b>" . $coupon . "</b>";

    //add attachment
    $mail->addAttachment('assets/img/400dpiLogo.png', 'happypeople.png');

    //set who is sending an email
    $mail->setFrom('carlojude22@gmail.com', 'Happy People by hannamarket');

    //set where we are sending email (recipients)
    $mail->addAddress($email);

    //send an email
    if ($mail->send())
        echo "mail is sent";
    else
        echo $mail->ErrorInfo;
?>
