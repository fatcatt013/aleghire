import React from 'react';
import FightingUser from "../components/FightingUser";
import FightingLogWindow from "../components/FightingLogWindow";

const FightingChamber = () => {

    return (
        <div className='fighting-chamber'>
            <div className='fighting-chamber-contents'>
                <div className='fighting-display-container'>
                    <FightingUser img="https://i.pinimg.com/564x/32/39/31/323931a5a34194a72610c7e339961303.jpg"/>
                    <FightingLogWindow/>
                    <FightingUser img="https://i.pinimg.com/564x/cc/0c/98/cc0c981b743bea3a34b7688d3afe7628.jpg"/>
                </div>
                <div className='fighting-option-container'>
                    <div className='fighting-buttons'>
                        <button>Attack</button>
                        <button>Spells</button>
                        <button>Inventory</button>
                        <button>Surrender</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FightingChamber;