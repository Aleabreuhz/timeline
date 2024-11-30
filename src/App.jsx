import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notifications from './pages/notifications/Notifications';
import Quiz from './pages/quizz/Quiz';
import Timelines from './pages/Timelines/Timelines'
import TimelineEvents from './pages/timelineEvents/timelineEvents';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notifications />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/timeline" element={<Timelines />} />   
        <Route path="/timeline/:currentTimeline" element={< TimelineEvents/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;