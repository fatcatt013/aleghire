import React, {useState} from 'react';

const Religion = () => {

    const [chosen, setChosen] = useState(false);
    const [side, setSide] = useState(false);

    const choose = (chosenSide) => {
        setChosen(true);
        setSide(chosenSide);
    }

    if (!chosen) {
        return (
            <div>
                <h1>RELIGION</h1>
                <button onClick={() => {choose("Satan")}}>Choose SATAN</button>
                <button onClick={() => {choose("God")}}>Choose GOD</button>
            </div>
        )
    } 
    else {
        return (
            <div>
                <h1>RELIGION</h1>
                <div>
                    <span>Your chosen side is {side}!</span>
                </div>
            </div>
        )
    }
}

export default Religion;