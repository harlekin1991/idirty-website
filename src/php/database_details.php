<?php

    require_once('_database.php');

    $details = array(
        "server"=> $servername,
        "username" => $username,
        "database" => $database
    );

    echo json_encode($details);

?>