import React, {useState} from 'react';

const Arena = () => {

    const [choosing, setChoosing] = useState(true);
    const [preview, setPreview] = useState(false);
    const [fighting, setFighting] = useState(false);

    if (fighting) {
        return (
            <div>
                <h1>ARENA</h1>
                <div>
                    <span>
                        fighting in progress..
                    </span>
                </div>
            </div>
        )

    } else if (preview) {
        return (
            <div>
                <h1>ARENA</h1>
                <div>
                    <div>
                        YOU
                    </div>
                    <div>
                        OPPONENT
                    </div>
                    <button onClick={() => setFighting(true)}>FIGHT</button>
                    <button onClick={() =>  setPreview(false)}>BACK</button>
                </div>
            </div>
        )
    }

    else if (choosing){
        return (
            <div>
                <h1>ARENA</h1>
                <div>
                    <div id='opponent-1' onClick={() => setPreview(true)}>
                        OPPONENT 1
                    </div>
                    <div id='opponent-2' onClick={() => setPreview(true)}>
                        OPPONENT 2
                    </div>
                    <div id='opponent-3' onClick={() => setPreview(true)}>
                        OPPONENT 3
                    </div>
                </div>
            </div>
        )
    }
}

export default Arena;