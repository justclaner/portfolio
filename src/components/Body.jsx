import { useState, useEffect } from "react";

import Card from "./Card.jsx";
import Link from "./Link.jsx";
import Time from "./Time.jsx";

import pfp from "../assets/Profile Picture.jpg";

import rockPaperScissors from "../assets/rock-paper-scissors.png";
import ticTacToe1p from "../assets/tic-tac-toe1p.png";
import ticTacToe2p from "../assets/tic-tac-toe2p.png";
import connect4 from "../assets/connect4.png";
import wordle from "../assets/wordle.png";
import slidePuzzle from "../assets/slide-puzzle.png";
import checkers from "../assets/checkers.png";
import pokemon from "../assets/pokemon.png";
import gallery from "../assets/Image Gallery.png";
import toDo from "../assets/to-do-app.png";
import flashcards from "../assets/flashcards-app.png";

const rockPaperScissorsDesc = "Play Rock Paper Scissors!";
const ticTacToe1pDesc = "Play Tic Tac Toe against the computer";
const ticTacToe2pDesc = "Play Tic Tac Toe against your friend";
const connect4Desc = "Play Connect4 against your friend";
const wordleDesc = "Play Wordle infinitely many times";
const slidePuzzleDesc =
  "Play Slide Puzzles where you can choose the NxN dimensions of the board, and order the numbers left to right and top to bottom to win!";
const checkersDesc = "Play the classic checkers! (No forced jumps).";
const pokemonDesc = "Lookup Pokemon Stats using the official API!";
const galleryDesc = "Upload your images and create a gallery!";
const toDoDesc =
  "Organize your schedule with a to-do list app! (Data will not be saved).";
const flashcardsDesc =
  "Create flashcard sets to study from! Data will be stored in a database forever.";

