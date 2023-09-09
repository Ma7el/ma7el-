<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "ma7elorders@gmail.com";
  $subject = "New Order";
  $message = "Name: " . $_POST["customerName"] . "\n";
  $message .= "Email: " . $_POST["customerEmail"] . "\n";
  $message .= "Message: " . $_POST["customerMessage"];

  // Send the email
  mail($to, $subject, $message);
}
?>