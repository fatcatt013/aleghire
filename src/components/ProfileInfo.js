import React from 'react';


const ProfileInfo = () => {


    return (
        <div className='profile-info'>
            <h2>Abbon</h2>
            <img src="https://i.pinimg.com/564x/c6/fc/2c/c6fc2c165498a2f39b420b1e75aa2017.jpg" alt="" className='profile-info-image'/>
            <div className='profile-info-paragraphs'>
                <p>Level: 1</p>
                <p>Experience: 0/100</p>
            </div>
            <div className='profile-info-stats'>
                <p>Strength: 10</p>
                <p>Stamina: 10</p>
                <p>Dexterity: 10</p>
                <p>Intelligence: 10</p>
                <p>Luck: 10</p>
                <p></p>
            </div>
        </div>
    )
}

export default ProfileInfo;