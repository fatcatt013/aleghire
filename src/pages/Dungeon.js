import React from 'react';

const Dungeon = ({startFight}) => {

    const chooseEnemy = (id) => {
        startFight({id: id, type: "mob"});
    }

    return (
        <div>
            <h1>DUNGEON</h1>
            <div>
                <h4>Monsters</h4>
                <ul>
                    <li onClick={() => chooseEnemy("1")}>Feral cat (Lv. 1)</li>
                    <li onClick={() => chooseEnemy("2")}>White wolf (Lv. 3)</li>
                    <li>Monster 3 (Lv. 5)</li>
                    <li>Monster 4 (Lv. 10)</li>
                    <li>Monster 5 (Lv. 15)</li>
                    <li>Monster 6 (Lv. 20)</li>
                </ul>
            </div>
        </div>
    )
}

export default Dungeon;