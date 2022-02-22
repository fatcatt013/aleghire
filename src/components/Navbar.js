import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GiTreasureMap, GiSwordClash } from 'react-icons/gi';
import { FaSitemap, FaDungeon, FaCross, FaCoins } from 'react-icons/fa';
import { MdLocationCity, MdGroups, MdOutlineMail, MdSettings,
         MdPersonOutline } from 'react-icons/md';


const Navbar = () => {

    const navigate = useNavigate();
    const paths = ['profile', 'map', 'talent-tree', 'city', 'arena',
                   'dungeon', 'guild', 'religion', 'mailbox', 'settings'];

    const handleNavigate = (place) => {
    }


    return (
        <div className='nav-container'>
            <ul className='nav-ul'>
                <li id='nav-li-1' onClick={() => navigate('/profile')}>
                    <div className='nav-profile'>
                        <img src="https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg"
                             alt="" className='mini-pfp'/>
                             <div className='nav-profile-text'>
                                 <span><MdPersonOutline/> Abbon</span>
                                 <span><FaCoins/> 1000g</span>
                             </div>
                    </div>
                </li>
                <div className='nav-items'>
                    <li id='nav-li-2' onClick={() => navigate('/map')}><GiTreasureMap/> Map</li>
                    <li id='nav-li-3' onClick={() => navigate('/talent-tree')}><FaSitemap/> Talent Tree</li>
                    <li id='nav-li-4' onClick={() => navigate('/city')}><MdLocationCity/> City</li>
                    <li id='nav-li-5' onClick={() => navigate('/arena')}><GiSwordClash/> Arena</li>
                    <li id='nav-li-6' onClick={() => navigate('/dungeon')}><FaDungeon/> Dungeon</li>
                    <li id='nav-li-7' onClick={() => navigate('/guild')}><MdGroups/> Guild</li>
                    <li id='nav-li-8' onClick={() => navigate('/religion')}><FaCross/> Religion</li>
                    <li id='nav-li-9' onClick={() => navigate('/mailbox')}><MdOutlineMail/> Mailbox</li>
                    <li id='nav-li-10' onClick={() => navigate('/settings')}><MdSettings/> Settings</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;