import React from 'react';
import './App.css'
import Score from "./Score";
import Letter from "./Letter";
import Input from "./Input";

const WORDS = ["CONSTITUTION", "SOLEIL", "BASKET", "LUNE", "MANGAS", "TEST", "MAISON", "ORDINATEUR", "ESPACE", "ROUTE"]
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: "Berny",
            keybord: LETTERS,
            word: " ",
            matchedLetters: [],
            remainAttemps: 7,
            score: 0,
            won: false,
            gameStarted: false
        }
    }

    startGame = () => {
        this.setState({
            word: this.getWord(),
            matchedLetters: [],
            remainAttemps: 7,
            score: 0,
            loose: false,
            won: false,
            gameStarted: true,
        })
    };

    calculScore(word, letter) {
        let result = 0;
        word.forEach(element => {
            if (element === letter) {
                result++
            }
        });

        return result
    }

    // arrow func for binding this
    handleLetterInput = (letter) => {
        let {word, matchedLetters, remainAttemps, score, won, gameStarted} = this.state;
        if (matchedLetters.includes(letter)) {
            alert("Vous avez déjà trouvé cette lettre")
        } else {
            if (word.includes(letter)) {
                matchedLetters.push(letter);
                score += this.calculScore(word, letter);
                if (score === word.length) {
                    won = true;
                    gameStarted = false
                }
            } else {
                remainAttemps--;
                if (remainAttemps <= 0) {

                }
            }
        }
        this.setState({
            matchedLetters: matchedLetters,
            remainAttemps: remainAttemps,
            score: score,
            won: won,
            gameStarted: gameStarted
        })
    };

    getMatchedState = (letter, matchedReturn, unMatchedReturn) => {
        const {matchedLetters} = this.state;

        return matchedLetters.includes(letter) ? matchedReturn : unMatchedReturn
    };

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // arrow func for bind this
    getWord = () => {
        let randomId = this.getRandomInt(WORDS.length);
        let word = WORDS[randomId].split((""));
        return (word)
    };

    render() {
        const {playerName, keybord, word, remainAttemps, score, won, gameStarted} = this.state;
        return (
            <div className={"container"}>
                <h1>HANGMAN GAME</h1>
                <div className={"game__container"}>
                    <div className={"game__details"}>
                        <Score playerName={playerName} score={score} remainAttemps={remainAttemps} wordLength={word.length}
                               won={won}/>
                    </div>
                    <div className={"game__view"}>
                        <div className={"game__view__container"}>
                            <div className={"illustration"}>
                            </div>
                            <div className={"word"}>
                                {word === " " ? <span>Hello</span> : word.map((letter, id) =>
                                    <Letter key={id} letter={letter}
                                            feedback={this.getMatchedState(letter, "visible", "hidden")}/>)}

                            </div>
                            <hr/>
                            {gameStarted ? <div className={"keybord"}>
                                {keybord.map((letter, id) => (
                                    <Input key={id} letter={letter}
                                           matchState={this.getMatchedState(letter, "matched", "unMatched")}
                                           onClick={() => this.handleLetterInput(letter)}/>
                                ))}
                            </div> : <div className={"start__btn"}>
                                <button onClick={this.startGame}>Nouvelle partie</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
