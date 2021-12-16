import React, { useState } from 'react';

import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { GameStateContext } from './helpers/Contexts';
import Endscreen from "./components/Endscreen";

function App() {
    const [gameState, setGameState ] = useState('menu')
    const [userName, setUserName] = useState("")
    const [ score, setScore ] = useState(0)

    return (
        <div className="container-fluid mx-auto ">
            <h2 className="text-center text-2xl  my-10 tracking-widest font-extrabold">Bruins Quiz</h2>

            <div className="container mx-auto place-content-center ">

                <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
                    {gameState === "menu" && <Menu /> }
                    {gameState === "playing" && <Quiz />}
                    {gameState === "finished" && <Endscreen />}

                </GameStateContext.Provider>
            </div>

        </div>
    );
}

export default App;
