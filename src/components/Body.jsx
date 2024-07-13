import Card from './Card.jsx';
import Link from './Link.jsx';
import Time from './Time.jsx';

import rockPaperScissors from '../assets/rock-paper-scissors.png';
import ticTacToe1p from '../assets/tic-tac-toe1p.png';
import ticTacToe2p from '../assets/tic-tac-toe2p.png';
import connect4 from '../assets/connect4.png';
import wordle from '../assets/wordle.png';
import slidePuzzle from '../assets/slide-puzzle.png';
import checkers from '../assets/checkers.png';
import pokemon from '../assets/pokemon.png';

let rockPaperScissorsDesc = "Play Rock Paper Scissors!";
let ticTacToe1pDesc = "Play Tic Tac Toe against the computer"
let ticTacToe2pDesc = "Play Tic Tac Toe against your friend"
let connect4Desc = "Play Connect4 against your friend"
let wordleDesc = "Play Wordle infinitely many times"
let slidePuzzleDesc = "Play Slide Puzzles where you can choose the NxN dimensions of the board, and order the numbers left to right and top to bottom to win!"
let checkersDesc = "Play the classic checkers! (No forced jumps)."
let pokemonDesc = "Lookup Pokemon Stats using the official API!"
import {useState} from "react";

let test = [1];
function Body(props) {

    switch(props.page) {
        case 0:

            return( 
                <div className="body-content" style={{margin:"0 auto"}}>
                <Card img={pokemon} name = "Pokemon Stats Lookup" link="https://justclaner.github.io/api/pokemon.html" desc={pokemonDesc}></Card>
                <Card img={checkers} name = "Checkers" link="https://justclaner.github.io/checkers/" desc={checkersDesc}></Card>
                <Card img={slidePuzzle} name="Slide Puzzle" link="https://justclaner.github.io/games/slidePuzzle.html" desc={slidePuzzleDesc}></Card>
                <Card img={wordle} name="Wordle" link="https://justclaner.github.io/games/wordle.html" desc={wordleDesc}></Card>
                <Card img={connect4} name="Connect 4" link="https://justclaner.github.io/games/connect4.html" desc={connect4Desc}></Card>
                <Card img={ticTacToe1p} name="Tic Tac Toe (1 Player)" link="https://justclaner.github.io/games/tic-tac-toe1p.html" desc={ticTacToe1pDesc}></Card>
                <Card img={ticTacToe2p} name="Tic Tac Toe (2 Player)" link="https://justclaner.github.io/games/tic-tac-toe2p.html" desc={ticTacToe2pDesc}></Card>
                <Card img={rockPaperScissors} name="Rock Paper Scissors" link="https://justclaner.github.io/games/rock-paper-scissors.html" desc={rockPaperScissorsDesc}></Card>
              
               
                </div>
            );

        case 1:
            return( 
                
                   <div className="timeline-content">
                    <h1>Before/During High School</h1>
                    <Time date="2019" text="First picked up HTML from general interest in web-browser idle/incermental games"></Time>
                    <Time date="Aug 2022" text="Created various math problem generators using HTML/CSS/JS"></Time>
                    <Time date="Sep-Oct 2022" text="Learned basic Java for Robotics; Variables, Loops, Objects, Classes, Inheritance"></Time>
                    <Time date="Jul 2023" text="Coded more simple math-based HTML projects"></Time>
                    <Time date="10/7/2023" text="Started Robotics FTC github repo; implemented my first online public-source Java library called FtcRobotController"></Time>
                    <Time date="Nov 2023" text="Learned to implement Java library called VisionPortal for Robotics camera detection"></Time>
                    <Time date="Jan 2023" text="Learned intermediate Java and deeper object-oriented programming concepts; ArrayList, HashMaps, HashSets, BigInteger"></Time>
                    <Time date="Feb 2023" text="Learned basic algorithms and data structures; Linked Lists, Binary Search Trees; Started on LeetCode"></Time>
                    <Time date="Mar-Apr 2023" text="Learned to implement Java library called RoadRunner for Robotics trajectory building for Autonomous movement"></Time>
                    <Time date="4/21/2024" text="Started on a AP Physics 1 Online Calculator for all scenarios; Unfinished, only coded calculators 1d/2d kinematics and basic force equations"></Time>

                    <h1>Summer Before College</h1>
                    <Time date="6/17/2024" text="Learned basic MySQL; Practiced simple algorithms including subqueries on LeetCode and a local server"></Time>
                    <Time date="6/18/2024" text="Learned basic PHP and started coding simple games in HTML/CSS/JS; Learned to handle events and element styling with JS; Created a local emailer using PHPMailer"></Time>
                    <Time date="6/25/2024" text="Learned basic React; Created this website; useState hook, rendering lists, conditional rendering, props"></Time>
                    <Time date="6/26/2024" text="Learned C# syntax and basic Unity interface"></Time>
                    <Time date="6/28/2024" text="Learned to implement a dynamic scene changer in unity"></Time>
                    <Time date="6/29/2024" text="Learned Unity animations, transitions, and tilesets"></Time>
                    <Time date="6/30/2024" text="Learned PlayerPrefs; stored y-value of player upon scene change"></Time>
                    <Time date="7/3/2024" text="Completed levels 2 and 3; added generic tilemaps (i.e. 1x2 floor tile)"></Time>
                    <Time date="7/4/2024" text="Learned bucket sort; started on NeetCode roadmap"></Time>
                    <h2>Checkers Game</h2>
                    <Time date="7/6/2024" text="Started on checkers game in React; learned to pass data from children to parent by passing down a useState function as props of the child"></Time>
                    <Time date="7/7/2024" text="Coded basic movement and rules for checkers pieces (non-king pieces)"></Time>
                    <Time date="7/8/2024" text="Added king pieces in checkers; improved code readability; added basic win/draw conditions; made source elements become invisible when being dragged"></Time>
                    <Time date="7/9/2024" text="Added win condition for making opposing side have no possible moves and three-fold repetition draw"></Time>
                    <br/>
                    <Time date="7/10/2024" text="Started learning on roadmap.sh"></Time>
                    </div>
                   
               
             );
        case 2:
             const aboutMe = {
                display: "block",
                margin: "0 auto"
             }
   
            return (
                 <div className="body-content" style={aboutMe} >
                    <h1>Justin Zou</h1>
                    <img src="https://via.placeholder.com/250" />
                    <div className="links">

                        <Link label="Gmail:" link="mailto:justclaner@gmail.com" text="justclaner@gmail.com"></Link>
                        <Link label="LinkedIn:" link="https://www.linkedin.com/in/justin-zou-ab0a922a4/" text="https://www.linkedin.com/in/justin-zou-ab0a922a4/"></Link>
                        {/* <Link label="LinkedIn:" link="https://www.linkedin.com/in/justin-zou-ab0a922a4/" text="https://www.linkedin.com/in/justin-zou-ab0a922a4/"></Link> */}
 
                    </div>
                    <h2>Software Engineer</h2>

                    <div className="summary">
                    <p>
                        I strive to connect with others and help out those in need. I thrive in both cooperative and independent environments. I am versatile and always eager to learn more. I love the coding part of software development. It’s a language that works only when it’s clear and well-defined. I really like creating something out of nothing and seeing progress being made. Using technology and communication, I want to make the world more accessible through engineering and solve global issues.
                    </p>

                    <p>I am a rising freshman at UPenn (class of 2028) majoring in Computer Science. I have always been fascinated by computers and technology since I was young. I am interested in mainly web development or game development. I also spend free time learning algorithms and solving challenging problems on leetcode, edabit, and TopSWE.  </p>
                    </div>

                 </div> 
                );
        case 3:

            return( 
                <>
                    <p className="body-content" style={{margin: "0 auto"}}>This site was made using HTML, CSS, JavaScript, and React Library. I made this portfolio project as 
                        an exercise to learn React for the first time. At first, I felt like React was overcomplicating a lot of concepts, but I soon realized its effectiveness
                        in dynamic programming. It's as if I've discovered a for loop for writing complex containers filled with many elements and various styles. This is just one
                        step in my journey to learn more concepts and have better practice in both front-end in back-end development.
                    </p>
        
                
                </>
           

             )
    }
}

export default Body;