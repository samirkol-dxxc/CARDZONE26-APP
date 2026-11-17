<?php
header("Content-Type: application/json");
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['email']) && isset($data['password'])) {
    $email = mysqli_real_escape_string($conn, $data['email']);
    $password = $data['password'];

    // Check karein ki user pehle se hai ya nahi
    $result = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
    
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        // Password verify karein
        if (password_verify($password, $user['password'])) {
            echo json_encode(["status" => "success", "message" => "Login successful", "balance" => $user['balance']]);
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect password!"]);
        }
    } else {
        // Naya user register karein
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $insert = "INSERT INTO users (email, password, balance) VALUES ('$email', '$hashed_password', 0.00)";
        if (mysqli_query($conn, $insert)) {
            echo json_encode(["status" => "success", "message" => "Account created successfully", "balance" => 0.00]);
        } else {
            echo json_encode(["status" => "error", "message" => "Registration failed!"]);
        }
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid data!"]);
}
?>