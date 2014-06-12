<?php
/* =======================================================
   CONEXION CON PDO
   ======================================================= */
try {
	$conn = new PDO('mysql:host=localhost;dbname=myDataBase', 'user', 'pass');
	$conn->query('SET NAMES \'utf8\'');
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //fijar errores de PDOException
} catch (PDOException $e) {
	echo "Error de conexion a BBDDD nº:".$e->getCode()."<br/>".$e->getMessage()."";
	exit();
}

$resultFamilia = $conn->query("SELECT cod, nombre FROM familia");
if($resultFamilia) {
	while ($row = $resultFamilia->fetch(PDO::FETCH_OBJ)) {
		$arrFamilia[] = $row->nombre; //campo o atributo de la tupla
	}
	return $arrFamilia;
}

$resultFamilia = null;//cerramos buffer de peticion
$conn = null;//cerramos conexion a Mysql
?>


<?php