CREATE TABLE `node-tsc`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
   PRIMARY KEY (id)
  );