import React from 'react';
import { FC } from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect } from 'react';
import styles from "./Home.module.scss";
import Loader from "../../components/Loader/Loader";
import { getOffers } from "../../services/offer.service";
import { OfferItem } from "../../models/offer-item.models";
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/ofertas/1/img1.jpg';
import img2 from '../../assets/ofertas/2/img2.jpg';
import img3 from '../../assets/ofertas/3/img1.jpg';
import img4 from '../../assets/ofertas/4/img1.jpg';
import img5 from '../../assets/ofertas/5/img1.jpg';
import img6 from '../../assets/ofertas/6/img1.jpg';

const HomePage: FC = (props) => {

    const [offers, setOffer] = useState([]);
    const [loader, setLoaderState] = useState(true);

    const imgArray = [img1, img2, img3, img4, img5, img6];

    const navigate = useNavigate();

    async function getData() {
        try {
            let response = await getOffers;
            setOffer(response);
            setLoaderState(false);
        } catch (error) {
            console.log('error', error);
            setLoaderState(false);
            navigate('/erro');
        }
    }

    function navigateToDetail(offerId: any) {
        navigate(`/detalhe/${offerId}`);
    }

    useEffect(() => {
        getData();
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

export default HomePage;