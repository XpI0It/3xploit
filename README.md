![CleanShot 2022-11-17 at 03 18 16](https://user-images.githubusercontent.com/71259399/202393222-8370747d-17ba-4e1a-a072-225b055222c5.gif)


<br />
<div align="center">
  
   <a href="https://exploitt.herokuapp.com">Demo</a> . <a href="https://dev.to/saminarp/building-a-cybersecurity-game-with-threejs-inspired-by-googles-interland-36k6">Blog</a>
</div>


# Overview 📖 

> Exploit is initially designed and built for college course work (PRJ 666), but is open source and can be used by anyone who wants to learn more about cybersecurity. 

Exploit is a educational cybersecurity game that is primarily built with [ThreeJS](https://threejs.org/) and [ExpressJS](https://expressjs.com/) using Handlebars. 

This purpose of this game is to allow people to learn about basic cybersecurity in a fun and engaging way. This is an educational multiple choice questions 
game that allows people to have fun while they use their judgement to answer the questions.
The game describes a fictional city called Cursor City. Users are expected to complete each cybersecurity module to save the city from cyber criminals. 

The concept of the game is a 3D robot jumping over buildings after each question displayed has been answered correctly. The game is designed to be a learning tool for cybersecurity and is meant to be played by people who have little to no experience in cybersecurity.


## Features 📋 🎉

* 3D robot jumping over buildings after each question is answered correctly
* Player gets 3 life span to answer all the questions correctly before the game ends
* If the player answers 3 questions incorrectly, the game ends and robot does a failing animation.
* If the player answers all the questions correctly, the game ends and robot does a winning animation.
* Player can choose to play the game again after the game ends.
* The environment is designed to be a city with buildings and a skybox. 
* Each game module (`Ransomware`, `Session Hijacking`, `Bruteforce Attack`, `Trojan Horse`) has a different environment. Colors are unique to each module.
* Each game module has a different set of questions.
* Player can create an account and login to save their progress. 
* All the scores of the players are saved in a database and can be viewed in the `leaderboard`.

## Local Setup Instructions ⚙️

1. Clone the repository to your local machine and navigate to the directory. 
```sh
git clone https://github.com/XpI0It/3xploit && cd 3xploit 
```
2. Install the dependencies. 
```sh
npm install 
```
3. Start the server on port 8080.
```sh
npm run dev
```

### Hierarchical Structure of the Project 📁 

The following image is a hierarchical structure of the project and shows a brief description of each directory. 
<!--  folder hierarchy pic here -->
## Game Modules 🎮

The game has 4 modules. Each module has a different set of questions and a different environment. Hovering over the module will display a brief description of the module and display `Play Now` button to start the game.

<!-- modules pic here -->

Clicking on the `Play Now` button will display an information page about the module and at the very bottom of the page, there is a `Play` button to start the game. 

<!-- button pic here -->
