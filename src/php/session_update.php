<?php

    $post = json_decode(file_get_contents('php://input'));

    $sessionId =  $post->session_id;

    require_once('_database.php');

    $conn = connection($servername, $username, $password, $database);

    $date = date("Y-m-d H:i:s");

    updateTable('session', $sessionId, array("end" => $date), $conn);

    close($conn);

?>
