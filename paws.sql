-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 15, 2021 at 01:55 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `paws`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `username` varchar(50) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone_no` bigint(12) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `full_name`, `email`, `password`, `phone_no`) VALUES
('nitro', 'Talal Touseef', '22100282@lums.edu.pk', 'beefchillidry', 923212212211),
('taimoor', 'Taimoor Tariq', 'taimoor.cf@gmail.com', 'pakistan', 923224864594);

-- --------------------------------------------------------

--
-- Table structure for table `handles`
--

CREATE TABLE `handles` (
  `id` int(6) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `staff_id` int(6) NOT NULL,
  `approval_status` varchar(100) NOT NULL,
  `progress_status` text NOT NULL,
  `cost_incurred` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pawtner`
--

CREATE TABLE `pawtner` (
  `username` varchar(50) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone_no` bigint(12) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pawtner`
--

INSERT INTO `pawtner` (`username`, `full_name`, `email`, `password`, `phone_no`) VALUES
('momina', 'Momina Amer Akhter', '2210009@lums.edu.pk', 'biryani', 923331234567),
('vafa', 'Vafa Batool', '22100112@lums.edu.pk', 'chowmein', 923234332008);

-- --------------------------------------------------------

--
-- Table structure for table `reported_cases`
--

CREATE TABLE `reported_cases` (
  `id` int(10) NOT NULL,
  `animal` varchar(50) NOT NULL,
  `location` text NOT NULL,
  `animal_condition` text DEFAULT NULL,
  `phone_no` bigint(12) UNSIGNED NOT NULL,
  `report_time` datetime NOT NULL DEFAULT current_timestamp(),
  `pawtner_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reported_cases`
--

INSERT INTO `reported_cases` (`id`, `animal`, `location`, `animal_condition`, `phone_no`, `report_time`, `pawtner_id`) VALUES
(1, 'dog', 'Near GOR-1 Entrance Gate, Jail Road Side', 'Doggo is a happy doggo Alhamdulillah', 923224864594, '2021-11-14 16:15:35', 'vafa'),
(2, 'cat', 'Near LUMS in-gate, on the green belt', 'Catto is a happy fatto catto. Alhamdulillah. May all animals live a fat happy life.', 923234332008, '2021-11-14 11:17:56', 'momina');

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `username` varchar(50) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone_no` bigint(12) UNSIGNED NOT NULL,
  `role` varchar(20) NOT NULL,
  `admin_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`username`, `full_name`, `email`, `password`, `phone_no`, `role`, `admin_id`) VALUES
('maham', 'Maham Ghazanfar', '22100016@lums.edu.pk', 'vegetables', 3211233211, 'Sproj Partner', 'Talal'),
('rohan', 'Rohan Hussain', '22100063@lums.edu.pk', 'fullstack', 923224434431, 'Tutorial Guy', 'taimoor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `handles`
--
ALTER TABLE `handles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pawtner`
--
ALTER TABLE `pawtner`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `reported_cases`
--
ALTER TABLE `reported_cases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `handles`
--
ALTER TABLE `handles`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;
ALTER TABLE `reported_cases`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
