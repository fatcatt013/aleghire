import React from 'react';


const ProfileInfo = () => {


    return (
        <div className='profile-info'>
            <h2>Abbon</h2>
            <img src="https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg" alt="" className='profile-info-image'/>
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