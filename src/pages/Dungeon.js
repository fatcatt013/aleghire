import React from 'react';

const Dungeon = ({startFight}) => {

    const chooseEnemy = (id) => {
        startFight({id: id, type: "mob"});
    }

    return (
        <div className="dungeon-container">
            <div className='dungeon-contents'>
                <div className='mobs-container'>
                    <h2>Mobs</h2>
                    <div className="mob-node">
                        <img src="https://i.pinimg.com/564x/a9/8f/af/a98fafefa07cbdf6fa4477f5bcce001e.jpg" alt=""/>
                        <div className="mob-info">
                            <div>Feral cat</div>
                            <div>Level: 1</div>
                            <button onClick={() => chooseEnemy("1")}>Fight</button>
                        </div>
                    </div>
                    <div className="mob-node">
                        <img src="https://i.pinimg.com/564x/63/75/01/6375015815db9fcd20b4bb20e2005c83.jpg" alt=""/>
                        <div className="mob-info">
                            <div>White wolf</div>
                            <div>Level: 3</div>
                            <button onClick={() => chooseEnemy("2")}>Fight</button>
                        </div>
                    </div>
                </div>
                <div className='bosses-container'>
                    <h2>Bosses</h2>
                    <div className='boss-node'>
                        <img src="https://i.pinimg.com/564x/63/75/01/6375015815db9fcd20b4bb20e2005c83.jpg" alt=""/>
                        <div className="mob-info">
                            <div>Name: Mob 1</div>
                            <div>Level: 1</div>
                            <button>Fight</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dungeon;