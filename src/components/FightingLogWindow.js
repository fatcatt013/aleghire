import React, {useState} from 'react';

const FightingLogWindow = ({logs}) => {

    return (
        <div className='fighting-log-window'>
            <h4>COMBAT LOG</h4>
            {logs.map(log => {
                return <div key={Math.floor(Math.random() * 5000).toString()}>{log}</div>
            })}
        </div>
    )
}

export default FightingLogWindow;