DROP DATABASE IF EXISTS sushi_DB;
CREATE DATABASE sushi_DB;
USE sushi_DB;

CREATE TABLE sushi (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  hasBeenEaten BOOL DEFAULT FALSE,
  PRIMARY KEY ( id ) 
);