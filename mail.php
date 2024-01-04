<?php
//print_r($_POST);
$name= $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$service =$_POST['service'];
$subject = "Nikhil Bole";


$m1 = "<h2>".$subject."</h2><hr>"."<br>";
$m2 = "<b>Name :</b>".$name."<br>";
$m3 = "<b>Email :</b>".$email."<br>";
$m4 = "<b>Phone :</b>".$phone."<br>";
$m5 = "<b>Service :</b>".$service."<br>";
$m6 = "<b>Message :</b>".$message."<br>";

$message = $m1.$m2.$m3.$m4.$m5.$m6;

$to="nikhil.boal@gmail.com";


$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';


$headers[] = 'From: '.$name.' <'.$email.'>';
$headers[] = 'Reply-To: '.$name.' <'.$email.'>';
$headers[] = 'bcc: karanpaul85@gmail.com';

if(mail($to, $subject, $message, implode("\r\n", $headers)))
{
   header('location: thankyou.html');
}
else
{
    echo "Message could not deliver, please try again later.";
    ?>
    <a href="index.html">Go Back</a>
    <?php
    exit;
}
?>