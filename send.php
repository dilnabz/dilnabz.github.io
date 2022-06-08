<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$subject = htmlspecialchars($subject);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$subject = urldecode($subject);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$subject = trim($subject);
$message = trim($message);

mail("abzalovadilnoz@gmail.com", "Письма с сайта-портфолио", "Имя:".$name.".E-mail:".$email."Тема:".$subject."Сообщение:".$message, "From: $email \r\n");