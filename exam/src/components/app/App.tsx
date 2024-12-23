import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Main from "../../pages/main/main.tsx";
import History from "../../pages/history/history.tsx";

function App(): React.FC {
  return (

      <Routes>
        <Route path="/" element={(<Main />)}/>
        <Route path='history' element={<History />}/>
      </Routes>
  );
}

export default App;
