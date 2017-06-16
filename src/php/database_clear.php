<?php

 require_once('_database.php');

 $conn = connection($servername, $username, $password, $database);

 dropAllTables($conn);

 close($conn);

 echo json_encode($tables);

?>