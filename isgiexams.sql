-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220620.3e672740f3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2022 at 03:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `isgiexams`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_sess` (IN `S_Name` VARCHAR(40))   BEGIN
	UPDATE users SET sessions = sessions+1 WHERE username = S_Name;
	SELECT sessions FROM users WHERE username = S_Name;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `batchexam`
--

CREATE TABLE `batchexam` (
  `idbat` int(11) NOT NULL,
  `code` longtext DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `header` varchar(255) DEFAULT 'default',
  `idf` int(11) DEFAULT NULL,
  `idm` int(11) DEFAULT NULL,
  `vari` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `batchexam`
--

INSERT INTO `batchexam` (`idbat`, `code`, `username`, `header`, `idf`, `idm`, `vari`) VALUES
(3453969, '{\"exams\":[\"454029\",\"454230\",\"454432\",\"454635\",\"454836\"]}', 'ayoubg', 'default', 1, 1, 5),
(7160006, '{\"exams\":[\"160209\",\"160413\",\"160616\",\"160819\",\"161023\"]}', 'ayoubg', 'default', 1, 1, 5),
(92681323, '{\"exams\":[\"681379\",\"681581\",\"681781\",\"681984\",\"682186\"]}', 'ayoubg', 'default', 1, 1, 5),
(92717185, '{\"exams\":[\"717245\",\"717447\",\"717649\",\"717851\",\"718053\"]}', 'ayoubg', 'default', 1, 1, 5),
(93057899, '{\"exams\":[\"057950\"]}', 'ayoubg', 'default', 1, 1, 1),
(93740432, '{\"exams\":[\"740511\",\"740712\",\"740913\",\"741114\",\"741315\",\"741516\",\"741717\",\"741918\",\"742120\",\"742320\",\"742521\",\"742722\"]}', 'ayoubg', 'default', 1, 1, 12);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `idc` int(11) NOT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `message` longtext DEFAULT NULL,
  `lire` bit(1) DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`idc`, `nom`, `email`, `message`, `lire`) VALUES
(1, 'anas', 'anas@gmail.com', 'ahsaan site f l3alaam', b'0'),
(2, 'habib', 'habib@gmail.com', '3ndi mochkiiil f password', b'1'),
(3, 'bilal', 'bilal@gmail.com', 'ana makhlastch 40 dh', b'0'),
(4, 'yassmin', 'yasmmin@gmail.com', 'sabab ach hh', b'0'),
(5, 'anouman', 'anouman@gmail.com', 'afin hania hh', b'0'),
(6, 'lala', 'lala@gmail.com', 'nadi kanadi ', b'1'),
(7, 'adam', 'test@gmail.com', 'hy', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `idexam` int(11) NOT NULL,
  `code` longtext DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `idbat` int(11) DEFAULT NULL,
  `vari` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`idexam`, `code`, `username`, `idbat`, `vari`) VALUES
(57950, '{\"code\":[\"62b2e17372b12\",\"62b2e0a71a063\",\"62b2e08512c1b\",\"62b2e2df0cd47\",\"10\",\"6\",\"62b2d9cb6407a\",\"62b2da5d540a2\",\"8\",\"62b2e278cdc64\",\"62b2da9b279fc\",\"62b2e120e0840\",\"62b2e22024a62\",\"62b2e13cb2b8f\",\"7\",\"62b2dee3df3f3\",\"5\",\"4\",\"2\",\"62b2e1e537ad5\"]}', 'ayoubg', 93057899, 1),
(160209, '{\"code\":[\"62b2e08512c1b\",\"62b2e24d52048\",\"62b2e2c235ba7\",\"4\",\"62b2e0f8c9175\",\"3\",\"62b2e120e0840\",\"62b2dee3df3f3\",\"62b2e2989aba2\",\"6\",\"62b2e19d6efba\",\"62b2e278cdc64\",\"62b2da9b279fc\",\"62b2e22024a62\",\"1\",\"62b2e2df0cd47\",\"5\",\"62b2e17372b12\",\"7\",\"2\"]}', 'ayoubg', 7160006, 3),
(160413, '{\"code\":[\"62b2e13cb2b8f\",\"62b2e08512c1b\",\"62b2e17372b12\",\"10\",\"2\",\"62b2e19d6efba\",\"62b2e278cdc64\",\"62b2e24d52048\",\"62b2da5d540a2\",\"62b2e0f8c9175\",\"9\",\"62b2e2df0cd47\",\"62b2e22024a62\",\"6\",\"62b2d9cb6407a\",\"62b2e0a71a063\",\"4\",\"62b2e2989aba2\",\"8\",\"62b2e1e537ad5\"]}', 'ayoubg', 7160006, 2),
(160616, '{\"code\":[\"62b2e120e0840\",\"62b2e0a71a063\",\"2\",\"5\",\"62b2e22024a62\",\"62b2dee3df3f3\",\"10\",\"62b2e278cdc64\",\"62b2e2989aba2\",\"62b2e13cb2b8f\",\"62b2da9b279fc\",\"62b2e17372b12\",\"62b2d9cb6407a\",\"1\",\"8\",\"62b2e19d6efba\",\"62b2e1e537ad5\",\"62b2e0f8c9175\",\"62b2e2c235ba7\",\"62b2e08512c1b\"]}', 'ayoubg', 7160006, 5),
(160819, '{\"code\":[\"8\",\"62b2da9b279fc\",\"62b2e278cdc64\",\"62b2e0f8c9175\",\"62b2e17372b12\",\"62b2e1e537ad5\",\"62b2dee3df3f3\",\"62b2d9cb6407a\",\"62b2e2989aba2\",\"10\",\"62b2e24d52048\",\"62b2e19d6efba\",\"62b2e13cb2b8f\",\"4\",\"62b2da5d540a2\",\"62b2e2c235ba7\",\"62b2e22024a62\",\"3\",\"62b2e0a71a063\",\"5\"]}', 'ayoubg', 7160006, 1),
(161023, '{\"code\":[\"62b2e0f8c9175\",\"62b2e278cdc64\",\"62b2e0a71a063\",\"62b2e1e537ad5\",\"3\",\"62b2e2df0cd47\",\"62b2e17372b12\",\"62b2e2989aba2\",\"4\",\"7\",\"62b2e24d52048\",\"62b2e19d6efba\",\"62b2e08512c1b\",\"62b2da5d540a2\",\"10\",\"62b2e2c235ba7\",\"62b2d9cb6407a\",\"9\",\"6\",\"5\"]}', 'ayoubg', 7160006, 4),
(454029, '{\"code\":[\"62b2d9cb6407a\",\"62b2e0a71a063\",\"62b2da9b279fc\",\"62b2e22024a62\",\"1\",\"9\",\"62b2e17372b12\",\"10\",\"62b2e2df0cd47\",\"8\",\"62b2e08512c1b\",\"62b2da5d540a2\",\"62b2e2989aba2\",\"62b2e120e0840\",\"4\",\"62b2dee3df3f3\",\"62b2e13cb2b8f\",\"62b2e278cdc64\",\"62b2e19d6efba\",\"3\"]}', 'ayoubg', 3453969, 3),
(454230, '{\"code\":[\"62b2e24d52048\",\"62b2e120e0840\",\"62b2da9b279fc\",\"62b2e0a71a063\",\"62b2e13cb2b8f\",\"62b2e278cdc64\",\"62b2dee3df3f3\",\"3\",\"62b2da5d540a2\",\"62b2e0f8c9175\",\"62b2e1e537ad5\",\"2\",\"8\",\"7\",\"62b2e22024a62\",\"6\",\"10\",\"62b2e08512c1b\",\"1\",\"62b2e2c235ba7\"]}', 'ayoubg', 3453969, 5),
(454432, '{\"code\":[\"62b2e2c235ba7\",\"62b2e2df0cd47\",\"62b2da5d540a2\",\"62b2d9cb6407a\",\"8\",\"9\",\"62b2e13cb2b8f\",\"62b2e0a71a063\",\"62b2e2989aba2\",\"62b2e278cdc64\",\"5\",\"2\",\"62b2dee3df3f3\",\"62b2da9b279fc\",\"62b2e19d6efba\",\"7\",\"62b2e24d52048\",\"6\",\"10\",\"62b2e17372b12\"]}', 'ayoubg', 3453969, 1),
(454635, '{\"code\":[\"62b2da5d540a2\",\"62b2e278cdc64\",\"62b2e22024a62\",\"62b2e120e0840\",\"62b2e08512c1b\",\"62b2e1e537ad5\",\"2\",\"62b2da9b279fc\",\"5\",\"62b2e2df0cd47\",\"7\",\"6\",\"62b2e19d6efba\",\"4\",\"62b2e0a71a063\",\"62b2dee3df3f3\",\"8\",\"3\",\"10\",\"62b2e17372b12\"]}', 'ayoubg', 3453969, 2),
(454836, '{\"code\":[\"62b2e2989aba2\",\"62b2e24d52048\",\"3\",\"62b2e22024a62\",\"62b2e17372b12\",\"62b2e2c235ba7\",\"62b2e0a71a063\",\"62b2da5d540a2\",\"62b2e1e537ad5\",\"2\",\"6\",\"62b2e08512c1b\",\"62b2dee3df3f3\",\"62b2e2df0cd47\",\"62b2e120e0840\",\"8\",\"62b2e19d6efba\",\"5\",\"62b2da9b279fc\",\"7\"]}', 'ayoubg', 3453969, 4),
(681379, '{\"code\":[\"4\",\"62b2e278cdc64\",\"62b2d9cb6407a\",\"62b2e2c235ba7\",\"62b2e0f8c9175\",\"2\",\"1\",\"62b2e1e537ad5\",\"62b2e13cb2b8f\",\"62b2da5d540a2\",\"7\",\"62b2e19d6efba\",\"3\",\"62b2e24d52048\",\"62b2dee3df3f3\",\"62b2e08512c1b\",\"8\",\"5\",\"62b2e0a71a063\",\"9\"]}', 'ayoubg', 92681323, 1),
(681581, '{\"code\":[\"1\",\"8\",\"9\",\"62b2e0f8c9175\",\"62b2e2df0cd47\",\"62b2e1e537ad5\",\"4\",\"10\",\"62b2e22024a62\",\"62b2e24d52048\",\"62b2e278cdc64\",\"62b2e08512c1b\",\"2\",\"62b2e17372b12\",\"62b2e19d6efba\",\"6\",\"62b2dee3df3f3\",\"62b2e120e0840\",\"5\",\"7\"]}', 'ayoubg', 92681323, 2),
(681781, '{\"code\":[\"8\",\"62b2e2c235ba7\",\"62b2d9cb6407a\",\"10\",\"62b2dee3df3f3\",\"62b2e2989aba2\",\"62b2e22024a62\",\"62b2da9b279fc\",\"62b2e08512c1b\",\"1\",\"62b2e17372b12\",\"9\",\"62b2e0a71a063\",\"62b2e19d6efba\",\"2\",\"62b2e13cb2b8f\",\"4\",\"62b2e0f8c9175\",\"7\",\"3\"]}', 'ayoubg', 92681323, 3),
(681984, '{\"code\":[\"62b2e2df0cd47\",\"6\",\"8\",\"62b2e0f8c9175\",\"4\",\"62b2e08512c1b\",\"62b2e17372b12\",\"62b2e1e537ad5\",\"9\",\"62b2e278cdc64\",\"62b2e120e0840\",\"62b2dee3df3f3\",\"5\",\"1\",\"3\",\"62b2da9b279fc\",\"62b2e13cb2b8f\",\"62b2e19d6efba\",\"62b2da5d540a2\",\"62b2e0a71a063\"]}', 'ayoubg', 92681323, 5),
(682186, '{\"code\":[\"2\",\"62b2da9b279fc\",\"62b2e19d6efba\",\"62b2e120e0840\",\"62b2e2df0cd47\",\"1\",\"8\",\"62b2e278cdc64\",\"3\",\"62b2e1e537ad5\",\"9\",\"62b2e24d52048\",\"62b2e13cb2b8f\",\"62b2e0f8c9175\",\"4\",\"6\",\"7\",\"62b2d9cb6407a\",\"62b2dee3df3f3\",\"62b2e2989aba2\"]}', 'ayoubg', 92681323, 4),
(717245, '{\"code\":[\"62b2dee3df3f3\",\"62b2e17372b12\",\"6\",\"62b2e0a71a063\",\"4\",\"62b2d9cb6407a\",\"62b2e278cdc64\",\"1\",\"62b2e19d6efba\",\"8\",\"62b2e24d52048\",\"62b2e1e537ad5\",\"62b2e22024a62\",\"62b2e08512c1b\",\"5\",\"2\",\"62b2da5d540a2\",\"62b2da9b279fc\",\"62b2e13cb2b8f\",\"3\"]}', 'ayoubg', 92717185, 1),
(717447, '{\"code\":[\"62b2da5d540a2\",\"9\",\"62b2e17372b12\",\"5\",\"8\",\"62b2e278cdc64\",\"62b2e2989aba2\",\"62b2e2c235ba7\",\"10\",\"7\",\"62b2e22024a62\",\"62b2e24d52048\",\"4\",\"62b2e08512c1b\",\"62b2e120e0840\",\"62b2e0f8c9175\",\"62b2dee3df3f3\",\"62b2e0a71a063\",\"62b2e1e537ad5\",\"62b2e13cb2b8f\"]}', 'ayoubg', 92717185, 3),
(717649, '{\"code\":[\"62b2d9cb6407a\",\"62b2da5d540a2\",\"10\",\"62b2dee3df3f3\",\"1\",\"62b2e278cdc64\",\"62b2e2c235ba7\",\"62b2e17372b12\",\"9\",\"2\",\"62b2e22024a62\",\"6\",\"4\",\"62b2e1e537ad5\",\"62b2e0f8c9175\",\"62b2e2989aba2\",\"62b2e120e0840\",\"62b2e08512c1b\",\"62b2e0a71a063\",\"7\"]}', 'ayoubg', 92717185, 4),
(717851, '{\"code\":[\"62b2e19d6efba\",\"9\",\"62b2e13cb2b8f\",\"5\",\"62b2e120e0840\",\"6\",\"4\",\"62b2e1e537ad5\",\"62b2e17372b12\",\"2\",\"8\",\"62b2da5d540a2\",\"62b2e0a71a063\",\"62b2e2989aba2\",\"62b2e22024a62\",\"62b2dee3df3f3\",\"3\",\"62b2e24d52048\",\"10\",\"62b2e2c235ba7\"]}', 'ayoubg', 92717185, 5),
(718053, '{\"code\":[\"8\",\"62b2e24d52048\",\"62b2e19d6efba\",\"62b2d9cb6407a\",\"3\",\"5\",\"62b2e13cb2b8f\",\"62b2e1e537ad5\",\"1\",\"4\",\"62b2e0f8c9175\",\"62b2e2df0cd47\",\"2\",\"6\",\"62b2e17372b12\",\"62b2e22024a62\",\"62b2da5d540a2\",\"62b2e2989aba2\",\"62b2e0a71a063\",\"9\"]}', 'ayoubg', 92717185, 2),
(740511, '{\"code\":[\"62b2e24d52048\",\"7\",\"6\",\"62b2e2df0cd47\",\"9\",\"62b2dee3df3f3\",\"62b2e13cb2b8f\",\"1\",\"62b2e2c235ba7\",\"62b2e0f8c9175\",\"8\",\"5\",\"62b2da9b279fc\",\"62b2da5d540a2\",\"62b2e2989aba2\",\"62b2e19d6efba\",\"3\",\"62b2e17372b12\",\"62b2e278cdc64\",\"62b2e120e0840\"]}', 'ayoubg', 93740432, 1),
(740712, '{\"code\":[\"62b2e17372b12\",\"62b2e08512c1b\",\"62b2dee3df3f3\",\"62b2e13cb2b8f\",\"62b2e2c235ba7\",\"3\",\"9\",\"62b2e0a71a063\",\"62b2d9cb6407a\",\"5\",\"62b2e0f8c9175\",\"62b2e2989aba2\",\"62b2da5d540a2\",\"2\",\"7\",\"62b2e1e537ad5\",\"62b2da9b279fc\",\"1\",\"62b2e24d52048\",\"6\"]}', 'ayoubg', 93740432, 2),
(740913, '{\"code\":[\"62b2e17372b12\",\"62b2e2c235ba7\",\"62b2e120e0840\",\"62b2e278cdc64\",\"5\",\"62b2e0a71a063\",\"62b2e2df0cd47\",\"62b2d9cb6407a\",\"1\",\"62b2e19d6efba\",\"62b2da5d540a2\",\"8\",\"62b2e13cb2b8f\",\"2\",\"62b2e2989aba2\",\"3\",\"4\",\"62b2e1e537ad5\",\"62b2e08512c1b\",\"6\"]}', 'ayoubg', 93740432, 4),
(741114, '{\"code\":[\"62b2d9cb6407a\",\"62b2e0a71a063\",\"62b2e278cdc64\",\"62b2dee3df3f3\",\"62b2e1e537ad5\",\"2\",\"62b2e24d52048\",\"62b2e17372b12\",\"4\",\"10\",\"9\",\"62b2e19d6efba\",\"1\",\"62b2e0f8c9175\",\"62b2e2989aba2\",\"62b2e08512c1b\",\"62b2e2c235ba7\",\"3\",\"62b2e120e0840\",\"62b2e22024a62\"]}', 'ayoubg', 93740432, 5),
(741315, '{\"code\":[\"62b2e2df0cd47\",\"4\",\"62b2e0f8c9175\",\"62b2e2989aba2\",\"7\",\"8\",\"62b2d9cb6407a\",\"1\",\"62b2da5d540a2\",\"62b2e22024a62\",\"62b2e0a71a063\",\"62b2e24d52048\",\"62b2e278cdc64\",\"62b2e19d6efba\",\"62b2e2c235ba7\",\"62b2da9b279fc\",\"3\",\"62b2e120e0840\",\"5\",\"2\"]}', 'ayoubg', 93740432, 6),
(741516, '{\"code\":[\"62b2e24d52048\",\"62b2e2c235ba7\",\"7\",\"62b2e0f8c9175\",\"62b2e17372b12\",\"9\",\"1\",\"10\",\"62b2e08512c1b\",\"62b2e2989aba2\",\"4\",\"62b2da5d540a2\",\"62b2d9cb6407a\",\"62b2e278cdc64\",\"62b2e0a71a063\",\"62b2e19d6efba\",\"2\",\"62b2da9b279fc\",\"8\",\"62b2e1e537ad5\"]}', 'ayoubg', 93740432, 8),
(741717, '{\"code\":[\"62b2e0f8c9175\",\"62b2da5d540a2\",\"62b2e2df0cd47\",\"8\",\"62b2e278cdc64\",\"62b2e13cb2b8f\",\"4\",\"62b2e22024a62\",\"62b2e120e0840\",\"6\",\"3\",\"62b2d9cb6407a\",\"9\",\"62b2e24d52048\",\"7\",\"1\",\"62b2e19d6efba\",\"62b2e2989aba2\",\"2\",\"62b2da9b279fc\"]}', 'ayoubg', 93740432, 7),
(741918, '{\"code\":[\"9\",\"62b2e2df0cd47\",\"62b2e1e537ad5\",\"62b2e17372b12\",\"62b2e13cb2b8f\",\"62b2dee3df3f3\",\"8\",\"62b2e22024a62\",\"6\",\"62b2da9b279fc\",\"62b2e2c235ba7\",\"62b2e0f8c9175\",\"62b2d9cb6407a\",\"62b2e278cdc64\",\"62b2e0a71a063\",\"62b2e2989aba2\",\"4\",\"62b2e19d6efba\",\"10\",\"5\"]}', 'ayoubg', 93740432, 12),
(742120, '{\"code\":[\"10\",\"62b2dee3df3f3\",\"62b2e2df0cd47\",\"62b2e0a71a063\",\"62b2e13cb2b8f\",\"62b2e278cdc64\",\"62b2e24d52048\",\"62b2d9cb6407a\",\"5\",\"62b2e120e0840\",\"62b2da9b279fc\",\"7\",\"1\",\"62b2e0f8c9175\",\"3\",\"62b2e2c235ba7\",\"62b2e2989aba2\",\"9\",\"6\",\"62b2e19d6efba\"]}', 'ayoubg', 93740432, 10),
(742320, '{\"code\":[\"62b2da9b279fc\",\"9\",\"62b2e278cdc64\",\"62b2e13cb2b8f\",\"62b2e17372b12\",\"62b2e1e537ad5\",\"6\",\"62b2e0a71a063\",\"1\",\"8\",\"62b2d9cb6407a\",\"62b2dee3df3f3\",\"62b2e2df0cd47\",\"3\",\"10\",\"62b2e2989aba2\",\"62b2e2c235ba7\",\"2\",\"62b2e08512c1b\",\"62b2da5d540a2\"]}', 'ayoubg', 93740432, 3),
(742521, '{\"code\":[\"5\",\"2\",\"62b2e13cb2b8f\",\"62b2e19d6efba\",\"62b2e2df0cd47\",\"62b2e22024a62\",\"62b2e08512c1b\",\"62b2e17372b12\",\"62b2da5d540a2\",\"62b2e278cdc64\",\"9\",\"62b2e0f8c9175\",\"62b2e120e0840\",\"1\",\"7\",\"6\",\"62b2e2c235ba7\",\"4\",\"8\",\"62b2e24d52048\"]}', 'ayoubg', 93740432, 11),
(742722, '{\"code\":[\"62b2dee3df3f3\",\"62b2e17372b12\",\"62b2e22024a62\",\"2\",\"62b2e120e0840\",\"10\",\"9\",\"62b2e2c235ba7\",\"62b2e13cb2b8f\",\"6\",\"62b2da9b279fc\",\"62b2e08512c1b\",\"62b2d9cb6407a\",\"62b2e278cdc64\",\"5\",\"7\",\"62b2e1e537ad5\",\"62b2da5d540a2\",\"62b2e0f8c9175\",\"62b2e24d52048\"]}', 'ayoubg', 93740432, 9);

-- --------------------------------------------------------

--
-- Table structure for table `examings`
--

CREATE TABLE `examings` (
  `idexe` int(11) NOT NULL,
  `exam` longtext DEFAULT NULL,
  `idf` int(11) DEFAULT NULL,
  `idm` int(11) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `barem` int(11) NOT NULL,
  `header` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `examings`
--

INSERT INTO `examings` (`idexe`, `exam`, `idf`, `idm`, `username`, `barem`, `header`) VALUES
(2, '[{\"type\":1,\"id\":\"7\",\"barem\":9},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":3,\"id\":\"5\",\"barem\":1},{\"type\":3,\"id\":\"4\",\"barem\":1},{\"type\":3,\"id\":\"3\",\"barem\":1}]', 1, 2, 'ayoubg', 20, 'none'),
(5, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"7\",\"barem\":9},{\"type\":1,\"id\":\"1\",\"barem\":4}]', 1, 1, 'ayoubg', 20, 'none'),
(6, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"2\",\"barem\":5}]', 1, 1, 'ayoubg', 20, 'none'),
(7, '[{\"type\":1,\"id\":\"7\",\"barem\":9},{\"type\":1,\"id\":\"6\",\"barem\":9},{\"type\":3,\"id\":\"1\",\"barem\":1},{\"type\":3,\"id\":\"4\",\"barem\":1}]', 1, 1, 'ayoubg', 20, 'none'),
(8, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"2\",\"barem\":5}]', 1, 1, 'ayoubg', 20, 'none'),
(9, '[{\"type\":1,\"id\":\"3\",\"barem\":6},{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":3,\"id\":\"62b2e13cb2b8f\",\"barem\":1},{\"type\":3,\"id\":\"10\",\"barem\":1},{\"type\":3,\"id\":\"62b2dee3df3f3\",\"barem\":1},{\"type\":3,\"id\":\"62b2e19d6efba\",\"barem\":1},{\"type\":3,\"id\":\"62b2da5d540a2\",\"barem\":1},{\"type\":3,\"id\":\"1\",\"barem\":1},{\"type\":3,\"id\":\"62b2e1e537ad5\",\"barem\":1}]', 1, 1, 'ayoubg', 20, 'none'),
(10, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"6\",\"barem\":9},{\"type\":1,\"id\":\"1\",\"barem\":4}]', 1, 1, 'ayoubg', 20, 'none'),
(11, '[{\"type\":1,\"id\":\"6\",\"barem\":9},{\"type\":1,\"id\":\"3\",\"barem\":6},{\"type\":1,\"id\":\"2\",\"barem\":5}]', 1, 1, 'ayoubg', 20, 'none'),
(12, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"2\",\"barem\":5}]', 1, 1, 'ayoubg', 20, 'none'),
(13, '[{\"type\":1,\"id\":\"3\",\"barem\":6},{\"type\":1,\"id\":\"7\",\"barem\":9},{\"type\":1,\"id\":\"2\",\"barem\":5}]', 1, 1, 'ayoubg', 20, 'none'),
(14, '[{\"type\":1,\"id\":\"3\",\"barem\":6},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":3,\"id\":\"62b2e24d52048\",\"barem\":1},{\"type\":3,\"id\":\"5\",\"barem\":1},{\"type\":3,\"id\":\"62b2e17372b12\",\"barem\":1},{\"type\":3,\"id\":\"8\",\"barem\":1},{\"type\":3,\"id\":\"1\",\"barem\":1},{\"type\":3,\"id\":\"62b2dee3df3f3\",\"barem\":1}]', 1, 1, 'ayoubg', 20, 'none'),
(15, '[{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":1,\"id\":\"1\",\"barem\":4},{\"type\":1,\"id\":\"4\",\"barem\":7}]', 1, 1, 'ayoubg', 16, 'none'),
(16, '[{\"type\":1,\"id\":\"1\",\"barem\":4},{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":1,\"id\":\"4\",\"barem\":7}]', 1, 1, 'ayoubg', 16, 'none'),
(17, '[{\"type\":1,\"id\":\"1\",\"barem\":4},{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":1,\"id\":\"4\",\"barem\":7}]', 1, 1, 'ayoubg', 16, 'none'),
(18, '[{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":1,\"id\":\"1\",\"barem\":4},{\"type\":3,\"id\":\"7\",\"barem\":1},{\"type\":3,\"id\":\"62b2da9b279fc\",\"barem\":1},{\"type\":3,\"id\":\"62b2e120e0840\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2c235ba7\",\"barem\":1},{\"type\":3,\"id\":\"62b2e13cb2b8f\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0a71a063\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2989aba2\",\"barem\":1},{\"type\":3,\"id\":\"10\",\"barem\":1},{\"type\":3,\"id\":\"62b2e278cdc64\",\"barem\":1},{\"type\":3,\"id\":\"62b2e08512c1b\",\"barem\":1},{\"type\":3,\"id\":\"5\",\"barem\":1},{\"type\":3,\"id\":\"62b2e22024a62\",\"barem\":1},{\"type\":3,\"id\":\"62b2e24d52048\",\"barem\":1},{\"type\":3,\"id\":\"8\",\"barem\":1},{\"type\":3,\"id\":\"62b2da5d540a2\",\"barem\":1},{\"type\":3,\"id\":\"62b2d9cb6407a\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none'),
(19, '[{\"type\":1,\"id\":\"3\",\"barem\":6},{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":3,\"id\":\"62b2e278cdc64\",\"barem\":1},{\"type\":3,\"id\":\"62b2e1e537ad5\",\"barem\":1},{\"type\":3,\"id\":\"3\",\"barem\":1},{\"type\":3,\"id\":\"10\",\"barem\":1},{\"type\":3,\"id\":\"62b2e17372b12\",\"barem\":1},{\"type\":3,\"id\":\"62b2e120e0840\",\"barem\":1},{\"type\":3,\"id\":\"8\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2989aba2\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0a71a063\",\"barem\":1},{\"type\":3,\"id\":\"1\",\"barem\":1},{\"type\":3,\"id\":\"62b2e24d52048\",\"barem\":1},{\"type\":3,\"id\":\"62b2e13cb2b8f\",\"barem\":1},{\"type\":3,\"id\":\"5\",\"barem\":1},{\"type\":3,\"id\":\"62b2e22024a62\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none'),
(20, '[{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":3,\"id\":\"1\",\"barem\":1},{\"type\":3,\"id\":\"62b2dee3df3f3\",\"barem\":1},{\"type\":3,\"id\":\"2\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0f8c9175\",\"barem\":1},{\"type\":3,\"id\":\"62b2da5d540a2\",\"barem\":1},{\"type\":3,\"id\":\"62b2e120e0840\",\"barem\":1},{\"type\":3,\"id\":\"10\",\"barem\":1},{\"type\":3,\"id\":\"5\",\"barem\":1},{\"type\":3,\"id\":\"6\",\"barem\":1},{\"type\":3,\"id\":\"62b2e1e537ad5\",\"barem\":1},{\"type\":3,\"id\":\"9\",\"barem\":1},{\"type\":3,\"id\":\"62b2da9b279fc\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none'),
(21, '[{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"8\",\"barem\":10}]', 1, 1, 'ayoubg', 25, 'none'),
(22, '[{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"1\",\"barem\":4},{\"type\":3,\"id\":\"7\",\"barem\":1},{\"type\":3,\"id\":\"1\",\"barem\":1},{\"type\":3,\"id\":\"5\",\"barem\":1},{\"type\":3,\"id\":\"3\",\"barem\":1},{\"type\":3,\"id\":\"62b2e19d6efba\",\"barem\":1},{\"type\":3,\"id\":\"62b2da9b279fc\",\"barem\":1},{\"type\":3,\"id\":\"62b2e24d52048\",\"barem\":1},{\"type\":3,\"id\":\"62b2e278cdc64\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0f8c9175\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2c235ba7\",\"barem\":1},{\"type\":3,\"id\":\"9\",\"barem\":1},{\"type\":3,\"id\":\"62b2e120e0840\",\"barem\":1},{\"type\":3,\"id\":\"62b2e13cb2b8f\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none'),
(23, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"8\",\"barem\":10}]', 1, 1, 'ayoubg', 25, 'none'),
(24, '[{\"type\":1,\"id\":\"3\",\"barem\":6},{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":3,\"id\":\"62b2da5d540a2\",\"barem\":1},{\"type\":3,\"id\":\"62b2e1e537ad5\",\"barem\":1},{\"type\":3,\"id\":\"2\",\"barem\":1},{\"type\":3,\"id\":\"62b2e17372b12\",\"barem\":1},{\"type\":3,\"id\":\"4\",\"barem\":1},{\"type\":3,\"id\":\"3\",\"barem\":1},{\"type\":3,\"id\":\"62b2da9b279fc\",\"barem\":1},{\"type\":3,\"id\":\"62b2e120e0840\",\"barem\":1},{\"type\":3,\"id\":\"7\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0f8c9175\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2989aba2\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0a71a063\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none'),
(25, '[{\"type\":1,\"id\":\"5\",\"barem\":8},{\"type\":1,\"id\":\"1\",\"barem\":4},{\"type\":3,\"id\":\"2\",\"barem\":1},{\"type\":3,\"id\":\"6\",\"barem\":1},{\"type\":3,\"id\":\"8\",\"barem\":1},{\"type\":3,\"id\":\"62b2e24d52048\",\"barem\":1},{\"type\":3,\"id\":\"4\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2df0cd47\",\"barem\":1},{\"type\":3,\"id\":\"62b2da5d540a2\",\"barem\":1},{\"type\":3,\"id\":\"3\",\"barem\":1},{\"type\":3,\"id\":\"62b2e13cb2b8f\",\"barem\":1},{\"type\":3,\"id\":\"62b2e0a71a063\",\"barem\":1},{\"type\":3,\"id\":\"62b2da9b279fc\",\"barem\":1},{\"type\":3,\"id\":\"62b2e278cdc64\",\"barem\":1},{\"type\":3,\"id\":\"62b2e17372b12\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none'),
(26, '[{\"type\":1,\"id\":\"4\",\"barem\":7},{\"type\":1,\"id\":\"2\",\"barem\":5},{\"type\":3,\"id\":\"62b2e0f8c9175\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2df0cd47\",\"barem\":1},{\"type\":3,\"id\":\"62b2da5d540a2\",\"barem\":1},{\"type\":3,\"id\":\"10\",\"barem\":1},{\"type\":3,\"id\":\"62b2e13cb2b8f\",\"barem\":1},{\"type\":3,\"id\":\"6\",\"barem\":1},{\"type\":3,\"id\":\"62b2e19d6efba\",\"barem\":1},{\"type\":3,\"id\":\"62b2dee3df3f3\",\"barem\":1},{\"type\":3,\"id\":\"62b2e2c235ba7\",\"barem\":1},{\"type\":3,\"id\":\"62b2da9b279fc\",\"barem\":1},{\"type\":3,\"id\":\"62b2e24d52048\",\"barem\":1},{\"type\":3,\"id\":\"3\",\"barem\":1},{\"type\":3,\"id\":\"4\",\"barem\":1}]', 1, 1, 'ayoubg', 25, 'none');

-- --------------------------------------------------------

--
-- Table structure for table `filier`
--

CREATE TABLE `filier` (
  `idf` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `filier`
--

INSERT INTO `filier` (`idf`, `nom`) VALUES
(1, 'TDI');

-- --------------------------------------------------------

--
-- Table structure for table `matier`
--

CREATE TABLE `matier` (
  `idm` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matier`
