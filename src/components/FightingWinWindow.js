import React from 'react';

const FightingWinWindow = ({winner, stopFight}) => {

    return (
        <div className="fighting-chamber">
            <div className='win-window'>
                <h3>{winner + " has won!"}</h3>
                <h4>Rewards</h4>
                <button onClick={() => stopFight(false)}>Continue</button>
            </div>
        </div>
    )
}

export default FightingWinWindow;