<?php

	error_reporting(0);
	require_once("database.class.php");
	
	class Vacantes{
		
		public function getPostulaciones(){
			$db = new database();
			$conn = $db->conn();
			try{
				$sql = "SELECT * FROM trabaje";
				$query = $conn->prepare($sql);
				$executed = $query->execute(); 
				$result = $query->fetchAll();
				echo json_encode($result);
			}catch(PDOException $e){
				echo 'Caught Exception: '.$e->getMessage();
			}
		}
		
		
	}
?>