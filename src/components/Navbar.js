import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiTreasureMap, GiSwordClash } from 'react-icons/gi';
import { FaSitemap, FaDungeon, FaCross, FaCoins } from 'react-icons/fa';
import { MdLocationCity, MdGroups, MdOutlineMail, MdSettings,
         MdPersonOutline } from 'react-icons/md';


const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='nav-container'>
            <ul className='nav-ul'>
                <li onClick={() => navigate('/profile')}>
                    <div className='nav-profile'>
                        <img src={sessionStorage.getItem("pfp")}
                             alt="" className='mini-pfp'/>
                             <div className='nav-profile-text'>
                                 <span><MdPersonOutline/> {sessionStorage.getItem("name")}</span>
                                 <span><FaCoins/> {sessionStorage.getItem("money") + "g"}</span>
                             </div>
                    </div>
                </li>
                <div className='nav-items'>
                    <li onClick={() => navigate('/map')}><GiTreasureMap/> Map</li>
                    <li onClick={() => navigate('/talent-tree')}><FaSitemap/> Talent tree</li>
                    <li onClick={() => navigate('/city')}><MdLocationCity/> City</li>
                    <li onClick={() => navigate('/arena')}><GiSwordClash/> Arena</li>
                    <li onClick={() => navigate('/dungeon')}><FaDungeon/> Dungeon</li>
                    <li onClick={() => navigate('/guild')}><MdGroups/> Guild</li>
                    <li onClick={() => navigate('/religion')}><FaCross/> Religion</li>
                    <li onClick={() => navigate('/mailbox')}><MdOutlineMail/> Mailbox</li>
                    <li onClick={() => navigate('/settings')}><MdSettings/> Settings</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;