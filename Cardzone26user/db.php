<?php
$host = "localhost";
$user = "root";
$pass = ""; // Agar aapke local server me password hai toh yahan daalein, warna khali chhod dein
$dbname = "cardzone_db";

// Connection banayein
$conn = mysqli_connect($host, $user, $pass);

// Agar database nahi hai toh create kar lein
mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS $dbname");
mysqli_select_db($conn, $dbname);

// Users table create karna (agar pehle se nahi hai)
$table_users = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    balance DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
mysqli_query($conn, $table_users);
?>