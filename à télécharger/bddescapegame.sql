-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 05, 2022 at 12:04 AM
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
(1, 'Vélos cassés', 'Ohhh non ! Mon vélo a crevé ...\r\n<br>\r\nIl me semble que les ENSGagés ont mis à disposition des outils qui pourraient nous servir ;) ', 48.8561, 2.614, 100, 100, 15, 'img/velos_casses.png', 4, 2, 4, 5, ''),
(2, 'Cadenas', 'Mince la porte de la salle est fermée ...\r\n<br>\r\nIl me semble que le code de ce cadenas est l\'année de la création de l’Académie du Climat de Paris ! Elle se situe Place Baudoyer à côté de l’hôtel de ville du 4e arrondissement de Paris, ça te dis quelque chose ?', 48.841, 2.58736, 50, 50, 18, 'img/cadenas.png', 3, 3, 2021, 4, ''),
(3, 'Plaque', 'Le saviez-vous ?\r\n<br> <br>\r\nL\'Académie du Climat est un lieu pour s\'informer, se former, échanger et agir !\r\n<br>\r\nElle regroupe les locaux de plusieurs associations engagées et accueille des ateliers, des conférences/débats, des projections, des expositions... Mais aussi des classes et des groupes pour les accompagner de la sensibilisation à l\'engagement.', 48.8563, 2.35584, 250, 200, 16, 'img/plaque.jpg', 1, NULL, NULL, NULL, ''),
(4, 'Boite à outils', 'Le saviez-vous ?\r\n<br><br>\r\nRéparer et revaloriser nos biens est très important car la production et l\'incinérations sont les étapes les plus polluantes dans le cycle de vie des objets.\r\n<br>\r\nEn donnant une seconde vie à nos biens nous évitons d\'en produire de nouveaux et nous réduisons nos déchets. ', 48.841, 2.58736, 100, 70, 17, 'img/outils.png', 2, NULL, NULL, NULL, ''),
(5, 'Vélos réparés', '', 48.8561, 2.614, 100, 100, 15, 'img/velos_repares.png', 2, NULL, NULL, 6, 'audio/depart.m4a'),
(6, 'Places', 'J’avais prévu qu’on aille voir la plus grande fierté des Montois avant de commencer le tour de Bretagne.\r\n<br> <br>\r\nIndice : Le code est caché dans des photos.', 48.2766, -3.55418, 100, 100, 14, 'img/place.png', 3, 7, 5712, 9, ''),
(7, 'Mont Saint Michel', 'Le saviez-vous ?\r\n<br><br>\r\nCet îlot rocheux consacré à saint Michel est une étape des Chemins de Saint-Jacques-de-Compostelle. Il figure, avec sa baie, sur la liste du patrimoine mondiale de l\'UNESCO depuis 1979. A l\'origine nommé Mont Tombe, il y fut érigé un oratoire en l\'honneur de l\'archange saint Michel en 708 qui lui donnera plus tard l\'appellation qu\'on lui connait aujourd\'hui.', 48.6358, -1.51194, 500, 400, 16, 'img/mont.png', 1, 8, NULL, NULL, ''),
(8, 'Dinan', '', 48.4572, -2.03774, 300, 260, 15, 'img/photo_dinan.jpg', 1, NULL, NULL, NULL, ''),
(9, 'Carte postale', 'On y va à vélo?', 48.2766, -3.55418, 270, 210, 14, 'img/carte_postale.png', 4, NULL, 5, 10, 'audio/crozon.m4a'),
(10, 'maison de Malo', 'On peut passer voir Malo ! Il me semble qu\'il est à Concarneau en ce moment ...', 48.2419, -4.4927, 100, 100, 14, 'img/maison.png', 3, 11, 16, 12, ''),
(11, 'tete de Malo', '', 47.877, -3.90788, 180, 200, 15, 'img/malo.png', 1, NULL, NULL, NULL, ''),
(12, 'crepe', '', 48.2419, -4.4927, 150, 150, 14, 'img/crepe.png', 2, NULL, NULL, NULL, 'audio/fin.m4a');

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
  `score` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `joueurs`
--

INSERT INTO `joueurs` (`id`, `nom`, `prenom`, `pseudo`, `temps`, `score`) VALUES
(1, 'Argento', 'Lisa', 'Marco', 1100, 500),
(2, 'pp', 'pp', 'Lison', 1100, 600),
(3, 'Girardin', 'Claire', 'Poulette', 900, 500),
(4, 'a', 'a', 'Machaussette', 1200, 700),
(5, 'A', 'L', 'Lisouille', 300, 1000),
(6, 'Girardin', 'Claire', 'Clairette', 500, 1020),
(7, 'Girardin', 'Claire', 'CoIGN-CoIGN', 400, 1025),
(8, 'Argt', 'Lisa', 'Poussin', 700, 950),
(9, 'Girardin', 'Claire', 'clairette10', 750, 950),
(10, 'Ma', 'Chaussette', 'UnCanap', 3, 820);

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
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
