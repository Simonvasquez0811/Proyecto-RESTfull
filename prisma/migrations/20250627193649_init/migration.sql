-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NULL,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `registration_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `last_login` DATETIME(3) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `author_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `biography` VARCHAR(191) NULL,
    `birth_date` DATETIME(3) NULL,
    `nationality` VARCHAR(191) NULL,

    PRIMARY KEY (`author_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    UNIQUE INDEX `Category_name_key`(`name`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Book` (
    `book_id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `isbn` VARCHAR(191) NULL,
    `publication_date` DATETIME(3) NULL,
    `description` VARCHAR(191) NULL,
    `file_path` VARCHAR(191) NULL,
    `cover_image` VARCHAR(191) NULL,
    `upload_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `available` BOOLEAN NOT NULL DEFAULT true,
    `author_id` INTEGER NULL,
    `category_id` INTEGER NULL,

    UNIQUE INDEX `Book_isbn_key`(`isbn`),
    PRIMARY KEY (`book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Loan` (
    `loan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `loan_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `due_date` DATETIME(3) NULL,
    `return_date` DATETIME(3) NULL,
    `status` ENUM('active', 'returned', 'overdue') NOT NULL DEFAULT 'active',
    `user_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,

    PRIMARY KEY (`loan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `Author`(`author_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `Book`(`book_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
