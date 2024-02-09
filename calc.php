<?php
$first_name = $_POST['first_name'];
$second_name = $_POST['second_name'];

if( !empty($first_name) || (!empty($second_name))){
   $host = "localhost";
   $dbusername = "root";
   $dbpassword= "";
   $dbname = "book";

   $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

   if(mysqli_connect_error()){
    die('Connection Error('. mysqli_connect_errno().')'. mysqli_connect_error());

   } else{
     $INSERT= " INSERT INTO calculator ( first_name, second_name) values(?, ?)";

     $stmt = $conn->prepare($INSERT);
     $stmt->bind_param("ss", $first_name, $second_name);
     $stmt->execute();
   }


}
else{
    echo "All fields are required";
    die();
}





?>