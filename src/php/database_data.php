<?php

 require_once('_database.php');

 $conn = connection($servername, $username, $password, $database);

 $databaseData = getDatabaseData($conn);

 close($conn);

 echo json_encode($databaseData);

?>