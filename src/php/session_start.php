<?php

    $post = json_decode(file_get_contents('php://input'));

    $ip='0.0.0.0';
    $ip=$_SERVER['REMOTE_ADDR'];
    $detailsData = json_decode(json_encode(file_get_contents("http://ipinfo.io/$ip/json")));

    $app_name =  $post->app_name;
    $app_path =  $post->app_path;
    $user_name =  $post->user_name;

    require_once('_database.php');

    $clientIp = 'null'; //$ip;
    $clientDetails = '';
    $clientCountry = '';

    if($detailsData->postal){
        $clientDetails .= $detailsData->postal;
    }
    if($detailsData->city){
            $clientDetails .= "|".$detailsData->city;
     }
    if($detailsData->region){
            $clientDetails .= "|".$detailsData->region;
     }
    if($detailsData->country){
            $clientDetails .= "|".$detailsData->country;
            $clientCountry = $detailsData->country;
     }
    if($detailsData->hostname){
            $clientDetails .= "|".$detailsData->hostname;
     }

    $date = date("Y-m-d H:i:s");

    $conn = connection($servername, $username, $password, $database);

    $sessionId = addData($conn, 'session', array(
        "app_name" => $app_name,
        "app_path" => $app_path,
        "user_name" => $user_name,
        "start" => $date,
        "end" => $date,
        "client_ip" => $clientIp,
        "client_country" => $clientCountry,
        "client_details" => $clientDetails
    ));

    close($conn);

    $sessionData = array(
        "id"=> $sessionId,
        "app_name" => $app_name,
        "client_ip" => $clientIp,
        "client_details" => $clientDetails
    );
    echo json_encode($sessionData);

?>