import React, {useEffect} from 'react';
import Axios from "axios";


const ProfileInfo = () => {




    /*
    Request for

    UserInfo
    Name
    PFP
    Class
    Guild
    Religion
    Location

    UserStats
    Level
    Exp
    Strength
    Stamina
    Dexterity
    Intelligence
    Luck

     */

    return (
        <div className='profile-info'>
            <h2>{sessionStorage.getItem("name")}</h2>
            <img src={sessionStorage.getItem("pfp")} alt="" className='profile-info-image'/>
            <div className='profile-info-paragraphs'>
                <p>{"Level: " + 1}</p>
                <p>Experience: 0/100</p>
                <p>{"Class: " + sessionStorage.getItem("class")}</p>
                <p>{"Guild: " + sessionStorage.getItem("guild")}</p>
                <p>{"Religion: " + sessionStorage.getItem("religion")}</p>
                <p>{"Location: " + sessionStorage.getItem("region") + "(" + sessionStorage.getItem("city") + ")"}</p>
            </div>
            <div className='profile-info-stats'>
                <p>Strength: 10</p>
                <p>Stamina: 10</p>
                <p>Dexterity: 10</p>
                <p>Intelligence: 10</p>
                <p>Luck: 10</p>
            </div>
        </div>
    )
}

export default ProfileInfo;