-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 24, 2022 at 02:47 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bddescapegame`
--

-- --------------------------------------------------------

--
-- Table structure for table `jeu`
--

CREATE TABLE `jeu` (
  `id` int(2) NOT NULL,
  `nomobjet` varchar(20) NOT NULL,
  `indice` varchar(300) NOT NULL,
  `latitute` float NOT NULL,
  `longitude` float NOT NULL,
  `minzoom` int(2) NOT NULL,
  `icone` varchar(100) NOT NULL,
  `type` int(2) NOT NULL,
  `idbloque` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jeu`
--

INSERT INTO `jeu` (`id`, `nomobjet`, `indice`, `latitute`, `longitude`, `minzoom`, `icone`, `type`, `idbloque`) VALUES
(1, 'velos_casses', 'Ohhh non ! Nos vélos sont cassés ...\r\nMais il me semble que les ENSGagés ont mis à disposition des outils qui pourraient nous servir ;) ', 48.8415, 2.58786, 18, '../img/velos_casses.png', 4, 0),
(2, 'cadenas', 'Il me semble que code est la date de la création de l’Académie du Climat de Paris, Place Baudoyer, tu sais à côté de l’hôtel de ville de Paris?', 48.841, 2.58736, 20, '../img/cadenas.png', 3, 4),
(3, 'plaque', '', 48.8563, 2.35584, 17, '../img/plaque.jpg', 1, 0),
(4, 'boite à outils', '', 48.841, 2.58736, 15, '../img/outils.png', 2, 5),
(5, 'velos_repares', 'appel entrant de Lisa ', 48.8415, 2.58786, 18, '../img/velos_repares.png', 2, 0),
(6, 'place', 'J’avais prévu qu’on aille voir la plus grande fierté des Montois avant de commencer le tour de Bretagne.)', 48.2766, -3.55418, 16, '../img/place.png', 3, 0),
(7, 'photo_mont', 'Tout est dans la photo!', 48.6358, -1.51194, 16, '../img/photo_mont.jpg', 1, 6),
(8, 'photo_dinan', '', 48.4572, -2.03774, 16, '../img/photo_dinan.jpg', 1, 6),
(9, 'bon', '', 48.2139, -4.53925, 12, '../img/bon.png', 2, 10),
(10, 'crepe', 'Elle manque de beurre ta crêpe. On m’a dit que la Biscuiterie de Carnac avait les meilleurs mottes de beurre salé.', 47.8555, -3.90607, 17, 'crepe.png', 4, 0),
(11, 'beurre', '', 47.5735, -3.07483, 18, '../img/beurre.png', 2, 10);

-- --------------------------------------------------------

--
-- Table structure for table `joueurs`
--

CREATE TABLE `joueurs` (
  `id` int(10) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `pseudo` varchar(20) NOT NULL,
  `temps` float DEFAULT NULL,
  `etape` float DEFAULT NULL,
  `score` float DEFAULT NULL,
  `classement` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `joueurs`
--

INSERT INTO `joueurs` (`id`, `nom`, `prenom`, `pseudo`, `temps`, `etape`, `score`, `classement`) VALUES
(4, 'Girardin', 'Claire', 'Clairette', NULL, NULL, NULL, NULL),
(5, 'Girardin', 'Claire', 'Clairette', NULL, NULL, NULL, NULL),
(6, 'Argento', 'Lisa', 'lisaaaaa', NULL, NULL, NULL, NULL),
(7, 'ARGENTO', 'Jean-Philippe', 'JP', NULL, NULL, NULL, NULL),


--
-- Indexes for dumped tables
--

--
-- Indexes for table `jeu`
--
ALTER TABLE `jeu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `joueurs`
--
ALTER TABLE `joueurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jeu`
--
ALTER TABLE `jeu`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
