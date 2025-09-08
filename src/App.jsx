import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'; 
import './App.css'; 

const HomePage = () => <h2>Գլխավոր Էջ</h2>;
const Home = () => <h2>Տուն</h2>;
const ForClients = () => <h2>Հաճախորդի համար Էջ</h2>;
const AboutUs = () => <h2>Մեր մասին Էջ</h2>;
const Contacts = () => <h2>Կապ Էջ</h2>;
const Help = () => <h2>Օգնություն Էջ</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/for-clients" element={<ForClients />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;