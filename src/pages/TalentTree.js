import React, {useState} from 'react';

const TalentTree = () => {
    const [talentPoints, setTalentPoints] = useState(3);

    return (
        <div>
            <h1>TALENT TREE</h1>
            <div>
                <h4>Talent points: {talentPoints}</h4>
                <div>
                    <h3>Combat</h3>
                    <ul>
                        <li>Talent 1</li>
                        <li>Talent 2</li>
                        <li>Talent 3</li>
                    </ul>
                </div>
                <div>
                    <h3>Diplomacy</h3>
                    <ul>
                        <li>Talent 1</li>
                        <li>Talent 2</li>
                        <li>Talent 3</li>
                    </ul>
                </div>
                <div>
                    <h3>Religion</h3>
                    <ul>
                        <li>Talent 1</li>
                        <li>Talent 2</li>
                        <li>Talent 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TalentTree;