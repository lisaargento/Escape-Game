-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : lun. 28 nov. 2022 à 16:08
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
  `indice` varchar(300) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `minzoom` int(2) NOT NULL,
  `icone` varchar(100) NOT NULL,
  `type` int(2) NOT NULL,
  `idSolution` int(2) DEFAULT NULL,
  `idDebloquant` int(5) DEFAULT NULL,
  `idLibere` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `jeu`
--

INSERT INTO `jeu` (`id`, `nomobjet`, `indice`, `latitude`, `longitude`, `minzoom`, `icone`, `type`, `idSolution`, `idDebloquant`, `idLibere`) VALUES
(1, 'Vélos cassés', 'Ohhh non ! Nos vélos sont cassés ...\r\nMais il me semble que les ENSGagés ont mis à disposition des outils qui pourraient nous servir ;) ', 48.8415, 2.58786, 18, '../img/velos_casses.png', 4, 2, 4, 5),
(2, 'Cadenas', 'Il me semble que code est la date de la création de l’Académie du Climat de Paris, Place Baudoyer, tu sais à côté de l’hôtel de ville de Paris?', 48.841, 2.58736, 20, '../img/cadenas.png', 3, 3, 2021, 4),
(3, 'Plaque', '', 48.8563, 2.35584, 17, '../img/plaque.jpg', 1, NULL, NULL, NULL),
(4, 'Boite à outils', '', 48.841, 2.58736, 15, '../img/outils.png', 2, NULL, NULL, NULL),
(5, 'Vélos réparés', '', 48.8415, 2.58786, 18, '../img/velos_repares.png', 2, NULL, NULL, NULL),
(6, 'Places', 'J’avais prévu qu’on aille voir la plus grande fierté des Montois avant de commencer le tour de Bretagne. \r\n(place bloqué par deux objets, les deux photos)', 48.2766, -3.55418, 16, '../img/place.png', 3, 7, 5712, 9),
(7, 'Mont Saint Michel', 'Tout est dans la photo!', 48.6358, -1.51194, 16, '../img/photo_mont.jpg', 1, 8, NULL, NULL),
(8, 'Dinan', '', 48.4572, -2.03774, 16, '../img/photo_dinan.jpg', 1, NULL, NULL, NULL),
(9, 'Carte postale', '', 48.2766, -3.55418, 16, '../img/carte_postale.png', 2, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `jeu`
--
ALTER TABLE `jeu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `jeu`
--
ALTER TABLE `jeu`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
