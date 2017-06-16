<?php

    require_once('_database.php');

    $conn = connection($servername, $username, $password, $database);

    createTable("artist", array(
        "name VARCHAR(100) NOT NULL",
        "email VARCHAR(100) NOT NULL",
        "type VARCHAR(100) NOT NULL"
    ),  $conn);

    close($conn);

?>
