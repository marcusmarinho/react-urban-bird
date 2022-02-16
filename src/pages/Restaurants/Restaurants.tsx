import React, { useEffect, useState } from 'react';
import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { OfferItem } from '../../models/offer-item.models';
import { getOfferByCategory } from '../../services/offer.service';
import styles from "./Restaurants.module.scss";
import img1 from '../../assets/ofertas/1/img1.jpg';
import img2 from '../../assets/ofertas/2/img2.jpg';
import img3 from '../../assets/ofertas/3/img1.jpg';
import Card from '../../components/Card/Card';

const RestaurantsPage:FC = (props) => {
    const [offers, setOffer] = useState([]);
    const [loader, setLoaderState] = useState(true);

    const imgArray = [img1, img2, img3];

    const navigate = useNavigate();

    function navigateToDetail(offerId: any) {
        navigate(`/detalhe/${offerId}`);
    }

    async function getFun() {
        try {
            let response = await getOfferByCategory('restaurante');
            setOffer(response);
            setLoaderState(false);
            return response;
        } catch (error) {
            setLoaderState(false);
            navigate('/erro');
        }
    }

    useEffect(() => {
        getFun();
    }, []);

    return (
        offers.length !== 0 ?
            <section className={styles.cCard}>
                {offers.map((offerItem: OfferItem, idx: number) => {
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
            </section> : <Loader isLoading={loader}></Loader>
    );
}

export default RestaurantsPage;
