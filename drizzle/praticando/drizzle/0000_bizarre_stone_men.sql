CREATE TABLE `tabela_usuarios` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	CONSTRAINT `tabela_usuarios_id` PRIMARY KEY(`id`)
);