function Body(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  switch (props.page) {
    case 0:
      const aboutMe = {
        display: "block",
        margin: "0 auto",
      };

      return (
        loaded && (
          <div className="body-content" style={aboutMe}>
            <h1>Justin Zou</h1>
            {/* <img src="https://via.placeholder.com/250" /> */}
            <img src={pfp} className="profile-picture" />
            <div className="links">
              <Link
                label="Email me:"
                link="mailto:justclaner@gmail.com"
                text="justclaner@gmail.com"
              ></Link>
              <Link
                label="Connect with me:"
                link="https://www.linkedin.com/in/justin-z-ab0a922a4/"
                text="linkedin.com/in/justin-zou-ab0a922a4/"
              ></Link>
              <Link
                label="Check out my other repositories:"
                link="https://github.com/justclaner"
                text="github.com/justclaner"
              ></Link>
              {/* <Link label="LinkedIn:" link="https://www.linkedin.com/in/justin-zou-ab0a922a4/" text="https://www.linkedin.com/in/justin-zou-ab0a922a4/"></Link> */}
            </div>
            <h2>Software Engineer</h2>

            <div className="summary">
              <p>
                I strive to connect with others and help out those in need. I
                thrive in fast-paced environments where problem-solving is often
                done. I am versatile, self-motivated, and enthusiastic to learn
                more. I love working on both the frontend and backend of
                software development. I really like creating something out of
                nothing and seeing progress being made. Using technology and
                software integration, I want to take initiative to make the
                world more accessible through engineering and solve global
                issues.
              </p>

              <p>
                I am a freshman at UPenn (class of 2028) majoring in Computer
                Science. I have always been fascinated by computers and
                technology since I was young. I am interested in mainly web
                development or game development. I also spend free time learning
                algorithms and solving challenging problems on leetcode, edabit,
                and TopSWE.{" "}
              </p>
            </div>
          </div>
        )
      );

    case 1:
      const projectStyle = {
        margin: "0 auto",
        backgroundColor: "#191922",
        borderRadius: "10px",
      };
      return (
        loaded && (
          <>
            <h3>Click any project to get started!</h3> <br />
            <div className="body-content" style={projectStyle}>
              <Card
                img={flashcards}
                name="Flashcards App"
                link="https://flashcards-seven-nu.vercel.app/"
                desc={flashcardsDesc}
              />
              <Card
                img={toDo}
                name="To-do App"
                link="https://to-do-client-teal.vercel.app/"
                desc={toDoDesc}
              />
              <Card
                img={gallery}
                name="Image Gallery Scroller"
                link="https://justclaner.github.io/image-gallery/"
                desc={galleryDesc}
              ></Card>
              <Card
                img={pokemon}
                name="Pokemon Stats Lookup"
                link="https://justclaner.github.io/api/pokemon.html"
                desc={pokemonDesc}
              />
              <Card
                img={checkers}
                name="Checkers"
                link="https://justclaner.github.io/checkers/"
                desc={checkersDesc}
              ></Card>
              <Card
                img={slidePuzzle}
                name="Slide Puzzle"
                link="https://justclaner.github.io/games/slidePuzzle.html"
                desc={slidePuzzleDesc}
              />
              <Card
                img={wordle}
                name="Wordle"
                link="https://justclaner.github.io/games/wordle.html"
                desc={wordleDesc}
              />
              <Card
                img={connect4}
                name="Connect 4"
                link="https://justclaner.github.io/games/connect4.html"
                desc={connect4Desc}
              />
              <Card
                img={ticTacToe1p}
                name="Tic Tac Toe (1 Player)"
                link="https://justclaner.github.io/games/tic-tac-toe1p.html"
                desc={ticTacToe1pDesc}
              />
              <Card
                img={ticTacToe2p}
                name="Tic Tac Toe (2 Player)"
                link="https://justclaner.github.io/games/tic-tac-toe2p.html"
                desc={ticTacToe2pDesc}
              />
              <Card
                img={rockPaperScissors}
                name="Rock Paper Scissors"
                link="https://justclaner.github.io/games/rock-paper-scissors.html"
                desc={rockPaperScissorsDesc}
              />
            </div>
          </>
        )
      );
    case 2:
      return (
        loaded && (
          <div className="timeline-content">
            <div className="timeline-section">
              <div style={{ textAlign: "center" }}>
                <h1>Before/During High School</h1>
              </div>
              <Time
                date="2019"
                text="First picked up HTML from general interest in web-browser idle/incermental games"
              />
              <Time
                date="Aug 2022"
                text="Created various math problem generators using HTML/CSS/JS"
              />
              <Time
                date="Sep-Oct 2022"
                text="Learned basic Java for Robotics; Variables, Loops, Objects, Classes, Inheritance"
              />
              <Time
                date="Jul 2023"
                text="Coded more simple math-based HTML projects"
              />
              <Time
                date="10/7/2023"
                text="Started Robotics FTC github repo; implemented my first online public-source Java library called FtcRobotController"
              />
              <Time
                date="Nov 2023"
                text="Learned to implement Java library called VisionPortal for Robotics camera detection"
              />
              <Time
                date="Jan 2023"
                text="Learned intermediate Java and deeper object-oriented programming concepts; ArrayList, HashMaps, HashSets, BigInteger"
              />
              <Time
                date="Feb 2023"
                text="Learned basic algorithms and data structures; Linked Lists, Binary Search Trees; Started on LeetCode"
              />
              <Time
                date="Mar-Apr 2023"
                text="Learned to implement Java library called RoadRunner for Robotics trajectory building for Autonomous movement"
              />
              <Time
                date="4/21/2024"
                text="Started on a AP Physics 1 Online Calculator for all scenarios; Unfinished, only coded calculators 1d/2d kinematics and basic force equations"
              />
            </div>

            <div className="timeline-section">
              <div style={{ textAlign: "center" }}>
                <h1>Summer Before UPenn</h1>
              </div>
              <Time
                date="6/17/2024"
                text="Learned basic MySQL; Practiced simple agorithms including subqueries on LeetCode and a local server"
              />
              <Time
                date="6/18/2024"
                text="Learned basic PHP and started coding simple games in HTML/CSS/JS; Learned to handle events and element styling with JS; Created a local emailer using PHPMailer"
              />
              <Time
                date="6/25/2024"
                text="Learned basic React; Created this website; useState hook, rendering lists, conditional rendering, props"
              />
              <Time
                date="6/26/2024"
                text="Learned C# syntax and basic Unity interface"
              />
              <Time
                date="6/28/2024"
                text="Learned to implement a dynamic scene changer in unity"
              />
              <Time
                date="6/29/2024"
                text="Learned Unity animations, transitions, and tilesets"
              />
              <Time
                date="6/30/2024"
                text="Learned PlayerPrefs; stored y-value of player upon scene change"
              />
              <Time
                date="7/3/2024"
                text="Coded three levels; added generic tilemaps (i.e. 1x2 floor tile)"
              />
              <Time
                date="7/4/2024"
                text="Learned bucket sort; started on NeetCode roadmap"
              />
              <h2>Checkers Game</h2>
              <Time
                date="7/6/2024"
                text="Started on checkers game in React; learned to pass data from children to parent by passing down a useState function as props of the child"
              />
              <Time
                date="7/7/2024"
                text="Coded basic movement and rules for checkers pieces (non-king pieces)"
              />
              <Time
                date="7/8/2024"
                text="Added king pieces in checkers; improved code readability; added basic win/draw conditions; made source elements become invisible when being dragged"
              />
              <Time
                date="7/9/2024"
                text="Added win condition for making opposing side have no possible moves and three-fold repetition draw"
              />
              <br />
              <Time date="7/10/2024" text="Started learning on roadmap.sh" />
              <Time date="7/12/2024" text="Learned javascript fetch() api" />
              <Time
                date="7/13/2024"
                text="Created a Pokemon Stats lookup with javascript fetch()"
              />
              <Time
                date="7/14/2024"
                text="Learned FileReader and Image Web APIs"
              ></Time>
              <Time
                date="7/15/2024-7/20/2024"
                text="Learned to use React useEffect, useRef, and useContext hooks effectively and avoid common antipatterns"
              ></Time>
              <Time
                date="August"
                text="Learned MERN stack with two projects (to-do app and flashcards app) and how to deploy them to Vercel"
              ></Time>
            </div>
          </div>
        )
      );

    case 3:
      const aboutSite = {
        margin: "0 auto",
        width: "50%",
      };
      return (
        loaded && (
          <>
            <p className="body-content" style={aboutSite}>
              This site was made using HTML, CSS, JavaScript, and React Library.
              I made this portfolio project as an exercise to learn React for
              the first time. At first, I felt like React was overcomplicating a
              lot of concepts, but I soon realized its effectiveness in dynamic
              programming. It's as if I've discovered a for loop for writing
              complex containers filled with many elements and various styles.
              This is just one step in my journey to learn more concepts and
              have better practice in both front-end in back-end development.
            </p>
          </>
        )
      );
  }
}

export default Body;
