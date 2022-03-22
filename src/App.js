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


function App() {

    const [registered, setRegistered] = useState(false);
    const [createCharacter, setCreateCharacter] = useState(false);

    const handleAuth = (newAcc, id, pwd) => {
        //newAcc (boolean) = is creating a new account?
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("pwd", pwd);
        console.log("Session Storage ID: " + sessionStorage.getItem("id"));
        setRegistered(true);
        setCreateCharacter(newAcc);
    }

    if (!registered) {
        return (
            <Register handleAuth={handleAuth}/>
        )
    }

    if (createCharacter) {
        //CHARACTER CREATION PROCESS
        return (
            <CreateHero continue={() => setCreateCharacter(false)}/>
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