<?php
if (isset($_POST['send']))
{
    $to      = $_POST['email']; //user email
    $senderEmail = 'info@happypeoplesmile.com'; //admin email
    $subject = 'Happy People - Coupon Code'; //subject of the message
    $coupon = $_POST['coupon']; //content
    $headers = 'From: ' . $senderEmail . "\r\n" .
        'Content-type: text/html'. "\r\n";

    $body ="Email: " . $senderEmail . "<br>" . $coupon;	//complete content

    mail($to, $subject, $body, $headers);

    echo "<script>alert('Message Successfully Sent!')</script>";
}
?>