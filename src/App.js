import 'dotenv/config';
import React from 'react';
import { Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyle';
import History from './services/history';
import Header from './components/Header';
import Routes from './routes/index';

function App() {
  return (
    <div className="App">
      <Router history={History}>
        <GlobalStyle />
        <Header />
        <Routes />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
