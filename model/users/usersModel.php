<?php

include_once '../connection.php';


$event = $_POST['event'];

// összes felhasználó lekérdezése
if ($event == 'showAllUsers') {

    $mysqli = new mysqli($connection['host'], $connection['user'], $connection['passwd'], $connection['db']);
    $mysqli->set_charset("utf8");
    
    $result = $mysqli->query("SELECT * FROM users");
    
    while ($row = $result->fetch_object()) {
        
        $user_arr = array(
            'id' => $row->id,
            'firstname' => $row->firstname,
            'lastname' => $row->lastname
        );
        
        $users[] = $user_arr;
    } 
    
    $mysqli->close();
    echo json_encode($users);
}


// user hozzáadása
if ($event == 'addUser') {
    
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $alcohol = $_POST['alcohol'];
    $photo = $_POST['photo'];
    $video = $_POST['video'];
    $masturbate = $_POST['masturbate'];
    $toys = $_POST['toys'];
    $oralsex = $_POST['oralsex'];
    $analsex = $_POST['analsex'];
    $tiedupsex = $_POST['tiedupsex'];
    
    // default values
    $alcohol_val = 0;
    $photo_val = 0;
    $video_val = 0;
    $masturbate_val = 0;
    $toys_val = 0;
    $oralsex_val = 0;
    $analsex_val = 0;
    $tiedupsex_val = 0;
    
    if (isset($alcohol)) $alcohol_val = 1;
    if (isset($photo)) $photo_val = 1;
    if (isset($video)) $video_val = 1;
    if (isset($masturbate)) $masturbate_val = 1;
    if (isset($toys)) $toys_val = 1;
    if (isset($oralsex)) $oralsex_val = 1;
    if (isset($analsex)) $analsex_val = 1;
    if (isset($tiedupsex)) $tiedupsex_val = 1;
    
    $mysqli = new mysqli($connection['host'], $connection['user'], $connection['passwd'], $connection['db']);
    $mysqli->set_charset("utf8");

    if ($mysqli->connect_errno) {
        $result = array(
            'success' => false,
            'errno' => $mysqli->connect_errno,
            'error' => $mysqli->connect_error
        );
    }

    $stmt = $mysqli->prepare("INSERT INTO users(firstname,lastname,alcohol,photo,video,masturbate,toys,oralsex,analsex,tiedupsex) VALUES (?,?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param('ssiiiiiiii', $firstName, $lastName,$alcohol_val,$photo_val,$video_val,$masturbate_val,$toys_val,$oralsex_val,$analsex_val,$tiedupsex_val);
    $stmt->execute();
    
    $mysqli->close();

    $result = array(
        'success' => true
    );

    echo json_encode($result);
}




?>
