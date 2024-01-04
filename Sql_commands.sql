use booking_system;

select * from users;

select * from movies;
CREATE TABLE `movies` (
  `id` int NOT NULL,
  `movie_name` varchar(45) DEFAULT NULL,
  `movie_actor` varchar(45) DEFAULT NULL,
  `movie_time` varchar(45) DEFAULT NULL,
  `movie_date` varchar(45) DEFAULT NULL,
  `movie_status` varchar(45) DEFAULT NULL,
  `movie_amount` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
	

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


insert into users values("3","Ragu","Ragu@gmail.com","Ragu");


CREATE TABLE `booking_system`.`users` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(500) NULL,
  PRIMARY KEY (`id`));
  
  
ALTER TABLE users
ADD name varchar(45) AFTER id;

ALTER TABLE users
RENAME COLUMN username TO email;


ALTER TABLE `booking_system`.`users` 
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ;

DELETE FROM users WHERE id = 3;

	
alter table users add role varchar(45) null after password;


UPDATE `booking_system`.`users` SET `role` = 'admin\n' WHERE (`id` = '5');

DELETE FROM users WHERE id = 12;



CREATE TABLE `movies` (
  `id` int NOT NULL,
  `movie_name` varchar(45) DEFAULT NULL,
  `movie_actor` varchar(45) DEFAULT NULL,
  `movie_time` varchar(45) DEFAULT NULL,
  `movie_date` varchar(45) DEFAULT NULL,
  `movie_status` varchar(45) DEFAULT NULL,
  `movie_amount` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



ALTER TABLE `movies`
MODIFY COLUMN `movie_time` TIME DEFAULT CURRENT_TIMESTAMP,
MODIFY COLUMN `movie_date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP;


select * from movies;

UPDATE `movies`
SET `movie_time` = NULL, `movie_date` = NULL;

DELETE FROM `movies`
WHERE `id` = 1;


ALTER TABLE `movies`
ADD COLUMN `image_url` varchar(255) DEFAULT NULL;

