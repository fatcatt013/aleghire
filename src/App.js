import React, {useState} from 'react';
import ProfileInfo from './pages/ProfileInfo';
import Map from './pages/Map';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TalentTree from "./pages/TalentTree";
import City from "./pages/City";
import Arena from "./pages/Arena";
import Dungeon from "./pages/Dungeon";
import Guild from "./pages/Guild";
import Religion from "./pages/Religion";
import Mailbox from "./pages/Mailbox";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import CreateHero from "./pages/CreateHero";
import Loading from './components/Loading';
import Axios from "axios";


function App() {

    const [registered, setRegistered] = useState(false);
    const [createCharacter, setCreateCharacter] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleAuth (newAcc, id, pwd) {
        //newAcc (boolean) = is creating a new account?
        sessionStorage.clear();
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("pwd", pwd);
        console.log("Session Storage ID: " + sessionStorage.getItem("id"));
        if (! newAcc) {
            setSessionStorage();
            setLoading(true);
        }
        setRegistered(true);
        setCreateCharacter(newAcc);
    }

    async function loadUserInfo () {

        const res = await Axios.post("http://localhost:3001/get-user-info",
            {
                id: sessionStorage.getItem("id"),
            })
        return res.data.result[0];

    }

    async function loadUserStats () {

        const res = await Axios.post("http://localhost:3001/get-user-stats",
            {
                id: sessionStorage.getItem("id"),
            })
        return res.data.result[0];

    }

    async function setSessionStorage () {
        loadUserInfo().then((result) => {
            sessionStorage.setItem("name", result.name);
            sessionStorage.setItem("pfp", result.pfp);
            sessionStorage.setItem("class", result.class);
            sessionStorage.setItem("guild", result.guild);
            sessionStorage.setItem("religion", result.religion);
            sessionStorage.setItem("region", result.region);
            sessionStorage.setItem("city", result.city);
        })

        loadUserStats().then((result) => {
            sessionStorage.setItem("level", result.level);
            sessionStorage.setItem("exp", result.exp);
            sessionStorage.setItem("strength", result.stamina);
            sessionStorage.setItem("stamina", result.stamina);
            sessionStorage.setItem("dexterity", result.dexterity);
            sessionStorage.setItem("intelligence", result.intelligence);
            sessionStorage.setItem("luck", result.luck);
            sessionStorage.setItem("money", result.money);
        })
    }

    if (loading) {
        console.log("App: if (loading) triggered");
        return (
            <Loading quit={setLoading}/>
        )
    }

    if (!registered) {

        return (
            <Register handleAuth={handleAuth}/>
        )
    }

    if (createCharacter) {
        //CHARACTER CREATION PROCESS
        return (
            <CreateHero continue={() => {
                setCreateCharacter(false);
                setSessionStorage();
                setLoading(true);
            }
            }/>
        )
    }


    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path='/profile' element={<ProfileInfo/>} />
                    <Route path='/map' element={<Map/>} />
                    <Route path='/talent-tree' element={<TalentTree/>} />
                    <Route path='/city' element={<City/>} />
                    <Route path='/arena' element={<Arena/>} />
                    <Route path='/dungeon' element={<Dungeon/>} />
                    <Route path='/guild' element={<Guild/>} />
                    <Route path='/religion' element={<Religion/>} />
                    <Route path='/mailbox' element={<Mailbox/>} />
                    <Route path='/settings' element={<Settings/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;