import React, {useState} from 'react';

const Guild = () => {
    const [inGuild, setInGuild] = useState(false);
    const [guildName, setGuildName] = useState(null);

    const joinGuild = (name) => {
        setInGuild(true);
        setGuildName(name);
    }

    if (!inGuild) {
        return (
            <div>
                <h1>GUILD</h1>
                <div>
                    <h4>Open guilds</h4>
                    <ul>
                        <li>Blue panthers</li><button onClick={() => joinGuild("Blue panthers")}>Join</button>
                        <li>Black sun</li><button onClick={() => joinGuild("Black sun")}>Join</button>
                        <li>Fine glory</li><button onClick={() => joinGuild("Fine glory")}>Join</button>
                        <li>White warriors</li><button onClick={() => joinGuild("White warriors")}>Join</button>
                    </ul>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>{guildName}</h1>
                <p>You are now a part of {guildName}. Now reach the glory with your guild.</p>
                <button onClick={() => setInGuild(false)}>Leave guild</button>
            </div>
        )
    }

}

export default Guild;