CREATE TABLE `heroes_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`classe` varchar(255) NOT NULL,
	`nivel` int NOT NULL,
	CONSTRAINT `heroes_table_id` PRIMARY KEY(`id`)
);
