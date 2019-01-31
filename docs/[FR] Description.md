- [LLULL](#llull)
  - [Performance](#performance)
    - [En bref](#en-bref)
  - [Ramon Llull](#ramon-llull)
  - [Concept](#concept)
  - [Technologie](#technologie)
  - [Auteurs](#auteurs)


# LLULL
Projet proposé au festival Mutek (Montréal, 2019) dédié à [Ramon Llull](https://en.wikipedia.org/wiki/Ramon_Llull), philosophe et mystique catalan né à Majorque au XIIe siècle

## Performance
* Le présent projet propose une performance audiovisuelle d'une durée d'environ 30 minutes où un nombre limité de paramètres soigneusement calibrés sont manipulés afin de générer une oeuvre en 9 parties (voir section [Concept](#concept)). L'esthétique minimale et expérimentale se veut également accessible et transcendante. Musicalement, l'oeuvre est inspirée des courants **minimal techno, ambiant et dub**
* Les auteurs cherchent à s'aligner avec la philosophie "Open Source" de transparence et de partage de connaissances. C’est pourquoi les manipulations effectuées sont captées et projetées afin de donner aux spectateurs la chance de percevoir l'effet des interventions manuelles qui affectent à la fois les sons qu'ils entendent et les formes qu'ils voient. Cette approche sous-estimée par plusieurs artistes représente un des aspects innovateurs du présent projet.

### En bref
* Musique synthétique et minimale (1 synthétiseur + 1 boîte à rythme) en direct
* **Art génératif** programmé (JavaScript) sur mesure et **contrôlé en direct**
  * [Description du volet visuel du projet (PDF)](/PDF/LLULL-visuals-v1.pdf)
* **Contôle simultané** du son et de l'image à partir d'un synthétiseur et d'une boîte à rythmes (via contrôle MIDI)
* Durée: 30 minutes

## Ramon Llull

>Encore aujourd'hui, Llull inspire un grand nombre de créateurs oeuvrant dans multiples domaines (arts visuels, musique, philosophie, politique, etc.). Entres autres, les principes combinatoires et algorithmiques développés par Llull ont joués un rôle fondamental dans l'évolution de la pensé humaine. Par le fait même, l'oeuvre de Llull a certainement favorisé toutes sortes d'avancées technologiques qui ont mené à la révolution numérique et artistique dans laquelle nous vivons

## Concept
* Llull suggère l’utilisation du raisonnement afin d’atteindre la "perfection"
* Cette quête est symbolisée par l’escalier de la connaissance à 9 niveaux
* Les auteurs proposent une expérience musicale à travers ces différentes étapes
* Chacune des scènes contient une question différente qui invite le spectateur à raisonner

## Technologie
* Audio + Contrôle
  * Moog Sub Phatty
  * Roland TR-8
  * [WebMidi.js](http://djipco.github.io/webmidi/latest/classes/WebMidi.html)
  * [Contrôleurs midi](https://d16rm6ap8dyyo6.cloudfront.net/product_images/images/000/001/491/medium/Black_34_zoomed.jpg?1398722121)
* Visuel
  * [P5.js](https://p5js.org/examples/simulate-particle-system.html)
  * Caméras
  * Projecteurs

## Auteurs
* Bernat Ferragut
  >Artiste numérique et instructeur de code créatif, détenteur d’une Maîtrise en Technologies Propres, passionné par la conjonction entre l’art et la technologie. Après avoir travaillé professionnellement dans les domaines des effets spéciaux et de la conception informatique pendant plus de dix ans, il utilise maintenant les origines de la pensée informatique comme un courant de découverte de soi quotidienne. Les explorations de Bernat mélangent le design, l’histoire, la philosophie et la musique dans le but de trouver la bonne question

* Jean-Denis Thériault
  >Instruceur de programmation, détenteur d’une Maitrise en psychologie cognitive, DJ, artisan radio (CHYZ, CKIA) et fondateur de la web radio « La Face B », Jean-Denis Thériault s’intéresse principalement aux liens qui sont tissés entre l'humain, la technologie et la musique