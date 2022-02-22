import React from 'react';
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


function App() {
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