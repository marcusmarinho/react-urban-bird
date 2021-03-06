import HomePage from '../pages/Home/Home';
import ErrorPage from '../pages/Error/Error';
import React, { FC } from 'react';
import {
    Routes, Route
} from 'react-router-dom';
import CartPage from '../pages/Wallet/Wallet';

const FunPage = React.lazy(() => import('../pages/Fun/Fun'));
const MyOrdersPage = React.lazy(() => import('../pages/MyOrders/MyOrders'));
const RestaurantsPage = React.lazy(() => import('../pages/Restaurants/Restaurants'));
const DetailPage = React.lazy(() => import('../pages/Detail/Detail'));
const SuccessOrderPage = React.lazy(() => import('../pages/SuccessOrder/SuccessOrder'));

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

            <Route path="/detalhe/:id"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <DetailPage />
                    </React.Suspense>
                }>
            </Route>

            <Route path="/sacola" element={<CartPage />}></Route>

            <Route path="/erro" element={<ErrorPage />}></Route>

            <Route path="/comprovante/:idOrder"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <SuccessOrderPage />
                    </React.Suspense>
                }>
            </Route>
        </Routes>
    )
}

export default MainRoutes;
