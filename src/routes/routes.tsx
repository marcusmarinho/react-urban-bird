import HomePage from '../pages/Home/Home';
import ErrorPage from '../pages/Error/Error';
import React, { FC } from 'react';
import {
    Routes, Route
} from 'react-router-dom';

const FunPage = React.lazy(() => import('../pages/Fun/Fun'));
const MyOrdersPage = React.lazy(() => import('../pages/MyOrders/MyOrdens'));
const RestaurantsPage = React.lazy(() => import('../pages/Restaurants/Restaurants'));

const MainRoutes: FC = (props) => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/restaurantes"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <RestaurantsPage />
                    </React.Suspense>
                }>
            </Route>
            <Route path="/pedidos"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <MyOrdersPage />
                    </React.Suspense>
                }>
            </Route>
            <Route path="/diversao"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <FunPage />
                    </React.Suspense>
                }>
            </Route>
            <Route path="/erro" element={<ErrorPage />}></Route>
        </Routes>
    )
}

export default MainRoutes;
