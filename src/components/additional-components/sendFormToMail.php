<?php
// Replace with your Mailgun API key
$api_key = 'a6e71ef8bd1e1cf52f6103f1e86c5ef8-4c2b2223-f752ff91';

// Replace with the email address you want to send from
$from_email = $_POST['email'];

// Replace with the email address you want to send to
$to_email = 'burakdereli03@gmail.com';

// Replace with the subject of the email
$subject = "Konu: ".$_POST['subject']."\n";

// Replace with the body of the email
$body = "Mesaj: ".$_POST['message'];

// Use cURL to send the email
$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($ch, CURLOPT_USERPWD, 'api:' . $api_key);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_URL, 'https://api.mailgun.net/v3/example.com/messages');
curl_setopt($ch, CURLOPT_POSTFIELDS, array(
    'from' => $from_email,
    'to' => $to_email,
    'subject' => $subject,
    'text' => $body
));
$result = curl_exec($ch);
curl_close($ch);

// Check the result of the request
if ($result) {
    echo 'Email sent successfully.';
} else {
    echo 'Error sending email.';
}
?>
