import React, { useEffect, useState } from 'react';
import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { OfferItem } from '../../models/offer-item.models';
import styles from "./Restaurants.module.scss";
import img1 from '../../assets/ofertas/1/img1.jpg';
import img2 from '../../assets/ofertas/2/img2.jpg';
import img3 from '../../assets/ofertas/3/img1.jpg';
import Card from '../../components/Card/Card';
import { useQuery } from 'react-query';
import axios from 'axios';

const RestaurantsPage:FC = (props) => {

    const imgArray = [img1, img2, img3];

    const navigate = useNavigate();

    const { data, isFetching } = useQuery<OfferItem[]>('RestaurantList', async () => {
        const response = await axios.get('https://app2jsonserver.herokuapp.com/ofertas', {
            params: {
                categoria: 'restaurante'
            }
        });
        return response.data;
    }, {
        staleTime: 1000 * 60 // 1minute
    })

    function navigateToDetail(offerId: any) {
        navigate(`/detalhe/${offerId}`);
    }

    return (
        data ?
            <section className={styles.cCard}>
                {data.map((offerItem: OfferItem, idx: number) => {
                    return (
                        <div key={offerItem.id} onClick={() => navigateToDetail(offerItem.id)}>
                            <Card style="styles.contentH">
                                <div className={styles.card}>
                                    <h2>{offerItem.titulo}</h2>
                                    <p className="cardSubtitle">Categoria {offerItem.categoria}</p>
                                    <img src={imgArray[idx]}></img>
                                    <p>{offerItem.descricao_oferta}</p>
                                </div>
                            </Card>
                        </div>
                    );
                })};
            </section> : <Loader isLoading={isFetching}></Loader>
    );
}

export default RestaurantsPage;
