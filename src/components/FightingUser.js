import React from 'react';

const FightingUser = (props) => {

    return (
        <div className='fighting-user'>
            <img src={props.img} alt="" className="fighting-user-image"/>
            <div className="fighting-user-hp">{props.hp}</div>
            <div className="fighting-user-name">{props.name}</div>
        </div>
    )
}

export default FightingUser;