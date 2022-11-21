-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : lun. 21 nov. 2022 à 21:51
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
-- Base de données : `bddEscapeGame`
--

-- --------------------------------------------------------

--
-- Structure de la table `jeu`
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
-- Déchargement des données de la table `jeu`
--

INSERT INTO `jeu` (`id`, `nomobjet`, `indice`, `latitute`, `longitude`, `minzoom`, `icone`, `type`, `idbloque`) VALUES
(1, 'veloscasses', 'Ohhh non ! Nos vélos sont cassés ...\r\nMais il me semble que les ENSGagés ont mis à disposition des outils qui pourraient nous servir ;) ', 48.8415, 2.58786, 18, '../img/casses.png', 4, 0);

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
(6, 'Argento', 'Lisa', 'lisaaaaa', NULL, NULL, NULL, NULL);

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
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
