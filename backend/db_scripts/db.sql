CREATE DATABASE IF NOT EXISTS appdb;

USE appdb;

/* 
  Agregar hora
  Crear tabla para usuario (loggin)
*/
CREATE TABLE IF NOT EXISTS registros(
  id INT NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(50),
  sala VARCHAR(5),
  bloque_horario TINYINT,
  fecha_registro DATE,
  PRIMARY KEY(id)
);


INSERT IGNORE INTO registros(usuario, sala, bloque_horario, fecha_registro) VALUES
  ('user1','9101', 1,'2023/11/02' ),
  ('user1','9101', 2,'2023/11/02' ),
  ('user1','9101', 3,'2023/11/02' ),
  ('user1','9101', 4,'2023/11/02' ),
  ('user1','9101', 5,'2023/11/02' ),
  ('user1','9101', 6,'2023/11/02' ),  
  ('user1','9101', 1,'2023/11/03' ),
  ('user1','9101', 2,'2023/11/03' ),
  ('user1','9101', 3,'2023/11/03' ),
  ('user1','9101', 4,'2023/11/03' ),
  ('user1','9101', 5,'2023/11/03' ),
  ('user1','9101', 6,'2023/11/3' );
  