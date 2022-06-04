import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Home/Header';

import Home from './pages/Home/Home'
import Filme from './pages/Filme/Filme'
import Favoritos from './pages/Favoritos/Favoritos';
import Erro from './pages/Erro/Erro'

export default function Rotas() {
    return (
        <div>
            <Router>
                <Header></Header>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/filme/:id' element={<Filme />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                    <Route path='*' element={<Erro />} />
                </Routes>
            </Router>
        </div>
    )
}