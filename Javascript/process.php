<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $dobYear = $_POST["dobYear"];
    
    // Calculate age as you did before
    $dobYear = new DateTime($dobYear);
    $currentYear = new DateTime("now");
    $age = $currentYear->diff($dobYear)->y;

    $message = "My name is $firstName $lastName. My age is $age.";

    echo $message;
} else {
    // Handle invalid requests
    echo "Invalid request";
}
?>