--

INSERT INTO `matier` (`idm`, `nom`) VALUES
(1, 'SGBD'),
(2, 'MATH');

-- --------------------------------------------------------

--
-- Table structure for table `passed`
--

CREATE TABLE `passed` (
  `idpass` varchar(255) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `idbat` int(11) NOT NULL,
  `note` float DEFAULT NULL,
  `result` varchar(200) DEFAULT NULL,
  `datepassed` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `passed`
--

INSERT INTO `passed` (`idpass`, `username`, `idbat`, `note`, `result`, `datepassed`) VALUES
('62b2ee3db236d', 'ayoubhh', 92717185, 0, 'fail', '2022-06-22 11:26:05'),
('62b2eea1dc382', 'ayoubhh', 92717185, 17, 'pass', '2022-06-22 11:27:45'),
('62b3255d95b1a', 'ayoubhh', 93740432, 10, 'pass', '2022-06-29 15:21:17');

-- --------------------------------------------------------

--
-- Table structure for table `passedhistory`
--

CREATE TABLE `passedhistory` (
  `idph` int(11) NOT NULL,
  `idpass` varchar(255) DEFAULT NULL,
  `unsrs` longtext DEFAULT NULL,
  `exam` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `passedhistory`
--

INSERT INTO `passedhistory` (`idph`, `idpass`, `unsrs`, `exam`) VALUES
(1, '62b2ee3db236d', '[{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"13\",\"on\":false},{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"14\",\"on\":false},{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"15\",\"on\":false},{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"16\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"53\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"54\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"55\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"56\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"45\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"46\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"47\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"48\",\"on\":false},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"49\",\"on\":false},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"50\",\"on\":false},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"51\",\"on\":false},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"52\",\"on\":false},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"115\",\"on\":false},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"116\",\"on\":false},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"117\",\"on\":false},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"118\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"17\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"18\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"19\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"20\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"225\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"226\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"227\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"228\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"57\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"58\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"59\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"60\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"5\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"6\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"7\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"8\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"37\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"38\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"39\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"40\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"119\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"120\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"121\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"122\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"111\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"112\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"113\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"114\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"1\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"2\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"3\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"4\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"21\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"22\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"23\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"24\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"221\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"222\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"223\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"224\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"41\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"42\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"43\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"44\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"127\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"128\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"129\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"130\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"9\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"10\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"11\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"12\",\"on\":false},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"33\",\"on\":false},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"34\",\"on\":false},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"35\",\"on\":false},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"36\",\"on\":false},{\"qcm\":19,\"idq\":\"3\",\"idr\":\"210\",\"on\":false},{\"qcm\":19,\"idq\":\"3\",\"idr\":\"229\",\"on\":false}]', '{\"exam\":[{\"idq\":\"62b2dee3df3f3\",\"idrs\":[\"13\",\"14\",\"15\",\"16\"]},{\"idq\":\"62b2e24d52048\",\"idrs\":[\"53\",\"54\",\"55\",\"56\"]},{\"idq\":\"62b2e1e537ad5\",\"idrs\":[\"45\",\"46\",\"47\",\"48\"]},{\"idq\":\"62b2e22024a62\",\"idrs\":[\"49\",\"50\",\"51\",\"52\"]},{\"idq\":\"5\",\"idrs\":[\"115\",\"116\",\"117\",\"118\"]},{\"idq\":\"62b2e08512c1b\",\"idrs\":[\"17\",\"18\",\"19\",\"20\"]},{\"idq\":\"2\",\"idrs\":[\"225\",\"226\",\"227\",\"228\"]},{\"idq\":\"62b2e278cdc64\",\"idrs\":[\"57\",\"58\",\"59\",\"60\"]},{\"idq\":\"62b2da5d540a2\",\"idrs\":[\"5\",\"6\",\"7\",\"8\"]},{\"idq\":\"62b2e17372b12\",\"idrs\":[\"37\",\"38\",\"39\",\"40\"]},{\"idq\":\"6\",\"idrs\":[\"119\",\"120\",\"121\",\"122\"]},{\"idq\":\"4\",\"idrs\":[\"111\",\"112\",\"113\",\"114\"]},{\"idq\":\"62b2d9cb6407a\",\"idrs\":[\"1\",\"2\",\"3\",\"4\"]},{\"idq\":\"62b2e0a71a063\",\"idrs\":[\"21\",\"22\",\"23\",\"24\"]},{\"idq\":\"1\",\"idrs\":[\"221\",\"222\",\"223\",\"224\"]},{\"idq\":\"62b2e19d6efba\",\"idrs\":[\"41\",\"42\",\"43\",\"44\"]},{\"idq\":\"8\",\"idrs\":[\"127\",\"128\",\"129\",\"130\"]},{\"idq\":\"62b2da9b279fc\",\"idrs\":[\"9\",\"10\",\"11\",\"12\"]},{\"idq\":\"62b2e13cb2b8f\",\"idrs\":[\"33\",\"34\",\"35\",\"36\"]},{\"idq\":\"3\",\"idrs\":[\"210\",\"229\"]}],\"correct\":[[true,true,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,true,false,false],[true,false,false,false],[false,true,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,false,true,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,false,true,false],[true,false,false,false],[false,false,false,true],[true,false,false,false],[true,false,false,false],[false,true]]}'),
(2, '62b2eea1dc382', '[{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"13\",\"on\":true},{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"14\",\"on\":true},{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"15\",\"on\":false},{\"qcm\":0,\"idq\":\"62b2dee3df3f3\",\"idr\":\"16\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"37\",\"on\":true},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"38\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"39\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2e17372b12\",\"idr\":\"40\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"119\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"120\",\"on\":false},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"121\",\"on\":true},{\"qcm\":2,\"idq\":\"6\",\"idr\":\"122\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"21\",\"on\":true},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"22\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"23\",\"on\":false},{\"qcm\":3,\"idq\":\"62b2e0a71a063\",\"idr\":\"24\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"1\",\"on\":true},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"2\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"3\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2d9cb6407a\",\"idr\":\"4\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"57\",\"on\":true},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"58\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"59\",\"on\":false},{\"qcm\":6,\"idq\":\"62b2e278cdc64\",\"idr\":\"60\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"221\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"222\",\"on\":false},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"223\",\"on\":true},{\"qcm\":7,\"idq\":\"1\",\"idr\":\"224\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"53\",\"on\":true},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"54\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"55\",\"on\":false},{\"qcm\":10,\"idq\":\"62b2e24d52048\",\"idr\":\"56\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"127\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"128\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"129\",\"on\":false},{\"qcm\":9,\"idq\":\"8\",\"idr\":\"130\",\"on\":true},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"17\",\"on\":true},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"18\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"19\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e08512c1b\",\"idr\":\"20\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"45\",\"on\":true},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"46\",\"on\":true},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"47\",\"on\":true},{\"qcm\":11,\"idq\":\"62b2e1e537ad5\",\"idr\":\"48\",\"on\":true},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"49\",\"on\":true},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"50\",\"on\":false},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"51\",\"on\":false},{\"qcm\":12,\"idq\":\"62b2e22024a62\",\"idr\":\"52\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"225\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"226\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"227\",\"on\":false},{\"qcm\":15,\"idq\":\"2\",\"idr\":\"228\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"41\",\"on\":true},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"42\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"43\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e19d6efba\",\"idr\":\"44\",\"on\":false},{\"qcm\":19,\"idq\":\"3\",\"idr\":\"210\",\"on\":false},{\"qcm\":19,\"idq\":\"3\",\"idr\":\"229\",\"on\":true},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"115\",\"on\":false},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"116\",\"on\":true},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"117\",\"on\":false},{\"qcm\":14,\"idq\":\"5\",\"idr\":\"118\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"111\",\"on\":true},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"112\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"113\",\"on\":false},{\"qcm\":4,\"idq\":\"4\",\"idr\":\"114\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"5\",\"on\":true},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"6\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"7\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2da5d540a2\",\"idr\":\"8\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"9\",\"on\":true},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"10\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"11\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2da9b279fc\",\"idr\":\"12\",\"on\":false},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"33\",\"on\":true},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"34\",\"on\":true},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"35\",\"on\":true},{\"qcm\":18,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"36\",\"on\":true}]', '{\"exam\":[{\"idq\":\"62b2dee3df3f3\",\"idrs\":[\"13\",\"14\",\"15\",\"16\"]},{\"idq\":\"62b2e17372b12\",\"idrs\":[\"37\",\"38\",\"39\",\"40\"]},{\"idq\":\"6\",\"idrs\":[\"119\",\"120\",\"121\",\"122\"]},{\"idq\":\"62b2e0a71a063\",\"idrs\":[\"21\",\"22\",\"23\",\"24\"]},{\"idq\":\"62b2d9cb6407a\",\"idrs\":[\"1\",\"2\",\"3\",\"4\"]},{\"idq\":\"62b2e278cdc64\",\"idrs\":[\"57\",\"58\",\"59\",\"60\"]},{\"idq\":\"1\",\"idrs\":[\"221\",\"222\",\"223\",\"224\"]},{\"idq\":\"62b2e24d52048\",\"idrs\":[\"53\",\"54\",\"55\",\"56\"]},{\"idq\":\"8\",\"idrs\":[\"127\",\"128\",\"129\",\"130\"]},{\"idq\":\"62b2e08512c1b\",\"idrs\":[\"17\",\"18\",\"19\",\"20\"]},{\"idq\":\"62b2e1e537ad5\",\"idrs\":[\"45\",\"46\",\"47\",\"48\"]},{\"idq\":\"62b2e22024a62\",\"idrs\":[\"49\",\"50\",\"51\",\"52\"]},{\"idq\":\"2\",\"idrs\":[\"225\",\"226\",\"227\",\"228\"]},{\"idq\":\"62b2e19d6efba\",\"idrs\":[\"41\",\"42\",\"43\",\"44\"]},{\"idq\":\"3\",\"idrs\":[\"210\",\"229\"]},{\"idq\":\"5\",\"idrs\":[\"115\",\"116\",\"117\",\"118\"]},{\"idq\":\"4\",\"idrs\":[\"111\",\"112\",\"113\",\"114\"]},{\"idq\":\"62b2da5d540a2\",\"idrs\":[\"5\",\"6\",\"7\",\"8\"]},{\"idq\":\"62b2da9b279fc\",\"idrs\":[\"9\",\"10\",\"11\",\"12\"]},{\"idq\":\"62b2e13cb2b8f\",\"idrs\":[\"33\",\"34\",\"35\",\"36\"]}],\"correct\":[[true,true,false,false],[true,false,false,false],[false,false,true,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,false,true,false],[true,false,false,false],[false,false,false,true],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,true,false,false],[true,false,false,false],[false,true],[false,true,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false]]}'),
(3, '62b3255d95b1a', '[{\"qcm\":0,\"idq\":\"62b2e0f8c9175\",\"idr\":\"25\",\"on\":true},{\"qcm\":0,\"idq\":\"62b2e0f8c9175\",\"idr\":\"26\",\"on\":false},{\"qcm\":0,\"idq\":\"62b2e0f8c9175\",\"idr\":\"27\",\"on\":false},{\"qcm\":0,\"idq\":\"62b2e0f8c9175\",\"idr\":\"28\",\"on\":false},{\"qcm\":15,\"idq\":\"1\",\"idr\":\"221\",\"on\":false},{\"qcm\":15,\"idq\":\"1\",\"idr\":\"222\",\"on\":false},{\"qcm\":15,\"idq\":\"1\",\"idr\":\"223\",\"on\":true},{\"qcm\":15,\"idq\":\"1\",\"idr\":\"224\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2e19d6efba\",\"idr\":\"41\",\"on\":true},{\"qcm\":16,\"idq\":\"62b2e19d6efba\",\"idr\":\"42\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2e19d6efba\",\"idr\":\"43\",\"on\":false},{\"qcm\":16,\"idq\":\"62b2e19d6efba\",\"idr\":\"44\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2e2989aba2\",\"idr\":\"61\",\"on\":true},{\"qcm\":17,\"idq\":\"62b2e2989aba2\",\"idr\":\"62\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2e2989aba2\",\"idr\":\"63\",\"on\":false},{\"qcm\":17,\"idq\":\"62b2e2989aba2\",\"idr\":\"64\",\"on\":false},{\"qcm\":18,\"idq\":\"2\",\"idr\":\"225\",\"on\":false},{\"qcm\":18,\"idq\":\"2\",\"idr\":\"226\",\"on\":true},{\"qcm\":18,\"idq\":\"2\",\"idr\":\"227\",\"on\":false},{\"qcm\":18,\"idq\":\"2\",\"idr\":\"228\",\"on\":false},{\"qcm\":19,\"idq\":\"62b2da9b279fc\",\"idr\":\"9\",\"on\":false},{\"qcm\":19,\"idq\":\"62b2da9b279fc\",\"idr\":\"10\",\"on\":false},{\"qcm\":19,\"idq\":\"62b2da9b279fc\",\"idr\":\"11\",\"on\":false},{\"qcm\":19,\"idq\":\"62b2da9b279fc\",\"idr\":\"12\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2da5d540a2\",\"idr\":\"5\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2da5d540a2\",\"idr\":\"6\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2da5d540a2\",\"idr\":\"7\",\"on\":false},{\"qcm\":1,\"idq\":\"62b2da5d540a2\",\"idr\":\"8\",\"on\":false},{\"qcm\":2,\"idq\":\"62b2e2df0cd47\",\"idr\":\"69\",\"on\":false},{\"qcm\":2,\"idq\":\"62b2e2df0cd47\",\"idr\":\"70\",\"on\":false},{\"qcm\":2,\"idq\":\"62b2e2df0cd47\",\"idr\":\"71\",\"on\":false},{\"qcm\":2,\"idq\":\"62b2e2df0cd47\",\"idr\":\"72\",\"on\":false},{\"qcm\":3,\"idq\":\"8\",\"idr\":\"127\",\"on\":true},{\"qcm\":3,\"idq\":\"8\",\"idr\":\"128\",\"on\":true},{\"qcm\":3,\"idq\":\"8\",\"idr\":\"129\",\"on\":true},{\"qcm\":3,\"idq\":\"8\",\"idr\":\"130\",\"on\":false},{\"qcm\":4,\"idq\":\"62b2e278cdc64\",\"idr\":\"57\",\"on\":false},{\"qcm\":4,\"idq\":\"62b2e278cdc64\",\"idr\":\"58\",\"on\":false},{\"qcm\":4,\"idq\":\"62b2e278cdc64\",\"idr\":\"59\",\"on\":false},{\"qcm\":4,\"idq\":\"62b2e278cdc64\",\"idr\":\"60\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"33\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"34\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"35\",\"on\":false},{\"qcm\":5,\"idq\":\"62b2e13cb2b8f\",\"idr\":\"36\",\"on\":false},{\"qcm\":6,\"idq\":\"4\",\"idr\":\"111\",\"on\":false},{\"qcm\":6,\"idq\":\"4\",\"idr\":\"112\",\"on\":false},{\"qcm\":6,\"idq\":\"4\",\"idr\":\"113\",\"on\":false},{\"qcm\":6,\"idq\":\"4\",\"idr\":\"114\",\"on\":false},{\"qcm\":7,\"idq\":\"62b2e22024a62\",\"idr\":\"49\",\"on\":false},{\"qcm\":7,\"idq\":\"62b2e22024a62\",\"idr\":\"50\",\"on\":false},{\"qcm\":7,\"idq\":\"62b2e22024a62\",\"idr\":\"51\",\"on\":false},{\"qcm\":7,\"idq\":\"62b2e22024a62\",\"idr\":\"52\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e120e0840\",\"idr\":\"29\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e120e0840\",\"idr\":\"30\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e120e0840\",\"idr\":\"31\",\"on\":false},{\"qcm\":8,\"idq\":\"62b2e120e0840\",\"idr\":\"32\",\"on\":false},{\"qcm\":9,\"idq\":\"6\",\"idr\":\"119\",\"on\":false},{\"qcm\":9,\"idq\":\"6\",\"idr\":\"120\",\"on\":false},{\"qcm\":9,\"idq\":\"6\",\"idr\":\"121\",\"on\":false},{\"qcm\":9,\"idq\":\"6\",\"idr\":\"122\",\"on\":false},{\"qcm\":10,\"idq\":\"3\",\"idr\":\"210\",\"on\":false},{\"qcm\":10,\"idq\":\"3\",\"idr\":\"229\",\"on\":true},{\"qcm\":11,\"idq\":\"62b2d9cb6407a\",\"idr\":\"1\",\"on\":true},{\"qcm\":11,\"idq\":\"62b2d9cb6407a\",\"idr\":\"2\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2d9cb6407a\",\"idr\":\"3\",\"on\":false},{\"qcm\":11,\"idq\":\"62b2d9cb6407a\",\"idr\":\"4\",\"on\":false},{\"qcm\":12,\"idq\":\"9\",\"idr\":\"131\",\"on\":true},{\"qcm\":12,\"idq\":\"9\",\"idr\":\"132\",\"on\":false},{\"qcm\":12,\"idq\":\"9\",\"idr\":\"133\",\"on\":false},{\"qcm\":12,\"idq\":\"9\",\"idr\":\"134\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e24d52048\",\"idr\":\"53\",\"on\":true},{\"qcm\":13,\"idq\":\"62b2e24d52048\",\"idr\":\"54\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e24d52048\",\"idr\":\"55\",\"on\":false},{\"qcm\":13,\"idq\":\"62b2e24d52048\",\"idr\":\"56\",\"on\":false},{\"qcm\":14,\"idq\":\"7\",\"idr\":\"123\",\"on\":true},{\"qcm\":14,\"idq\":\"7\",\"idr\":\"124\",\"on\":false},{\"qcm\":14,\"idq\":\"7\",\"idr\":\"125\",\"on\":false},{\"qcm\":14,\"idq\":\"7\",\"idr\":\"126\",\"on\":false}]', '{\"exam\":[{\"idq\":\"62b2e0f8c9175\",\"idrs\":[\"25\",\"26\",\"27\",\"28\"]},{\"idq\":\"1\",\"idrs\":[\"221\",\"222\",\"223\",\"224\"]},{\"idq\":\"62b2e19d6efba\",\"idrs\":[\"41\",\"42\",\"43\",\"44\"]},{\"idq\":\"62b2e2989aba2\",\"idrs\":[\"61\",\"62\",\"63\",\"64\"]},{\"idq\":\"2\",\"idrs\":[\"225\",\"226\",\"227\",\"228\"]},{\"idq\":\"62b2da9b279fc\",\"idrs\":[\"9\",\"10\",\"11\",\"12\"]},{\"idq\":\"62b2da5d540a2\",\"idrs\":[\"5\",\"6\",\"7\",\"8\"]},{\"idq\":\"62b2e2df0cd47\",\"idrs\":[\"69\",\"70\",\"71\",\"72\"]},{\"idq\":\"8\",\"idrs\":[\"127\",\"128\",\"129\",\"130\"]},{\"idq\":\"62b2e278cdc64\",\"idrs\":[\"57\",\"58\",\"59\",\"60\"]},{\"idq\":\"62b2e13cb2b8f\",\"idrs\":[\"33\",\"34\",\"35\",\"36\"]},{\"idq\":\"4\",\"idrs\":[\"111\",\"112\",\"113\",\"114\"]},{\"idq\":\"62b2e22024a62\",\"idrs\":[\"49\",\"50\",\"51\",\"52\"]},{\"idq\":\"62b2e120e0840\",\"idrs\":[\"29\",\"30\",\"31\",\"32\"]},{\"idq\":\"6\",\"idrs\":[\"119\",\"120\",\"121\",\"122\"]},{\"idq\":\"3\",\"idrs\":[\"210\",\"229\"]},{\"idq\":\"62b2d9cb6407a\",\"idrs\":[\"1\",\"2\",\"3\",\"4\"]},{\"idq\":\"9\",\"idrs\":[\"131\",\"132\",\"133\",\"134\"]},{\"idq\":\"62b2e24d52048\",\"idrs\":[\"53\",\"54\",\"55\",\"56\"]},{\"idq\":\"7\",\"idrs\":[\"123\",\"124\",\"125\",\"126\"]}],\"correct\":[[true,false,false,false],[false,false,true,false],[true,false,false,false],[true,false,false,false],[false,true,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,false,false,true],[true,false,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false],[false,false,true,false],[false,true],[true,false,false,false],[true,false,false,false],[true,false,false,false],[true,false,false,false]]}');

-- --------------------------------------------------------

--
-- Table structure for table `pfpu`
--

CREATE TABLE `pfpu` (
  `idpfp` int(11) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `link` varchar(2000) DEFAULT NULL,
  `datepf` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pfpu`
--

INSERT INTO `pfpu` (`idpfp`, `username`, `link`, `datepf`) VALUES
(1, 'ayoubg', 'IMG-62b57d599afdd1.44396562.png', '2022-06-24 10:01:13');

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `idq` varchar(255) NOT NULL,
  `quest` varchar(1000) DEFAULT NULL,
  `idf` int(11) DEFAULT NULL,
  `idm` int(11) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`idq`, `quest`, `idf`, `idm`, `username`) VALUES
('1', 'MySQL est un système de gestion de base de données _____?', 1, 1, 'ayoubg'),
('10', 'Le fichier créé par le serveur pour stocker les attributs de la base de données est _____?', 1, 1, 'ayoubg'),
('2', 'À quoi correspondent les données d’une base de données MySQL?', 1, 1, 'ayoubg'),
('3', 'MySQL est disponible gratuitement? Est-il open source ?', 1, 1, 'ayoubg'),
('4', 'Comment la communication est-elle établie avec le serveur MySQL ?', 1, 1, 'ayoubg'),
('5', 'Qu’est-ce qu’un tuple dans une base de données relationnelle ?', 1, 1, 'ayoubg'),
('6', 'Qu’est-ce qui représente un attribut dans une base de données relationnelle ?', 1, 1, 'ayoubg'),
('62b2d9cb6407a', 'Lequel est qualifié comme un SGBD libre de droit ?', 1, 1, 'ayoubg'),
('62b2da5d540a2', 'En SQL quelle commande ne permet pas de valider automatiquement une transaction ?', 1, 1, 'ayoubg'),
('62b2da9b279fc', 'Parmi les SGBDR suivants lequel est qualifié comme orienté objet ?', 1, 1, 'ayoubg'),
('62b2dee3df3f3', 'Qu\'est-ce qu\'un shéma relationnel ?', 1, 1, 'ayoubg'),
('62b2e08512c1b', 'Ce sont des bases de données manipulant des documents, des images, des sons.', 1, 1, 'ayoubg'),
('62b2e0a71a063', 'Définit et catalogue les éléments d\'information et les relations entre les données de la base de données d\'une organisation.', 1, 1, 'ayoubg'),
('62b2e0f8c9175', 'L\'élaboration et la mise à jour de normes et de contrôles relatifs aux bases de données d\'une organisation.', 1, 1, 'ayoubg'),
('62b2e120e0840', 'Les bases de données sont dispersées au sein d\'une organisation.', 1, 1, 'ayoubg'),
('62b2e13cb2b8f', 'La colonne d\'une table contenant par exemple le nom des clients.', 1, 1, 'ayoubg'),
('62b2e17372b12', 'Permet de créer, d\'interroger et de mettre à jour une base de données, de produire des rapports et d\'élaborer des programmes d\'application.', 1, 1, 'ayoubg'),
('62b2e19d6efba', 'Un effort pour lier la mise au point d\'une base de données à la prise en charge des traitements administratifs.', 1, 1, 'ayoubg'),
('62b2e1e537ad5', 'Vous aide à caractériser et à produire les rapports d\'une base de données.', 1, 1, 'ayoubg'),
('62b2e22024a62', 'L\' information doit être à jour lorsque nous la recevons.', 1, 1, 'ayoubg'),
('62b2e24d52048', 'Il se sert des sorties du système d\'information.', 1, 1, 'ayoubg'),
('62b2e278cdc64', 'la composante centrale d\'un système d\'information est :', 1, 1, 'ayoubg'),
('62b2e2989aba2', 'un système d\'information est un ensemble organisé de ressources :', 1, 1, 'ayoubg'),
('62b2e2c235ba7', 'la conception d\'un système d\'information doit se centrer sur :', 1, 1, 'ayoubg'),
('62b2e2df0cd47', 'Les dirigeants ont surtout besoin d\'une information :', 1, 1, 'ayoubg'),
('7', 'Quelle instruction est utilisée pour sélectionner une base de données par défaut?', 1, 1, 'ayoubg'),
('8', 'Quel mot-clé est le synonyme de DATABASE?', 1, 1, 'ayoubg'),
('9', 'Quel mot clé est utilisé pour créer une base de données?', 1, 1, 'ayoubg');

-- --------------------------------------------------------

--
-- Table structure for table `questionimg`
--

CREATE TABLE `questionimg` (
  `idqmg` int(11) NOT NULL,
  `curl` varchar(1000) DEFAULT NULL,
  `idf` int(11) DEFAULT NULL,
  `idm` int(11) DEFAULT NULL,
  `deffi` varchar(250) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `barem` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questionimg`
--

INSERT INTO `questionimg` (`idqmg`, `curl`, `idf`, `idm`, `deffi`, `username`, `barem`) VALUES
(1, 'IMG-62b2f1d9392ba7.06506924.png', 1, 1, 'difficile', 'ayoubg', 4),
(2, 'IMG-62b2f1ef7091f0.97598511.png', 1, 1, 'difficile', 'ayoubg', 5),
(3, 'IMG-62b2f1f6d046b4.70035590.png', 1, 1, 'difficile', 'ayoubg', 6),
(4, 'IMG-62b2f201d57e01.12872764.png', 1, 1, 'difficile', 'ayoubg', 7),
(5, 'IMG-62b2f2159b80c1.98785262.png', 1, 1, 'difficile', 'ayoubg', 8),
(6, 'IMG-62b2f21fe14642.62834404.png', 1, 1, 'difficile', 'ayoubg', 9),
(7, 'IMG-62b2f226a203b6.42276826.png', 1, 1, 'difficile', 'ayoubg', 9),
(8, 'IMG-62b2f22ee43f75.18636843.png', 1, 1, 'difficile', 'ayoubg', 10),
(9, 'IMG-62b2f2b63fcaf4.71275037.png', 1, 1, 'difficile', 'ayoubg', 11);

-- --------------------------------------------------------

--
-- Table structure for table `questiontxt`
--

CREATE TABLE `questiontxt` (
  `idqtxt` int(11) NOT NULL,
  `txt` varchar(3000) DEFAULT NULL,
  `idf` int(11) DEFAULT NULL,
  `idm` int(11) DEFAULT NULL,
  `username` varchar(40) DEFAULT NULL,
  `deffi` varchar(250) NOT NULL,
  `barem` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questiontxt`
--

INSERT INTO `questiontxt` (`idqtxt`, `txt`, `idf`, `idm`, `username`, `deffi`, `barem`) VALUES
(1, 'test', 1, 1, 'ayoubg', 'facile', 12);

-- --------------------------------------------------------

--
-- Table structure for table `resetrequest`
--

CREATE TABLE `resetrequest` (
  `idreq` varchar(50) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `valid` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resetrequest`
--

INSERT INTO `resetrequest` (`idreq`, `username`, `valid`) VALUES
('62b2f62425399', 'ayoubhh', 0);

-- --------------------------------------------------------

--
-- Table structure for table `respond`
--

CREATE TABLE `respond` (
  `idr` int(11) NOT NULL,
  `chois` varchar(550) DEFAULT NULL,
  `qcm` tinyint(1) DEFAULT NULL,
  `idq` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `respond`
--

INSERT INTO `respond` (`idr`, `chois`, `qcm`, `idq`) VALUES
(1, 'SQL Server (V)', 1, '62b2d9cb6407a'),
(2, 'Oracle', 0, '62b2d9cb6407a'),
(3, 'PostgrEsql', 0, '62b2d9cb6407a'),
(4, 'MySQL', 0, '62b2d9cb6407a'),
(5, 'ALTER (V)', 1, '62b2da5d540a2'),
(6, 'CREATE', 0, '62b2da5d540a2'),
(7, 'DROP', 0, '62b2da5d540a2'),
(8, 'UPDATE', 0, '62b2da5d540a2'),
(9, 'INFORMIX (V)', 1, '62b2da9b279fc'),
(10, 'PostgreSQL', 0, '62b2da9b279fc'),
(11, 'O2', 0, '62b2da9b279fc'),
(12, 'ORACLE', 0, '62b2da9b279fc'),
(13, ' Un schéma qui représente logiquement les tables d\'une base de données (V)', 1, '62b2dee3df3f3'),
(14, 'Une représentation d\'un ensemble de relations ayant des liens entre elles. (V)', 1, '62b2dee3df3f3'),
(15, 'Un schéma qui represente le flux de données entre les acteurs.', 0, '62b2dee3df3f3'),
(16, 'Un schéma qui explique les interactions entres les utilisateurs.', 0, '62b2dee3df3f3'),
(17, 'Base de données distribuée (v)', 1, '62b2e08512c1b'),
(18, ' Base de données individuelle', 0, '62b2e08512c1b'),
(19, 'Base de données multimédia', 0, '62b2e08512c1b'),
(20, 'ystème de gestion de bases de données', 0, '62b2e08512c1b'),
(21, 'Accès aux bases de données  (V)', 1, '62b2e0a71a063'),
(22, 'Administration de bases de données', 0, '62b2e0a71a063'),
(23, ' Dépendance des données', 0, '62b2e0a71a063'),
(24, ' Dictionnaire de données', 0, '62b2e0a71a063'),
(25, ' Accès aux bases de données (v)', 1, '62b2e0f8c9175'),
(26, 'Administration de bases de données', 0, '62b2e0f8c9175'),
(27, ' Dépendance des données', 0, '62b2e0f8c9175'),
(28, 'Dictionnaire de données', 0, '62b2e0f8c9175'),
(29, 'Accès aux bases de données', 1, '62b2e120e0840'),
(30, 'Administration de bases de données', 0, '62b2e120e0840'),
(31, 'Base de données distribuée', 0, '62b2e120e0840'),
(32, ' Duplication des données', 0, '62b2e120e0840'),
(33, 'Champ ', 1, '62b2e13cb2b8f'),
(34, ' Champ de la clé primaire', 0, '62b2e13cb2b8f'),
(35, 'Création d\'une base de données', 0, '62b2e13cb2b8f'),
(36, ' Enregistrement', 0, '62b2e13cb2b8f'),
(37, ' Modélisation des données (v)', 1, '62b2e17372b12'),
(38, ' Planification des données', 0, '62b2e17372b12'),
(39, 'Structure orientée objets', 0, '62b2e17372b12'),
(40, 'Système de gestion de bases de données ', 0, '62b2e17372b12'),
(41, 'Modélisation des données(v)', 1, '62b2e19d6efba'),
(42, ' Planification des données', 0, '62b2e19d6efba'),
(43, 'Système de gestion de bases de données', 0, '62b2e19d6efba'),
(44, ' Structure orientée objets', 0, '62b2e19d6efba'),
(45, ' Générateur de rapports', 1, '62b2e1e537ad5'),
(46, ' Interrogation d\'une base de données', 0, '62b2e1e537ad5'),
(47, 'Langage d\'interrogation', 0, '62b2e1e537ad5'),
(48, 'Limites du traitement de fichiers', 0, '62b2e1e537ad5'),
(49, 'accessibilité (V)', 1, '62b2e22024a62'),
(50, ' actualité', 0, '62b2e22024a62'),
(51, ' efficacité', 0, '62b2e22024a62'),
(52, ' exactitude', 0, '62b2e22024a62'),
(53, 'utilisateur primaire (V)', 1, '62b2e24d52048'),
(54, ' utilisateur secondaire', 0, '62b2e24d52048'),
(55, ' utilisateur final', 0, '62b2e24d52048'),
(56, ' utilisateur externe', 0, '62b2e24d52048'),
(57, 'les données (V)', 1, '62b2e278cdc64'),
(58, 'les technologies de l\'information', 0, '62b2e278cdc64'),
(59, 'les personnes ', 0, '62b2e278cdc64'),
(60, 'les procédures', 0, '62b2e278cdc64'),
(61, ' ordinateurs - applications - informaticiens - utilisateurs (V)', 1, '62b2e2989aba2'),
(62, ' matériel - logiciel - personnel - données', 0, '62b2e2989aba2'),
(63, ' procédures - données - personnes - technologies', 0, '62b2e2989aba2'),
(64, ' individu - profil - problème - environnement', 0, '62b2e2989aba2'),
(65, 'la technologie (V)', 1, '62b2e2c235ba7'),
(66, ' les données', 0, '62b2e2c235ba7'),
(67, '  l\'utilisateur', 0, '62b2e2c235ba7'),
(68, 'l\'environnement ', 0, '62b2e2c235ba7'),
(69, ' interne - agrégée - orientée vers le présent', 1, '62b2e2df0cd47'),
(70, 'externe - détaillée - orientée vers le présent et le passé', 0, '62b2e2df0cd47'),
(71, 'interne - détaillée - orientée vers le présent', 0, '62b2e2df0cd47'),
(72, ' externe - agrégée - orientée vers le présent, le passé et le futur', 0, '62b2e2df0cd47'),
(111, 'SQL( v)', 1, '4'),
(112, 'Des appels réseau', 0, '4'),
(113, 'Un langage de programmation comme C ++', 0, '4'),
(114, 'APIs', 0, '4'),
(115, 'Table', 0, '5'),
(116, 'Ligne( v)', 1, '5'),
(117, 'Colonne', 0, '5'),
(118, 'Objet', 0, '5'),
(119, 'Table', 0, '6'),
(120, 'Ligne', 0, '6'),
(121, 'Colonne( v)', 1, '6'),
(122, 'Objet', 0, '6'),
(123, 'USE( v)', 1, '7'),
(124, 'CREATE', 0, '7'),
(125, 'DROP', 0, '7'),
(126, 'SCHEMA', 0, '7'),
(127, 'TABLE', 0, '8'),
(128, 'OBJECT', 0, '8'),
(129, 'DB', 0, '8'),
(130, 'SCHEMA( v)', 1, '8'),
(131, 'CREATE( v)', 1, '9'),
(132, 'SET', 0, '9'),
(133, 'SETUP', 0, '9'),
(134, 'LINK', 0, '9'),
(135, 'db.otp', 0, '10'),
(136, 'dp.zip', 0, '10'),
(137, 'db.opt( v)', 1, '10'),
(138, 'db.cls', 0, '10'),
(210, 'Faux', 0, '3'),
(221, 'Orienté objet', 0, '1'),
(222, 'Hiérarchique', 0, '1'),
(223, 'Relationnel ( v)', 1, '1'),
(224, 'Réseau', 0, '1'),
(225, 'Objets', 0, '2'),
(226, 'Tables( v)', 1, '2'),
(227, 'Réseaux', 0, '2'),
(228, 'Systèmes de fichiers', 0, '2'),
(229, 'Vrai( v)', 1, '3');

-- --------------------------------------------------------

--
-- Table structure for table `sessionu`
--

CREATE TABLE `sessionu` (
  `idses` varchar(255) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `browser` varchar(40) DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `location` varchar(1000) DEFAULT NULL,
  `os` varchar(40) DEFAULT NULL,
  `dateses` datetime NOT NULL DEFAULT current_timestamp(),
  `devicname` varchar(40) DEFAULT NULL,
  `stat` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessionu`
--

INSERT INTO `sessionu` (`idses`, `username`, `browser`, `ip`, `location`, `os`, `dateses`, `devicname`, `stat`) VALUES
('U2FsdGVkX1+bCSLVGxnKvKxtnCRVLHKXIkIyx/ZiCd8=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 08:57:19', ' , 1366x768', 1),
('U2FsdGVkX1+C2xa+2uJahT5yhaoHy9O+trrTNyx90sk=', 'ayoubg', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 15:07:38', ' , 1366x768', 0),
('U2FsdGVkX1+dsqFXU9GvedquaqdN6ajf7wg53JrX64M=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 08:54:32', ' , 1366x768', 1),
('U2FsdGVkX1+k4/3GZHXDiNnWwf20hUiZi0kj1QFT91M=', 'ayoubg', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 14:08:48', ' , 1366x768', 0),
('U2FsdGVkX1+n/jXVp5P5GeOqjZFANJcBCzZo3DxrLB8=', 'ayoubhh', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 15:19:53', ' , 1366x768', 0),
('U2FsdGVkX1+UP6QoCzxq6HLQA70Vz1/tsHg6A/8Omvc=', 'admin', 'Webkit', '196.92.8.128', 'Morocco , Africa , Casablanca, ( latitude : 33.5922 , longitude : -7.6184)', 'Windows OS', '2022-06-29 21:09:49', ' , 1366x768', 1),
('U2FsdGVkX1+x9IOwvBllVozv/c+75rlR9ZDV6enkFD8=', 'ayoubg', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 14:35:07', ' , 1366x768', 0),
('U2FsdGVkX1/KI8s5n3SuPEZIuNU1KBJoU1pgawDvY/k=', 'ayoubhh', 'Webkit', '41.251.6.162', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 13:31:45', ' , 1366x768', 1),
('U2FsdGVkX1/KX+HPCKryEEsX0foYrq8gm0fGLtTwkOw=', 'ayoubg', 'Webkit', '196.77.36.75', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 10:31:53', ' , 1366x768', 1),
('U2FsdGVkX1/lEsOGCvJ3S27Rnuc5pjdyuWeelaia6rI=', 'ayoubg', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 15:19:41', ' , 1366x768', 0),
('U2FsdGVkX1/mXnot7jQ3beflRD6l3b78RQzQZMm3nGI=', 'ayoubhh', 'Webkit', '41.251.6.162', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 13:25:14', ' , 1366x768', 1),
('U2FsdGVkX1/MzqdNES3+4yUPiYlc/mRizZd/KGqfNRY=', 'ayoubg', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 14:30:05', ' , 1366x768', 0),
('U2FsdGVkX1/rQnL/8B8iQz1Xw6drQthj8pVrnfezdx4=', 'admin', 'Webkit', '196.77.35.7', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-29 10:34:33', ' , 1366x768', 1),
('U2FsdGVkX1/vozkR1bJ7ddx8mgUVtn3sSSqaeFHgUQg=', 'ayoubg', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:17:20', ' , 1366x768', 0),
('U2FsdGVkX184vNTpBLz5UG35YzeKwiQNMTZPG/ClONE=', 'admin', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 15:21:50', ' , 1366x768', 0),
('U2FsdGVkX186UG+VEVyct7+674pzlehT1BaNIaxTdt8=', 'ayoubg', 'Webkit', '196.77.36.75', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 09:14:14', ' , 1366x768', 1),
('U2FsdGVkX188f4zkeP/OFAQttorSW6JzfwI9TQO7uLY=', 'admin', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:55:24', ' , 1366x768', 1),
('U2FsdGVkX188IVshynbGdeds1pP3mModWiWF6Hfcjd8=', 'ayoubg', 'Webkit', '196.77.36.75', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 11:03:00', ' , 1366x768', 0),
('U2FsdGVkX18cLPj2Dyi9VCAKEe5o/DYDGAJEPr9d2po=', 'ayoubg', 'Webkit', '105.157.86.247', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-29 15:48:42', ' , 1366x768', 1),
('U2FsdGVkX18DCS8PFdiislYh71kFm98iWK69KOzN+UU=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 08:55:42', ' , 1366x768', 1),
('U2FsdGVkX18EStK8Ja5DYhMlF/f5l4rUhGTAJM/RKpI=', 'ayoubg', 'Webkit', '105.157.86.247', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-29 15:56:36', ' , 1366x768', 0),
('U2FsdGVkX18GthDLdPwrLKWUC9Aht5kk2rk3gheUt9U=', 'ayoubg', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:53:42', ' , 1366x768', 0),
('U2FsdGVkX18iUkZvWqu/eMcH256lvcOzUXz9nVcWA5g=', 'ayoubg', 'Webkit', '160.179.99.57', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 05:52:56', ' , 1366x768', 1),
('U2FsdGVkX18IZ4p8dUSY+IwhmeqF4MNSLlD1IA/IJKE=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 09:34:35', ' , 1366x768', 1),
('U2FsdGVkX18MU0J2kwRYNDYTpMkdloHGqq9Fwlp4Tew=', 'ayoubg', 'Webkit', '196.77.36.75', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 10:23:27', ' , 1366x768', 1),
('U2FsdGVkX18pLy0n3wZ3rwRkwlBYg88q5UWPxVh0N3Q=', 'ayoubg', 'Webkit', '160.179.99.57', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 05:59:12', ' , 1366x768', 0),
('U2FsdGVkX18QdmPJ20ZUG8aQiV91+2rv3DxW4e24O4c=', 'ayoubg', 'Webkit', '196.77.36.75', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-30 09:07:33', ' , 1366x768', 1),
('U2FsdGVkX18qeKekr08GTuakpMQo/9pTJnWmAhJlM08=', 'ayoubg', 'Gecko', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 09:45:19', ' , 1708x960', 1),
('U2FsdGVkX18rmUknG/DBd+WS2VPmLACsecX2aJ7M3ag=', 'ayoubg', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 09:53:33', ' , 1366x768', 0),
('U2FsdGVkX18uJy2dc1uNZon8yjyR8huDg2+xSxhMioE=', 'admin', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:58:16', ' , 1366x768', 0),
('U2FsdGVkX18yM2sBfB8qipbpswT2Na37ZORn6Vz+h+g=', 'ayoubhh', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:25:48', ' , 1366x768', 0),
('U2FsdGVkX190el9GedjJyaWHYFplkIuWbDx9AH9W+Zw=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 09:14:16', ' , 1366x768', 1),
('U2FsdGVkX19494kR9UojdRgsbfIr7l/5FCveRigFfd4=', 'ayoubg', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:28:23', ' , 1366x768', 1),
('U2FsdGVkX198Qd5IXOrCF5jx/TalUeH9pyeMOuUZ1U4=', 'ayoubhh', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:24:50', ' , 1366x768', 1),
('U2FsdGVkX19jIxQSJoXX5TYMLWGeDHprLp4q7JlmBgA=', 'ayoubg', 'Gecko', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 09:46:33', ' , 1708x960', 1),
('U2FsdGVkX19l1n/CZlYatgI2VWKN5vmzG6Fu6//2qA0=', 'admin', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 14:09:20', ' , 1366x768', 0),
('U2FsdGVkX19lkxo4HwqvvYTDzCBUjnjHFod3eZ3sgws=', 'ayoubhh', 'Gecko', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 09:46:15', ' , 1708x960', 1),
('U2FsdGVkX19llTEKiP6r+8GWMjIRLW695FE1g1KPMU8=', 'ayoubhh', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:12:42', ' , 1366x768', 0),
('U2FsdGVkX19M+BXM/mfEEZ/NJY7fgc0u2h8Vlr+kqxM=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 09:25:45', ' , 1366x768', 1),
('U2FsdGVkX19N5i5HJojnWvlPGge9YSmUwf/+9gTQCE0=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 08:58:28', ' , 1366x768', 1),
('U2FsdGVkX19P80VDMzM9dvHQ1aow9Z3MA0jiAxYJFaE=', 'admin', 'Webkit', '160.176.71.231', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 09:38:01', ' , 1366x768', 1),
('U2FsdGVkX19pakG5mONRQ9Whld99iX1d7pviBKM+M/4=', 'ayoubg', 'Gecko', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 09:32:43', ' , 1708x960', 1),
('U2FsdGVkX19qPNU6TxjYtVLLRYu7TH/qJYphZr4NQF0=', 'admin', 'Webkit', '196.77.35.7', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-29 10:39:04', ' , 1366x768', 0),
('U2FsdGVkX19RkPmGTNDosNLaocrzs+B4WzVdemkV+mo=', 'admin', 'Webkit', '196.92.8.128', 'Morocco , Africa , Casablanca, ( latitude : 33.5922 , longitude : -7.6184)', 'Windows OS', '2022-06-29 21:13:53', ' , 1366x768', 0),
('U2FsdGVkX19ruPzt/zWZZTKUEGY1hnpKPGo34AiWFG0=', 'Admin', 'Webkit', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 11:59:32', ' , 1366x768', 0),
('U2FsdGVkX19sj2vjBUyve6Y4sFZGp81GX+gegHtF7Bg=', 'ayoubg', 'Webkit', '160.179.99.57', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-24 05:56:12', ' , 1366x768', 1),
('U2FsdGVkX19tGKJxK+vC1lGNYPBaV9qSbJpDIxCETPU=', 'ayoubg', 'Webkit', '196.64.160.106', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 14:09:56', ' , 1366x768', 0),
('U2FsdGVkX19x+aYGIJjRViXru5dASlzvaQ+dPAwA88o=', 'admin', 'Gecko', '41.251.12.239', 'Morocco , Africa , Marrakesh, ( latitude : 31.6298 , longitude : -8.0101)', 'Windows OS', '2022-06-22 09:31:33', ' , 1708x960', 1);

-- --------------------------------------------------------

--
-- Table structure for table `temusers`
--

CREATE TABLE `temusers` (
  `idtempu` int(11) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `passw` varchar(40) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `rank` varchar(30) DEFAULT NULL,
  `loger` varchar(20) DEFAULT NULL,
  `sessions` int(11) DEFAULT NULL,
  `confirmed` varchar(20) DEFAULT NULL,
  `dated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(40) NOT NULL,
  `passw` varchar(40) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `rank` varchar(30) DEFAULT NULL,
  `loger` varchar(20) DEFAULT NULL,
  `sessions` int(11) DEFAULT NULL,
  `dated` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `passw`, `email`, `rank`, `loger`, `sessions`, `dated`) VALUES
('admin', '1111', 'admin@gmail.com', 'Admin', 'true', 21, '2022-06-22 09:31:24'),
('ayoubg', '1111', 'ayoub223355@gmail.com', 'Teacher', 'true', 25, '2022-06-22 09:32:40'),
('ayoubhh', '1111', 'ayoubfwd@gmail.com', 'Student', 'true', 8, '2022-06-22 09:46:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `batchexam`
--
ALTER TABLE `batchexam`
  ADD PRIMARY KEY (`idbat`),
  ADD UNIQUE KEY `code` (`code`) USING HASH,
  ADD KEY `username` (`username`),
  ADD KEY `idf` (`idf`),
  ADD KEY `idm` (`idm`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`idc`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`idexam`),
  ADD UNIQUE KEY `code` (`code`) USING HASH,
  ADD KEY `idbat` (`idbat`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `examings`
--
ALTER TABLE `examings`
  ADD PRIMARY KEY (`idexe`),
  ADD KEY `username` (`username`),
  ADD KEY `idf` (`idf`),
  ADD KEY `idm` (`idm`);

--
-- Indexes for table `filier`
--
ALTER TABLE `filier`
  ADD PRIMARY KEY (`idf`);

--
-- Indexes for table `matier`
--
ALTER TABLE `matier`
  ADD PRIMARY KEY (`idm`);

--
-- Indexes for table `passed`
--
ALTER TABLE `passed`
  ADD PRIMARY KEY (`idpass`),
  ADD KEY `idbat` (`idbat`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `passedhistory`
--
ALTER TABLE `passedhistory`
  ADD PRIMARY KEY (`idph`),
  ADD KEY `idpass` (`idpass`);

--
-- Indexes for table `pfpu`
--
ALTER TABLE `pfpu`
  ADD PRIMARY KEY (`idpfp`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`idq`),
  ADD KEY `username` (`username`),
  ADD KEY `idf` (`idf`),
  ADD KEY `idm` (`idm`);

--
-- Indexes for table `questionimg`
--
ALTER TABLE `questionimg`
  ADD PRIMARY KEY (`idqmg`),
  ADD KEY `username` (`username`),
  ADD KEY `idf` (`idf`),
  ADD KEY `idm` (`idm`);

--
-- Indexes for table `questiontxt`
--
ALTER TABLE `questiontxt`
  ADD PRIMARY KEY (`idqtxt`),
  ADD KEY `username` (`username`),
  ADD KEY `idf` (`idf`),
  ADD KEY `idm` (`idm`);

--
-- Indexes for table `resetrequest`
--
ALTER TABLE `resetrequest`
  ADD PRIMARY KEY (`idreq`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `respond`
--
ALTER TABLE `respond`
  ADD PRIMARY KEY (`idr`),
  ADD KEY `idq` (`idq`);

--
-- Indexes for table `sessionu`
--
ALTER TABLE `sessionu`
  ADD PRIMARY KEY (`idses`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `temusers`
--
ALTER TABLE `temusers`
  ADD PRIMARY KEY (`idtempu`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `batchexam`
--
ALTER TABLE `batchexam`
  MODIFY `idbat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93740433;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `idc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `idexam` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;

--
-- AUTO_INCREMENT for table `examings`
--
ALTER TABLE `examings`
  MODIFY `idexe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `filier`
--
ALTER TABLE `filier`
  MODIFY `idf` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `matier`
--
ALTER TABLE `matier`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `passedhistory`
--
ALTER TABLE `passedhistory`
  MODIFY `idph` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pfpu`
--
ALTER TABLE `pfpu`
  MODIFY `idpfp` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `questionimg`
--
ALTER TABLE `questionimg`
  MODIFY `idqmg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `questiontxt`
--
ALTER TABLE `questiontxt`
  MODIFY `idqtxt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `respond`
--
ALTER TABLE `respond`
  MODIFY `idr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=230;

--
-- AUTO_INCREMENT for table `temusers`
--
ALTER TABLE `temusers`
  MODIFY `idtempu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `batchexam`
--
ALTER TABLE `batchexam`
  ADD CONSTRAINT `batchexam_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  ADD CONSTRAINT `batchexam_ibfk_2` FOREIGN KEY (`idf`) REFERENCES `filier` (`idf`) ON DELETE CASCADE,
  ADD CONSTRAINT `batchexam_ibfk_3` FOREIGN KEY (`idm`) REFERENCES `matier` (`idm`) ON DELETE CASCADE;

--
-- Constraints for table `exam`
--
ALTER TABLE `exam`
  ADD CONSTRAINT `exam_ibfk_1` FOREIGN KEY (`idbat`) REFERENCES `batchexam` (`idbat`) ON DELETE CASCADE,
  ADD CONSTRAINT `exam_ibfk_2` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE;

--
-- Constraints for table `examings`
--
ALTER TABLE `examings`
  ADD CONSTRAINT `examings_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  ADD CONSTRAINT `examings_ibfk_2` FOREIGN KEY (`idf`) REFERENCES `filier` (`idf`) ON DELETE CASCADE,
  ADD CONSTRAINT `examings_ibfk_3` FOREIGN KEY (`idm`) REFERENCES `matier` (`idm`) ON DELETE CASCADE;

--
-- Constraints for table `passed`
--
ALTER TABLE `passed`
  ADD CONSTRAINT `passed_ibfk_1` FOREIGN KEY (`idbat`) REFERENCES `batchexam` (`idbat`) ON DELETE CASCADE,
  ADD CONSTRAINT `passed_ibfk_2` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE;

--
-- Constraints for table `passedhistory`
--
ALTER TABLE `passedhistory`
  ADD CONSTRAINT `passedhistory_ibfk_1` FOREIGN KEY (`idpass`) REFERENCES `passed` (`idpass`) ON DELETE CASCADE;

--
-- Constraints for table `pfpu`
--
ALTER TABLE `pfpu`
  ADD CONSTRAINT `pfpu_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE;

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  ADD CONSTRAINT `question_ibfk_2` FOREIGN KEY (`idf`) REFERENCES `filier` (`idf`) ON DELETE CASCADE,
  ADD CONSTRAINT `question_ibfk_3` FOREIGN KEY (`idm`) REFERENCES `matier` (`idm`) ON DELETE CASCADE;

--
-- Constraints for table `questionimg`
--
ALTER TABLE `questionimg`
  ADD CONSTRAINT `questionimg_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  ADD CONSTRAINT `questionimg_ibfk_2` FOREIGN KEY (`idf`) REFERENCES `filier` (`idf`) ON DELETE CASCADE,
  ADD CONSTRAINT `questionimg_ibfk_3` FOREIGN KEY (`idm`) REFERENCES `matier` (`idm`) ON DELETE CASCADE;

--
-- Constraints for table `questiontxt`
--
ALTER TABLE `questiontxt`
  ADD CONSTRAINT `questiontxt_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE,
  ADD CONSTRAINT `questiontxt_ibfk_2` FOREIGN KEY (`idf`) REFERENCES `filier` (`idf`) ON DELETE CASCADE,
  ADD CONSTRAINT `questiontxt_ibfk_3` FOREIGN KEY (`idm`) REFERENCES `matier` (`idm`) ON DELETE CASCADE;

--
-- Constraints for table `resetrequest`
--
ALTER TABLE `resetrequest`
  ADD CONSTRAINT `resetrequest_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE;

--
-- Constraints for table `respond`
--
ALTER TABLE `respond`
  ADD CONSTRAINT `respond_ibfk_1` FOREIGN KEY (`idq`) REFERENCES `question` (`idq`) ON DELETE CASCADE;

--
-- Constraints for table `sessionu`
--
ALTER TABLE `sessionu`
  ADD CONSTRAINT `sessionu_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



