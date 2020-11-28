<!DOCTYPE HTML>
<html>
<body>
<?php

$hostname = "localhost";
$username = "marcos";
$password = "bitacoraLAMP";
$db = "bitacora";

$dbconnect=mysqli_connect($hostname,$username,$password,$db);

if ($dbconnect->connect_error) {
  die("Database connection failed: " . $dbconnect->connect_error);
}

?>

<table border="1" align="center">
<tr>
  <td>ID</td>
  <td>Nombre</td>
  <td>Apellidos</td>
  <td>Correo</td>
</tr>

<?php

$query = mysqli_query($dbconnect, "SELECT * FROM profesores")
   or die (mysqli_error($dbconnect));

while ($row = mysqli_fetch_array($query)) {
  echo
   "<tr>
    <td>{$row['profesor_id']}</td>
    <td>{$row['first_name']}</td>
    <td>{$row['last_name']}</td>
    <td>{$row['email']}</td>
   </tr>\n";

}

?>
</table>
</body>
</html>
