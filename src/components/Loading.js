import React, {useEffect} from 'react';

const Loading = ({quit}) => {

    const quitLoadingScreen = () => {
        setTimeout(() => quit(false), 1000);
    }

    useEffect(quitLoadingScreen);

    return (
        <div className='loading-screen'>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading;