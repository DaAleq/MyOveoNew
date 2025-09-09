// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection'; // Ներմուծել HeroSection-ը
import './App.css';

const HomePage = () => (
<>
<HeroSection /> {/* Ավելացնել HeroSection-ը HomePage-ում */}
<h2>Գլխավոր Էջ</h2>
</>
);
const Home = () => <h2>Տուն</h2>;
const ForClients = () => <h2>Հաճախորդի համար Էջ</h2>;
const AboutUs = () => <h2>Մեր մասին Էջ</h2>;
const Contacts = () => <h2>Կապ Էջ</h2>;
const Help = () => <h2>Օգնություն Էջ</h2>;

function App() {
return (
<BrowserRouter>
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
<Route path="/more-details" element={<h2>Լրացուցիչ տեղեկություններ</h2>} />
<Route path="/connect-now" element={<h2>Միացում հիմա</h2>} />
</Routes>
</main>
</div>
</BrowserRouter>
);
}

export default App;