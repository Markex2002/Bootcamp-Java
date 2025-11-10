SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
CREATE SCHEMA IF NOT EXISTS `sheet03` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_as_cs ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `sheet03`.`disciplines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`disciplines` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_disciplines_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`events` (
  `id` INT NOT NULL,
  `discipline_id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `descripción` VARCHAR(45) NULL,
  `fecha_hora` DATETIME NULL,
  `lugar` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `discipline_id`),
  UNIQUE INDEX `id_events_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_events_disciplines_idx` (`discipline_id` ASC) VISIBLE,
  CONSTRAINT `fk_events_disciplines`
    FOREIGN KEY (`discipline_id`)
    REFERENCES `sheet03`.`disciplines` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`payments` (
  `id` INT NOT NULL,
  `monto` DECIMAL(2) NULL,
  `fecha_Vencimiento` DATE NULL,
  `fecha_Pago` DATE NULL,
  `Estado` ENUM("PENDING", "PAID", "OVERDUE") NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_payment_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;

USE `sheet03` ;

-- -----------------------------------------------------
-- Table `sheet03`.`members`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`members` (
  `id` INT NOT NULL,
  `payments_id` INT NOT NULL,
  `full_name` VARCHAR(45) NULL,
  `fecha_Nacimiento` DATE NULL,
  `telefono` VARCHAR(9) NULL,
  `direccion` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `fecha_Inscripcion` DATE NULL,
  `socio_Activo` TINYINT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_members_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_members_payments1_idx` (`payments_id` ASC) VISIBLE,
  CONSTRAINT `fk_members_payments1`
    FOREIGN KEY (`payments_id`)
    REFERENCES `mydb`.`payments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sheet03`.`coaches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`coaches` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `years_Experience` INT NULL,
  `horario_Disponible` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_members_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sheet03`.`coaches_has_disciplines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`coaches_has_disciplines` (
  `coaches_id` INT NOT NULL,
  `disciplines_id` INT NOT NULL,
  PRIMARY KEY (`coaches_id`, `disciplines_id`),
  INDEX `fk_coaches_has_disciplines_disciplines1_idx` (`disciplines_id` ASC) VISIBLE,
  INDEX `fk_coaches_has_disciplines_coaches_idx` (`coaches_id` ASC) VISIBLE,
  CONSTRAINT `fk_coaches_has_disciplines_coaches`
    FOREIGN KEY (`coaches_id`)
    REFERENCES `sheet03`.`coaches` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_coaches_has_disciplines_disciplines1`
    FOREIGN KEY (`disciplines_id`)
    REFERENCES `sheet03`.`disciplines` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sheet03`.`members_has_disciplines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`members_has_disciplines` (
  `members_id` INT NOT NULL,
  `disciplines_id` INT NOT NULL,
  PRIMARY KEY (`members_id`, `disciplines_id`),
  INDEX `fk_members_has_disciplines_disciplines1_idx` (`disciplines_id` ASC) VISIBLE,
  INDEX `fk_members_has_disciplines_members1_idx` (`members_id` ASC) VISIBLE,
  CONSTRAINT `fk_members_has_disciplines_members1`
    FOREIGN KEY (`members_id`)
    REFERENCES `sheet03`.`members` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_members_has_disciplines_disciplines1`
    FOREIGN KEY (`disciplines_id`)
    REFERENCES `sheet03`.`disciplines` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sheet03`.`responsables`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`responsables` (
  `coach_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  PRIMARY KEY (`coach_id`, `event_id`),
  INDEX `fk_coaches_has_events_events1_idx` (`event_id` ASC) VISIBLE,
  INDEX `fk_coaches_has_events_coaches1_idx` (`coach_id` ASC) VISIBLE,
  CONSTRAINT `fk_coaches_has_events_coaches1`
    FOREIGN KEY (`coach_id`)
    REFERENCES `sheet03`.`coaches` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_coaches_has_events_events1`
    FOREIGN KEY (`event_id`)
    REFERENCES `mydb`.`events` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `sheet03`.`participantes_Evento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sheet03`.`participantes_Evento` (
  `member_id` INT NOT NULL,
  `event_id` INT NOT NULL,
  PRIMARY KEY (`member_id`, `event_id`),
  INDEX `fk_members_has_events_events1_idx` (`event_id` ASC) VISIBLE,
  INDEX `fk_members_has_events_members1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_members_has_events_members1`
    FOREIGN KEY (`member_id`)
    REFERENCES `sheet03`.`members` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_members_has_events_events1`
    FOREIGN KEY (`event_id`)
    REFERENCES `mydb`.`events` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;