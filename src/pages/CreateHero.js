import React, { useState } from 'react';
import '../index.css';
import Axios from 'axios';

const CreateHero = (props) => {

    const [name, setName] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedPfp, setSelectedPfp] = useState(0);
    const [selectedReligion, setSelectedReligion] = useState("");

    const handleSelectClass = (e, classname) => {
        setSelectedClass(classname);
        setSelectedPfp(0);
    }

    const handleContinue = () => {
        if (name === "") {
            alert("Please fill your name input field.");
            return;
        }

        if (name.length < 5) {
            alert("Your name must contain at least 6 characters.");
            return;
        }

        if (selectedClass === ""){
            alert("Please select a class.");
            return;
        }

        if (selectedPfp === 0){
            alert("Please select a profile picture.");
            return;
        }


        let region;
        let city;

        const cities = require("../ingameConst/cities");
        const regions = require("../ingameConst/regions");

        if (selectedReligion === "Satanist") {
            city = cities.defaultStartCitySatanist;
            region = regions.defaultStartRegionSatanist;
        } else {
            city = cities.defaultStartCityChristian;
            region = regions.defaultStartRegionChristian;
        }

        const stats = handleStats();

        Axios.post("http://localhost:3001/init-user",
            {
                id: sessionStorage.getItem("id"),
                name: name,
                level: stats.level,
                exp: stats.exp,
                strength: stats.strength,
                stamina: stats.stamina,
                dexterity: stats.dexterity,
                intelligence: stats.intelligence,
                luck: stats.luck,
                money: stats.money,

                class: selectedClass,
                pfp: selectedPfp,
                religion: selectedReligion,
                region: region,
                city: city

        }).then(res => {
            if (res.data.message === 1) {
                console.log("Successfuly initialized the user.");
                props.continue();
            } else {
                console.log("Something went wrong on the server side.");
            }
        });
    }

    const handleStats = () => {
        const stats = require('../ingameConst/createCharacterStats');
        let classStats;

        switch (selectedClass) {
            case ("Warrior"):
                classStats = stats.warrior;
            case ("Archer"):
                classStats = stats.archer;
            case ("Mage"):
                classStats = stats.mage;
            case ("Monk"):
                classStats = stats.monk;
            case ("Paladin"):
                classStats = stats.paladin;
        }

        return classStats;
    }

    return (

        <div className='create-hero-container'>
            <div className='create-hero-content'>
                <div className='choose-name-container'>
                    <h3>Choose your name:</h3>
                    <input type="text" onChange={(e) => {setName(e.target.value)}}
                        value={name}/>
                </div>
                <div className='choose-religion'>
                    <h3>Choose your religion:</h3>
                    <ul className='religion-list'>
                        <li onClick={(e) => {setSelectedReligion("Satanist")}}
                            className={(selectedReligion === "Satanist") ? "religion-list-li-selected" : ""}>Satanist</li>
                        <li onClick={(e) => {setSelectedReligion("Christian")}}
                            className={(selectedReligion === "Christian") ? "religion-list-li-selected" : ""}>Christian</li>
                    </ul>
                </div>
                <div className='choose-class-container'>
                    <h3>Choose your class:</h3>
                    <ul className='class-list'>
                        <li onClick={(e) => {handleSelectClass(e, "Warrior")}}
                            className={(selectedClass === "Warrior") ? "class-list-li-selected" : ""}>Warrior</li>
                        <li onClick={(e) => {handleSelectClass(e, "Archer")}}
                            className={(selectedClass === "Archer") ? "class-list-li-selected" : ""}>Archer</li>
                        <li onClick={(e) => {handleSelectClass(e, "Mage")}}
                            className={(selectedClass === "Mage") ? "class-list-li-selected" : ""}>Mage</li>
                        <li onClick={(e) => {handleSelectClass(e, "Monk")}}
                            className={(selectedClass === "Monk") ? "class-list-li-selected" : ""}>Monk</li>
                        <li onClick={(e) => {handleSelectClass(e, "Paladin")}}
                            className={(selectedClass === "Paladin") ? "class-list-li-selected" : ""}>Paladin</li>
                    </ul>
                </div>
                <div className='choose-pfp-container'>
                    <h3>Choose a profile picture:</h3>
                    <div className='pfp-list'>
                        <img src="https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg" alt=""
                            onClick={() => {setSelectedPfp(1)}}
                            className={(selectedPfp === 1) ? "pfp-selected" : "pfp-unselected"}/>
                        <img src="https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg" alt=""
                             onClick={() => {setSelectedPfp(2)}}
                             className={(selectedPfp === 2) ? "pfp-selected" : "pfp-unselected"}/>
                        <img src="https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg" alt=""
                             onClick={() => {setSelectedPfp(3)}}
                             className={(selectedPfp === 3) ? "pfp-selected" : "pfp-unselected"}/>
                    </div>
                </div>
                <button className='create-hero-button' onClick={handleContinue}>Continue</button>

            </div>
        </div>

    )

};



export default CreateHero;