import React from 'react';
import { GiTreasureMap, GiSwordClash } from 'react-icons/gi';
import { FaSitemap, FaDungeon, FaCross } from 'react-icons/fa';
import { MdLocationCity, MdGroups, MdOutlineMail, MdSettings } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
const Navbar = () => {

    return (
        <div className='nav-container'>
            <ul className='nav-ul'>
                <li>
                    <div className='nav-profile'>
                        <img src="https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg"
                             alt="" className='mini-pfp'/>
                             <div>
                                 <span>Abbon</span><br/>
                                 <span>1000g</span>
                             </div>
                    </div>
                </li>
                <div className='nav-items'>
                    <li><GiTreasureMap/> Map</li>
                    <li><FaSitemap/> Talent Tree</li>
                    <li><MdLocationCity/> City</li>
                    <li><GiSwordClash/> Arena</li>
                    <li><FaDungeon/> Dungeon</li>
                    <li><MdGroups/> Guild</li>
                    <li><FaCross/> Religion</li>
                    <li><MdOutlineMail/> Mailbox</li>
                    <li><MdSettings/> Settings</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;