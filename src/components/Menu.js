import { useContext } from 'react';
import {GameStateContext} from "../helpers/Contexts";

function Menu() {
    const { setGameState, setUserName } = useContext(GameStateContext)
    return (
        <div className="container flex flex-col justify-center mx-auto max-w-2xl px-10 py-32 bg-yellow-300 rounded-md shadow-md">
            <input onChange={(event) => { setUserName(event.target.value)}}
                   type="text"
                   placeholder="Ex. John Smith"
                   className="form-input px-4 py-2 rounded-full mx-4"
            />
                <button onClick={() => {setGameState("playing")}} className="bg-black hover:bg-gray-700 text-white px-4 py-3 rounded-lg shadow-md w-56 mt-10 place-self-center">Start Quiz</button>
        </div>
    )
}

export default Menu;
