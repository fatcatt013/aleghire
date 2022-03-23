import React, {useEffect} from 'react';

const Loading = ({quit}) => {

    const quitLoadingScreen = () => {
        console.log("Starting loading screen");
        setTimeout(() => quit(false), 1000);
        console.log("Quitting loading screen");
    }

    useEffect(quitLoadingScreen);

    return (
        <div className='loading-screen'>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading;