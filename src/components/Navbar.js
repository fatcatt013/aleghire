import React from 'react';

const Navbar = () => {

    return (
        <div className='navigation-container'>
            <ul>
                <li>
                    <div className='nav-profile'>
                        <img src="https://i.pinimg.com/564x/c6/fc/2c/c6fc2c165498a2f39b420b1e75aa2017.jpg"
                             alt="" className='mini-pfp'/>
                        <span>Abbon</span><br/>
                        <span>1000g</span>
                    </div>
                </li>
                <hr/>
                <li>Map</li>
                <li>City</li>
                <li>Religion</li>
                <li>Dungeon</li>
                <li>Guild</li>
                <li></li>
            </ul>
        </div>
    )
}

export default Navbar;