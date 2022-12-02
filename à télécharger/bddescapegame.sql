-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 02 déc. 2022 à 00:13
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bddescapegame`
--

-- --------------------------------------------------------

--
-- Structure de la table `jeu`
--

CREATE TABLE `jeu` (
  `id` int(2) NOT NULL,
  `nomobjet` varchar(20) NOT NULL,
  `indice` varchar(600) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `minzoom` int(2) NOT NULL,
  `URLicone` varchar(100) NOT NULL,
  `type` int(2) NOT NULL,
  `idSolution` int(2) DEFAULT NULL,
  `idDebloquant` int(5) DEFAULT NULL,
  `idLibere` int(2) DEFAULT NULL,
  `audio` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jeu`
--

INSERT INTO `jeu` (`id`, `nomobjet`, `indice`, `latitude`, `longitude`, `minzoom`, `URLicone`, `type`, `idSolution`, `idDebloquant`, `idLibere`, `audio`) VALUES
(1, 'Vélos cassés', 'Ohhh non ! Nos vélos sont cassés ...\r\n<br>\r\nMais il me semble que les ENSGagés ont mis à disposition des outils qui pourraient nous servir ;) ', 48.8415, 2.58786, 18, '../img/velos_casses.png', 4, 2, 4, 5, ''),
(2, 'Cadenas', 'Mince la porte de la salle est fermée ...\r\n<br>\r\nIl me semble que le code de ce cadenas est la date de la création de l’Académie du Climat de Paris ! Elle se situe Place Baudoyer à côté de l’hôtel de ville de Paris, tu vois ?', 48.841, 2.58736, 19, '../img/cadenas.png', 3, 3, 2021, 4, ''),
(3, 'Plaque', 'Le saviez-vous ?\r\n<br> <br>\r\nL\'Académie du Climat est un lieu pour s\'informer, se former, échanger et agir !\r\n<br>\r\nElle regroupe les locaux de plusieurs associations engagées et accueille des ateliers, des conférences/débats, des projections, des expositions... Mais aussi des classes et des groupes pour les accompagner de la sensibilisation à l\'engagement.', 48.8563, 2.35584, 17, '../img/plaque.jpg', 1, NULL, NULL, NULL, ''),
(4, 'Boite à outils', 'Le saviez-vous ?\r\n<br> <br>\r\nRéparer et revaloriser nos biens est très important car la production et l\'incinérations sont les étapes les plus polluantes dans le cycle de vie des objets.\r\n<br>\r\nEn donnant une seconde vie à nos biens nous évitons d\'en produire de nouveaux et nous réduisons nos déchets. ', 48.841, 2.58736, 18, '../img/outils.png', 2, NULL, NULL, NULL, ''),
(5, 'Vélos réparés', '', 48.8415, 2.58786, 18, '../img/velos_repares.png', 2, NULL, NULL, 6, '../audio/depart.m4a'),
(6, 'Places', 'J’avais prévu qu’on aille voir la plus grande fierté des Montois avant de commencer le tour de Bretagne.', 48.2766, -3.55418, 16, '../img/place.png', 3, 7, 5712, 9, ''),
(7, 'Mont Saint Michel', 'Le saviez-vous ?\r\n<br> <br>\r\nCet îlot rocheux consacré à saint Michel est une étape des Chemins de Saint-Jacques-de-Compostelle. Il figure, avec sa baie, sur la liste du patrimoine mondiale de l\'UNESCO depuis 1979. A l\'origine nommé Mont Tombe, il y fut érigé un oratoire en l\'honneur de l\'archange saint Michel en 708 qui lui donnera plus tard l\'appellation qu\'on lui connait aujourd\'hui.', 48.6358, -1.51194, 16, '../img/photo_mont.jpg', 1, 8, NULL, NULL, ''),
(8, 'Dinan', '', 48.4572, -2.03774, 16, '../img/photo_dinan.jpg', 1, NULL, NULL, NULL, ''),
(9, 'Carte postale', '', 48.2766, -3.55418, 16, '../img/carte_postale.png', 2, NULL, NULL, NULL, '../audio/crozon.m4a'),
(10, 'bon crepe', '', 48.2139, -4.53925, 12, '../img/bon.png', 1, 10, NULL, NULL, ''),
(11, 'crepe', '', 47.8555, -3.90607, 17, 'crepe.png', 2, NULL, NULL, NULL, '../audio/fin.m4a');

-- --------------------------------------------------------

--
-- Structure de la table `joueurs`
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
-- Déchargement des données de la table `joueurs`
--

INSERT INTO `joueurs` (`id`, `nom`, `prenom`, `pseudo`, `temps`, `etape`, `score`, `classement`) VALUES
(4, 'Girardin', 'Claire', 'Clairette', NULL, NULL, NULL, NULL),
(5, 'Girardin', 'Claire', 'Clairette', NULL, NULL, NULL, NULL),
(6, 'Argento', 'Lisa', 'lisaaaaa', NULL, NULL, NULL, NULL),
(7, 'ARGENTO', 'Jean-Philippe', 'JP', NULL, NULL, NULL, NULL),
(8, 'Argento', 'Lisa', 'efr', NULL, NULL, NULL, NULL),
(9, 'Argento', 'Lisa', 'efr', NULL, NULL, NULL, NULL),
(10, 'Argento', 'Lisa', 'efr', NULL, NULL, NULL, NULL),
(11, 'Argento', 'Lisa', 'efr', NULL, NULL, NULL, NULL),
(19, 'Gir', 'Claire', 'clairette', NULL, NULL, NULL, NULL),
(20, 'Gir', 'Claire', 'clairette', NULL, NULL, NULL, NULL),
(21, 'Gir', 'Claire', 'clairette', NULL, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `jeu`
--
ALTER TABLE `jeu`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `joueurs`
--
ALTER TABLE `joueurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `jeu`
--
ALTER TABLE `jeu`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
