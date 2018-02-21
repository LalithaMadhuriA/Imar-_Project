-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2018 at 03:31 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contacts_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `group_inf`
--

CREATE TABLE `group_inf` (
  `owner_email` varchar(30) NOT NULL,
  `group_id` varchar(30) NOT NULL,
  `group_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `group_inf`
--

INSERT INTO `group_inf` (`owner_email`, `group_id`, `group_name`) VALUES
('ram@inmar.com', '1201', 'facebook'),
('ram@inmar.com', '1202', 'information technology'),
('ram@inmar.com', '1203', '10th'),
('ram@inmar.com', '1204', 'college'),
('ram@inmar.com', '1205', 'inmar'),
('ram@inmar.com', '1206', 'microsoft'),
('ram@inmar.com', '1230', 'IBM');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UName` varchar(20) NOT NULL,
  `email_id` varchar(15) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Phno` bigint(14) NOT NULL,
  `Aadhar` bigint(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UName`, `email_id`, `Password`, `Phno`, `Aadhar`) VALUES
('abcd adefgh', 'ac@inmar.com', 'f30e6e060fa47e49185a', 9856458795, 985645879547),
('abcd acdsadfg', 'acd@inmar.com', 'a6689c4ff229292353c8', 8562314578, 856231457888),
('Alla Lalitha', 'al@inmar.com', '220a64944da78c7c3b63', 9652312354, 965231235454),
('abcd acbdefgh', 'alm@inmar.com', 'abc@123A', 8562314578, 784569012347),
('abc defghsa', 'am@inmar.com', '0e0ee93630fc3970d0df', 8562314578, 856231457758),
('abcd abcdefgh', 'def@inmar.com', '835a3e2653fd14bb69c4', 9652312365, 965231247854);

-- --------------------------------------------------------

--
-- Table structure for table `user_contacts`
--

CREATE TABLE `user_contacts` (
  `UName` varchar(20) NOT NULL,
  `Id` varchar(10) NOT NULL,
  `email_id` varchar(30) NOT NULL,
  `Phno` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_groups`
--

CREATE TABLE `user_groups` (
  `UName` varchar(20) NOT NULL,
  `email_id` varchar(30) NOT NULL,
  `grp_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `group_inf`
--
ALTER TABLE `group_inf`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email_id`),
  ADD UNIQUE KEY `Aadhar` (`Aadhar`);

--
-- Indexes for table `user_contacts`
--
ALTER TABLE `user_contacts`
  ADD PRIMARY KEY (`email_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
