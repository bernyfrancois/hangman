import React from "react";
import PropTypes from "prop-types"
import "./Input.css"

const Input = ({letter, matchState, onClick}) => <span className={`keybord__letter ${matchState}`}
                                                       onClick={onClick}>{letter}</span>;

Input.propTypes = {
    letter: PropTypes.string.isRequired,
    matchState: PropTypes.oneOf([
        'matched',
        'unMatched'
    ]).isRequired,
    onClick: PropTypes.func.isRequired
}
export default Input