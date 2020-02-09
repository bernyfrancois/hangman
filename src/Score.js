import React from "react";
import PropTypes from "prop-types"

const Score = ({playerName, remainAttemps, score, wordLength, won}) => (
    <div>
        <p>
            <span className={"player__name"}>Player : {playerName}</span><br/>
            <span className={"player__tours"}>Essaies restants : {remainAttemps}</span><br/>
            <span className={"player__score"}>Score : `{score} / {wordLength}`</span>
        </p>
        <p>
            {won && <span>You won !!!</span>}
            {(won === false && remainAttemps <= 0) && <span>You loose</span>}
        </p>
    </div>
)

Score.propTypes = {
    playerName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    remainAttemps: PropTypes.number.isRequired,
    wordLength: PropTypes.number.isRequired,
    won: PropTypes.bool.isRequired
}

export default Score