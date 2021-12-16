import { Questions } from "../helpers/Questions";
import React, { useState, useContext } from "react";
import {GameStateContext} from "../helpers/Contexts";

function Quiz() {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ optionChosen, setOptionChosen ] = useState("")

    const { score, setScore, gameState, setGameState } = useContext(GameStateContext)

    const chooseOption = (option) => {
        setOptionChosen(option)
    }

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }



        setCurrentQuestion(currentQuestion + 1)
    }

    return (
        <div className="container flex flex-col justify-center mx-auto max-w-2xl px-10 py-32 bg-gray-100 rounded-md shadow-md">

            <h1 className="text-center tracking-wide font-extrabold my-3">{Questions[currentQuestion].prompt}</h1>
            <div className="mx-auto px-4 py-4 flex flex-col">
                <button
                    onClick={() => {chooseOption('optionA')}}
                    className="bg-yellow-300 hover:bg-yellow-200 px-4 py-3 rounded-lg shadow-md my-2 w-80">
                    {Questions[currentQuestion].optionA}
                </button>
                <button
                    onClick={() => {chooseOption('optionB')}}
                    className="bg-yellow-300 hover:bg-yellow-200 px-4 py-3 rounded-lg shadow-md my-2 w-80">
                    {Questions[currentQuestion].optionB}
                </button>
                <button
                    onClick={() => {chooseOption('optionC')}}
                    className="bg-yellow-300 hover:bg-yellow-200 px-4 py-3 rounded-lg shadow-md my-2 w-80">
                    {Questions[currentQuestion].optionC}
                </button>
                <button
                    onClick={() => {chooseOption('optionD')}}
                    className="bg-yellow-300 hover:bg-yellow-200 px-4 py-3 rounded-lg shadow-md my-2 w-80">
                    {Questions[currentQuestion].optionD}
                </button>
            </div>
            <div className="mx-auto mt-3">
                {currentQuestion === Questions.length - 1 ? (
                    <button
                        onClick={() => setGameState("finished")}
                        className="bg-black hover:bg-gray-700 text-white hover:bg-blue-600 px-2 py-3 w-64 rounded-lg shadow-md">
                        Finish Quiz
                    </button>
                ) : (
                    <button
                        onClick={nextQuestion}
                        className="bg-black hover:bg-gray-700 text-white hover:bg-blue-600 px-2 py-3 w-64 rounded-lg shadow-md">
                        Next
                    </button>
                )}

            </div>

        </div>
    )
}

export default Quiz;
