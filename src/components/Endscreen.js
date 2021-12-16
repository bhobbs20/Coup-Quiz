import React, { useState, useContext } from "react";
import {GameStateContext} from "../helpers/Contexts";
import { Questions } from '../helpers/Questions';

const Endscreen = () => {
    const { score, userName, setScore, gameState, setGameState } = useContext(GameStateContext)
    return (
        <div className="container flex flex-col justify-center mx-auto max-w-2xl px-10 py-32 bg-yellow-300 rounded-md shadow-md">
           <h1 className="text-center tracking-wide font-extrabold my-3">{userName}'s <span className="ml-8">Score: {score} / {Questions.length}</span></h1>
            <button onClick={() => {setGameState("menu")}} className="bg-black hover:bg-gray-700 text-white px-4 py-3 rounded-lg shadow-md w-56 mt-10 place-self-center">Restart Quiz</button>
        </div>
    )

}

export default Endscreen;
