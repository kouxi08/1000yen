CREATE TABLE `quiz_log` (
	`id` char(36) NOT NULL,
	`quiz_id` char(36) NOT NULL,
	`quiz_set_log_id` char(36) NOT NULL,
	`user_answer` text NOT NULL,
	`time` int,
	`is_correct` boolean NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `quiz_log_id` PRIMARY KEY(`id`),
	CONSTRAINT `time_check` CHECK(`quiz_log`.`time` >= 0)
);
--> statement-breakpoint
CREATE TABLE `quiz_mode` (
	`id` char(36) NOT NULL,
	`name` varchar(20) NOT NULL,
	`description` varchar(100) NOT NULL,
	`is_public` boolean NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `quiz_mode_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `quiz_set_log` (
	`id` char(36) NOT NULL,
	`user_id` char(36) NOT NULL,
	`quiz_mode_id` char(36) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `quiz_set_log_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_costumes` (
	`user_id` char(36) NOT NULL,
	`costume_id` char(36) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` char(36) NOT NULL,
	`firebase_uid` varchar(128) NOT NULL,
	`nickname` varchar(20) NOT NULL,
	`birthday` date,
	`level` int NOT NULL DEFAULT 1,
	`experience` int NOT NULL DEFAULT 0,
	`costume_id` char(36),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_firebase_uid_unique` UNIQUE(`firebase_uid`)
);
--> statement-breakpoint
ALTER TABLE `quiz_log` ADD CONSTRAINT `quiz_log_quiz_set_log_id_quiz_set_log_id_fk` FOREIGN KEY (`quiz_set_log_id`) REFERENCES `quiz_set_log`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `quiz_set_log` ADD CONSTRAINT `quiz_set_log_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `quiz_set_log` ADD CONSTRAINT `quiz_set_log_quiz_mode_id_quiz_mode_id_fk` FOREIGN KEY (`quiz_mode_id`) REFERENCES `quiz_mode`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_costumes` ADD CONSTRAINT `user_costumes_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `firebase_uid` ON `users` (`firebase_uid`);