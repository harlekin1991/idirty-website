<?php

    $post = json_decode(file_get_contents('php://input'));

    $session = (array) json_decode($post->session);
    $elements = (array) json_decode($post->elements);

    require_once('_database.php');

    $conn = connection($servername, $username, $password, $database);

    foreach($elements as $element){

       $_elementId = addData($conn, 'elements', array(
            "set_id" => $session["id"]
        ));

        echo "<br><br>".$_elementId."<br><br>";

        $_positionId = addData($conn, 'elements_position', array(
            "element_id" => $_elementId,
            "x" => $element->position->x,
            "y" => $element->position->y,
            "z" => $element->position->z,
            "value_x" => $element->position->valueX,
            "value_y" => $element->position->valueY,
        ));

        $_sizeId = addData($conn,'element_size', array(
            "element_id" => $_elementId,
            "w" => $element->size->w,
            "h" => $element->size->w,
            "value_w" => $element->size->valueW,
            "value_h" => $element->size->valueH
        ));

    }

    close($conn);

?>