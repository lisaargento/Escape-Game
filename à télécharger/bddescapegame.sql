-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2022 at 11:46 AM
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
  `indice` varchar(600) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `width` int(5) NOT NULL DEFAULT '50',
  `height` int(5) NOT NULL DEFAULT '50',
  `minzoom` int(2) NOT NULL,
  `URLicone` varchar(100) NOT NULL,
  `type` int(2) NOT NULL,
  `idSolution` int(2) DEFAULT NULL,
  `idDebloquant` int(5) DEFAULT NULL,
  `idLibere` int(2) DEFAULT NULL,
  `audio` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jeu`
--

INSERT INTO `jeu` (`id`, `nomobjet`, `indice`, `latitude`, `longitude`, `width`, `height`, `minzoom`, `URLicone`, `type`, `idSolution`, `idDebloquant`, `idLibere`, `audio`) VALUES
(1, 'Vélos cassés', 'Ohhh non ! Mon vélo a crevé ...\r\n<br>\r\nIl me semble que les ENSGagés ont mis à disposition des outils qui pourraient nous servir ;) ', 48.8561, 2.614, 100, 100, 13, '../img/velos_casses.png', 4, 2, 4, 5, ''),
(2, 'Cadenas', 'Mince la porte de la salle est fermée ...\r\n<br>\r\nIl me semble que le code de ce cadenas est la date de la création de l’Académie du Climat de Paris ! Elle se situe Place Baudoyer à côté de l’hôtel de ville de Paris, ça te dis quelque chose ?', 48.841, 2.58736, 50, 50, 17, '../img/cadenas.png', 3, 3, 2021, 4, ''),
(3, 'Plaque', 'Le saviez-vous ?\r\n<br> <br>\r\nL\'Académie du Climat est un lieu pour s\'informer, se former, échanger et agir !\r\n<br>\r\nElle regroupe les locaux de plusieurs associations engagées et accueille des ateliers, des conférences/débats, des projections, des expositions... Mais aussi des classes et des groupes pour les accompagner de la sensibilisation à l\'engagement.', 48.8563, 2.35584, 250, 200, 16, '../img/plaque.jpg', 1, NULL, NULL, NULL, ''),
(4, 'Boite à outils', 'Le saviez-vous ?\r\n<br><br>\r\nRéparer et revaloriser nos biens est très important car la production et l\'incinérations sont les étapes les plus polluantes dans le cycle de vie des objets.\r\n<br>\r\nEn donnant une seconde vie à nos biens nous évitons d\'en produire de nouveaux et nous réduisons nos déchets. ', 48.841, 2.58736, 100, 70, 18, '../img/outils.png', 2, NULL, NULL, NULL, ''),
(5, 'Vélos réparés', '', 48.8561, 2.614, 100, 100, 15, '../img/velos_repares.png', 2, NULL, NULL, 6, '../audio/depart.m4a'),
(6, 'Places', 'J’avais prévu qu’on aille voir la plus grande fierté des Montois avant de commencer le tour de Bretagne.', 48.2766, -3.55418, 100, 100, 16, '../img/place.png', 3, 7, 5712, 9, ''),
(7, 'Mont Saint Michel', 'Le saviez-vous ?\r\n<br><br>\r\nCet îlot rocheux consacré à saint Michel est une étape des Chemins de Saint-Jacques-de-Compostelle. Il figure, avec sa baie, sur la liste du patrimoine mondiale de l\'UNESCO depuis 1979. A l\'origine nommé Mont Tombe, il y fut érigé un oratoire en l\'honneur de l\'archange saint Michel en 708 qui lui donnera plus tard l\'appellation qu\'on lui connait aujourd\'hui.', 48.6358, -1.51194, 500, 400, 16, '../img/photo_mont.jpg', 1, 8, NULL, NULL, ''),
(8, 'Dinan', '', 48.4572, -2.03774, 270, 220, 15, '../img/photo_dinan.jpg', 1, NULL, NULL, NULL, ''),
(9, 'Carte postale', '', 48.2766, -3.55418, 260, 210, 16, '../img/carte_postale.png', 2, NULL, NULL, 10, '../audio/crozon.m4a'),
(10, 'maison de Malo', 'On peut passer voir Malo ! Il me semble qu\'il est à Concarneau en ce moment ...', 48.2139, -4.53925, 100, 100, 14, '../img/maison.png', 3, 11, 16, 12, ''),
(11, 'tete de Malo', '', 47.8555, -3.90607, 200, 200, 16, '../img/tete_malo.png', 1, NULL, NULL, NULL, ''),
(12, 'crepe', '', 48.2139, -4.53925, 100, 100, 15, '../img/crepe.png', 2, NULL, NULL, NULL, '../audio/fin.m4a');

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
(8, 'Argento', 'Lisa', 'efr', NULL, NULL, NULL, NULL),
(9, 'Argento', 'Lisa', 'efr', NULL, NULL, NULL, NULL),
(21, 'Gir', 'Claire', 'clairette', NULL, NULL, NULL, NULL),
(22, 'c c', 'vreg', 'ss', NULL, NULL, NULL, NULL),
(23, 'ARGENTO', 'Lisa', 'CoIGN-CoIGN', NULL, NULL, NULL, NULL),
(24, 'ARGENTO', 'Lisa', 'CoIGN-CoIGN', NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
