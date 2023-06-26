import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


import  Home from "./pages/components/Home";

import  Navibar from "./pages/components/Navibar";
import  Footer from "./pages/components/Footer";
import { ViewMeeting } from './pages/components/ViewMeeting';
import { Manage } from './pages/components/Manage';
import Uploader from './pages/components/Uploader';
import MeetingRoom from './pages/components/MeetingRoom';
import UpcomingMeeting from './pages/components/UpcomingMeeting';


axios.defaults.withCredentials = true;
  

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/components/ViewMeeting" element={<ViewMeeting />} />
        <Route path="/components/Manage" element={<Manage />} />
        <Route path="/components/Uploader" element={<Uploader />} />
        <Route path="/components/MeetingRoom" element={<MeetingRoom />} />
        <Route path="/components/UpcomingMeeting" element={<UpcomingMeeting />} />


      </Routes>
    </Router>
      
  );
}

export default App;
