import React from 'react';
import {
    Routes, Route
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import MyOrdens from '../pages/MyOrders/MyOrdens';
import Restaurants from '../pages/Restaurants/Restaurants';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/restaurantes" element={<Restaurants />}></Route>
            <Route path="/pedidos" element={<MyOrdens />}></Route>
        </Routes>
    )

}