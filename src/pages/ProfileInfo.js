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
                <p>{"Level: " + sessionStorage.getItem("level")}</p>
                <p>{"Experience: " + sessionStorage.getItem("exp") + "/100"}</p>
                <p>{"Class: " + sessionStorage.getItem("class")}</p>
                <p>{"Guild: " + sessionStorage.getItem("guild")}</p>
                <p>{"Religion: " + sessionStorage.getItem("religion")}</p>
                <p>{"Location: " + sessionStorage.getItem("region") + "(" + sessionStorage.getItem("city") + ")"}</p>
            </div>
            <div className='profile-info-stats'>
                <p>{"Strength: " + sessionStorage.getItem("strength")}</p>
                <p>{"Stamina: " + sessionStorage.getItem("stamina")}</p>
                <p>{"Dexterity: " + sessionStorage.getItem("dexterity")}</p>
                <p>{"Intelligence: " + sessionStorage.getItem("intelligence")}</p>
                <p>{"Luck: " + sessionStorage.getItem("luck")}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;