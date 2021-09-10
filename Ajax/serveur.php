<?php

/* $nom = $_GET["nomGet"];
$prenom = $_GET["prenomGet"];

echo $nom . "  " . $prenom; */

$nom = $_POST["nomPost"];
$prenom = $_POST["prenomPost"];

// AJAX
/* utilisateur ( id Primary KEY Auto_INCREMENT ,
              nom VARCHAR(45),
              prenom VARCHAR(45)) */

$username = "root";
$password = "root";
$servername = "localhost";
$bd = "AJAX";

try {
    // connexion à MySql
    $pdo = new PDO("mysql:host=$servername;dbname=$bd", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO utilisateur (nom,prenom) VALUES ('$nom','$prenom')";
    $pdo->exec($sql);
    echo " donnée inserer";
} catch (PDOException $erreur) {
    echo " Erreur Mysql : " . $erreur->getMessage();
}