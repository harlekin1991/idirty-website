 <?php
    ini_set('html_errors', false);

    $servername = "sql507.your-server.de";
    $username = "idirty";
    $password = "ijfP3M54D1R7x7mx";
    $database = "idirty_db";

    function connection($servername, $username, $password, $database){
        $conn = mysqli_connect($servername, $username, $password, $database);
        if(!$conn){ die('Could not connect: ' . mysqli_error($conn)); };
        return $conn;
    }

    function close($conn){
        mysqli_close($conn);
    }
     function createTable($tableName, $fields, $conn){
            $sql = "CREATE TABLE ".$tableName."( ";
            $sql.= "id INT NOT NULL AUTO_INCREMENT, ";
            foreach ($fields as $field){$sql .= $field.", ";}
            $sql .="PRIMARY KEY ( id )); ";
            $retval = mysqli_query($conn, $sql);
            if(!$retval){
                echo 'Could not create table: ' . mysqli_error($conn).'<br>';
            }else{
                echo "Table ".$tableName." created successfully <br>";
            }
        }

        function getDatabaseData($conn){
                $sql = "SHOW TABLES";
                $result = array();
               if($retval = mysqli_query($conn, $sql)){
                            /* add table name to array */
                            while($row = mysqli_fetch_row($retval)){
                              $result[]=$row;
                            }
                          }else{
                             die("Error, could not list tables. MySQL Error: " . mysql_error());
                           }
                if(!$retval){
                    echo 'Could not create table: ' . mysqli_error($conn).'<br>';
                }else{
                    //echo "Table ".$tableName." created successfully <br>";
                }
                return array(
                    "database" => $retval,
                    "tables" => $result
                );

            }
    function addData($conn, $tableName, $fields){
                $sql = "INSERT INTO ".$tableName." ( ";
                foreach($fields as $key => $value){
                    $sql .= "".$key.", ";
                }
                $sql = substr($sql, 0, -2);
                $sql .=" ) VALUES ( ";
                foreach($fields as $key => $value){
                    $sql .= "'".$value."', ";
                }
                $sql = substr($sql, 0, -2);
                 $sql .=" );";
                 /*
                $sql .=" ) ON DUPLICATE KEY UPDATE ";
                 foreach($fields as $key => $value){
                    $sql .= $key."='".$value."', ";
                }
                $sql = substr($sql, 0, -2);
                $sql .=" ;";
                */
              //  echo "<br><br>".$sql."<br><br>";
                $retval = mysqli_query($conn, $sql);

                if(!$retval){
                    echo 'Could not create table: ' . mysqli_error($conn).'<br>';
                }
                return mysqli_insert_id($conn);
    }

    function dropAllTables($conn) {
            $sql = "SHOW TABLES";
            if($result = mysqli_query($conn, $sql)){
              /* add table name to array */
              while($row = mysqli_fetch_row($result)){
                $found_tables[]=$row[0];
              }
            }else{
               die("Error, could not list tables. MySQL Error: " . mysql_error());
             }
             foreach($found_tables as $table_name){
               $sql = "DROP TABLE $table_name";
               if($result = mysqli_query($conn, $sql)){
                 echo "Success - table $table_name deleted.";
               }
               else{
                 echo "Error deleting $table_name. MySQL Error: " . mysql_error() . "";
               }
             }

        }



?>
