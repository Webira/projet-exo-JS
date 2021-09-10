<?php

$username = "root";
$password = "root";
$servername = "localhost";
$bd = "ajax";
try {
    // connexion à MySql
    $pdo = new PDO("mysql:host=$servername;dbname=$bd", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM utilisateur";

    // CRUD
    // CREATE
    // READ 
    // UPDATE
    // DELETE

    $resultat = $pdo->query($sql)->fetchAll();


    echo json_encode($resultat);
} catch (PDOException $erreur) {
    echo " Erreur Mysql : " . $erreur->getMessage();
}