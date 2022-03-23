import React from 'react';

const FightingUser = ({img}) => {

    return (
        <div className='fighting-user'>
            <img src={img} alt="" className="fighting-user-image"/>
            <div className="fighting-user-hp">HP</div>
            <div className="fighting-user-name">Name</div>
        </div>
    )
}

export default FightingUser;