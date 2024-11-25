import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importação dos componentes
import LoginForm from "./componentes/login";
import Home from "./componentes/home";
import Header from "./componentes/header";
import RegisterForm from "./componentes/register";
import Footer from "./componentes/footer/footer";
import ProductCarousel from "./componentes/products";
import Profile from "./componentes/profile";
import Dashboard from "./componentes/dashboard";
import ContactForm from "./componentes/form_sendInfo";
import TambauUnit from "./componentes/unidade_tambau";
import MangabeiraUnit from "./componentes/unidade_mangabeira";
import AmericoUnit from "./componentes/unidade_americo";



function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />           
                    <Route path="/products" element={<ProductCarousel />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />      
                    <Route path="/unidade_tambau" element={<TambauUnit />} />
                    <Route path="/unidade_mangabeira" element={<MangabeiraUnit />} />
                    <Route path="/unidade_americo" element={<AmericoUnit />} />              
                    <Route path="sendForm" element={<ContactForm/>}/>                   
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
