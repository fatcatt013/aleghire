import React, { useState } from 'react';
import '../index.css';
import Axios from 'axios';

const CreateHero = (props) => {

    const [name, setName] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedPfp, setSelectedPfp] = useState(0);
    const [selectedReligion, setSelectedReligion] = useState("");

    const warriorPics = [
        "https://i.pinimg.com/564x/0e/e6/05/0ee6058a98ee88e7c59f64ea4d9592a8.jpg",
        "https://st.depositphotos.com/1001951/1865/i/450/depositphotos_18654711-stock-photo-medieval-knight.jpg",
        "https://i.pinimg.com/736x/dd/4c/66/dd4c66221810cb70d3612ee9320571b2.jpg"
    ]

    const archerPics = [
        "https://i.pinimg.com/564x/ef/fc/d3/effcd37a88638672341a0115b6da0776.jpg",
        "https://i.pinimg.com/564x/32/39/31/323931a5a34194a72610c7e339961303.jpg",
        "https://i.pinimg.com/564x/29/af/b5/29afb523e3811118776e23e8ab015d15.jpg"
    ]

    const magePics = [
        "https://i.pinimg.com/564x/d4/41/6a/d4416ae8f23844a9a72c318de9b203ab.jpg",
        "https://i.pinimg.com/564x/0b/f2/86/0bf2868b0333324b917e7e108a848547.jpg",
        "https://i.pinimg.com/564x/4c/63/cb/4c63cbb7003081b41f94e52095b1d52d.jpg"
    ]

    const monkPics = [
        "https://i.pinimg.com/564x/60/91/53/609153d40649f1e91ee72b1af16288dc.jpg",
        "https://i.pinimg.com/564x/03/c3/80/03c3802b2971c6a5dc58802a9b40ec18.jpg",
        "https://i.pinimg.com/564x/36/59/2f/36592fd42f169c1a2bf1fffc6e497f04.jpg"
    ]

    const paladinPics = [
        "https://i.pinimg.com/564x/cc/0c/98/cc0c981b743bea3a34b7688d3afe7628.jpg",
        "https://i.pinimg.com/564x/b9/81/bb/b981bb4988b705123f6aebbeaba32d97.jpg",
        "https://i.pinimg.com/564x/77/7a/e9/777ae97c6b44e0db61cbd07cf3ba4a10.jpg"
    ]

    const handleSelectClass = (e, classname) => {
        setSelectedClass(classname);
        setSelectedPfp(0);
    }

    const handlePics = (num) => {

        switch (selectedClass) {
            case ("Warrior"):
                return warriorPics[num - 1];
            case ("Archer"):
                return archerPics[num - 1];
            case ("Mage"):
                return magePics[num - 1];
            case ("Monk"):
                return monkPics[num - 1];
            case ("Paladin"):
                return paladinPics[num - 1];

            default:
                return warriorPics[num - 1];
        }
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
                pfp: handlePics(selectedPfp),
                religion: selectedReligion,
                religionIndex: stats.religion,
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
                break;
            case ("Archer"):
                classStats = stats.archer;
                break;
            case ("Mage"):
                classStats = stats.mage;
                break;
            case ("Monk"):
                classStats = stats.monk;
                break;
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
                        <img src={handlePics(1)} alt=""
                            onClick={() => {setSelectedPfp(1)}}
                            className={(selectedPfp === 1) ? "pfp-selected" : "pfp-unselected"}/>
                        <img src={handlePics(2)} alt=""
                             onClick={() => {setSelectedPfp(2)}}
                             className={(selectedPfp === 2) ? "pfp-selected" : "pfp-unselected"}/>
                        <img src={handlePics(3)} alt=""
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