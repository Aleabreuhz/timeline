import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notifications from './pages/notifications/Notifications';
import Quiz from './pages/quizz/Quiz';
import Timelines from './pages/timelines/Timelines';
import AvatarIcon from './components/avatar/AvatarIcon';
// import Timelines from './pages/timelines/Timelines';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notifications />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Timeline" element={<Timelines />} />   
        <Route path="/*" element={<AvatarIcon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;