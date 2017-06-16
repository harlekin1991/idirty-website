<?php

    $post = json_decode(file_get_contents('php://input'));

    $session_id = $post->session_id;
    $action_name = $post->name;
    $action_data = $post->data;

    require_once('_database.php');

    $conn = connection($servername, $username, $password, $database);

    $actionId = addData($conn, 'action', array(
        "session_id" => $session_id,
        "name" => $action_name,
        "data" => $action_data
    ));

    close($conn);

    $actionData = array(
        "id"=> $actionId
    );

    echo json_encode($actionData);

?>