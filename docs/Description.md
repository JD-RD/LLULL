- [LLULL](#llull)
  - [Performance](#performance)
    - [En bref](#en-bref)
  - [Ramon Llull](#ramon-llull)
  - [Concept](#concept)
  - [Technologie](#technologie)
  - [Auteurs](#auteurs)


# LLULL
Projet proposé au festival Mutek (Montréal, 2019) dédié à l'incomparable [Ramon Llull](https://en.wikipedia.org/wiki/Ramon_Llull), philosophe et mystique catalan né à Majorque au XIIe siècle

## Performance
* Le présent projet propose une performance audiovisuelle d'une durée d'environ 30 minutes où un nombre limité de paramètres soigneusement calibrés sont manipulés afin de générer une oeuvre en 9 parties (voir section [Concept](#concept)). L'esthétique minimale et expérimentale se veut également accessible et transcendante. Musicalement, l'oeuvre est inspirée des courants **minimal techno, ambiant et dub**
* Dans le but de s'aligner avec la philosophie "Open Source", les manipulations effectuées sont captées et projetées afin de donner aux spectateurs la chance de percevoir l'effet des manipulations qui affectent à la fois les sons qu'ils entendent et les formes qu'ils voient

### En bref
* Musique synthétique et minimale (1 synthétiseur + 1 boîte à rythme) en direct
* Art génératif programmé (JavaScript) sur mesure et contrôlé en direct
  * [Description du volet visuel du projet (PDF)](/PDF/LLULL-visuals-v1.pdf)
* Contôle simultané du son et de l'image à partir d'un synthétiseur et d'une boîte à rythmes (via contrôle MIDI)
* Durée: 30 minutes

## Ramon Llull

>Encore aujourd'hui, Llull inspire un grand nombre de créateurs oeuvrants dans multiples domaines (arts visuels, musique, phylosophie, politique, etc.). Entres autres, les principes combinatoires et algorithmiques développés par Llull ont joués un rôle fondamental dans l'évolution de la pensé humaine. Par le fait même, l'oeuvre de Llull a certainement favorisé toutes sortes d'avancées technologiques qui ont menées à la révolution numérique dans laquelle nous vivons

## Concept
* "LLULL" est un voyage sensoriel (auditif et visuel) inspiré de l'escalier de la compréhension de Ramon Llull[*](https://monestiravellanes.wordpress.com/2009/01/30/lescala-de-lenteniment-llull-al-monestir-de-les-avellanes/). 
  >Selon Llull, l'homme doit utiliser son intelligence dans le but d'atteindre la "perfection" (c'est-à-dire Dieu), à partir du raisonnement. Llull considère cette quête comme une expérience mystique qui s'exprime à travers un haut niveau de conscience par le biais du raisonnement et de l'accumulation des connaissances
* La performance est divisée en 9 scènes
* Chacune des scènes contient une question différente qui invite le spectateur à "raisonner"

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
  >(EN) Digital artist and creative coding instructor. I own a MSc. and a passion for design in new technologies, their impact on our society and the way we can use them for a better change. He is very interested in Computational Thinking, and how to explain its underlying principles through simple and beautiful pieces of digital-based pixel-art to kids and adults.
* Jean-Denis Thériault
  >(FR) Programmeur informatique détenteur d’une Maitrise en psychologie cognitive, DJ, artisan radio (CHYZ, CKIA) et fondateur de « La Face B », Jean-Denis Thériault s’intéresse principalement aux liens qui relient l'humain, la technologie et la musique

  >(EN) Software developer, Master of cognitive psychology, DJ, radio producer (CHYZ and CKIA FM) and founder of La Face B, Jean-Denis Theriault is mainly interested in the links between humans, technologies and music