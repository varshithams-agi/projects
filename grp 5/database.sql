-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2021 at 12:54 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `creaacc`
--

CREATE TABLE `creaacc` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phno` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `balance` int(50) NOT NULL,
  `accountnumber` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `creaacc`
--

INSERT INTO `creaacc` (`name`, `email`, `phno`, `id`, `balance`, `accountnumber`) VALUES
('Manjula', 'manu@gmail.com', '4647978089', 4, 9000000, 0),
('Varshitha', 'varshitha@gmail.com', '63498758347', 6, 4356268, 0),
('sinchana', 'apurva@gmail.com', '837448937', 10, 362387365, 0),
('shreya', 'apurva@gmail.com', '837448937', 11, 456789, 0),
('ramu', 'ramu@gmail.com', '9876543', 23, 5678904, 0),
('shreya patnakar', 'shreya@gmail.com', '765432567', 24, 9876543, 0),
('tilak N', 'tilakn@gmail.com', '98786544343', 28, 67895432, 0),
('nayana', 'nayana@gmail.com', '76543224', 37, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `creaacc`
--
ALTER TABLE `creaacc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `creaacc`
--
ALTER TABLE `creaacc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
