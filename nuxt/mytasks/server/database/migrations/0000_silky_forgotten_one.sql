CREATE TABLE `heroes_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`idade` int NOT NULL,
	CONSTRAINT `heroes_table_id` PRIMARY KEY(`id`)
);
