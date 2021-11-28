import { FC } from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect } from 'react';
import "./Home.scss";
import Loader from "../../components/Loader/Loader";
import { getOffer } from "../../services/offer.service";
import { OfferItem } from "../../models/offer-item.models";
import { useNavigate } from "react-router-dom";

const HomePage:FC = (props) => {

    const [offer, setOffer] = useState([]);
    const [loader, setLoaderState] = useState(true);

    const navigate = useNavigate()

    async function getData() {
        try {
            let response = await getOffer;
            setOffer(response);
            setLoaderState(false);
        } catch (error) {
            console.log('error',error);
            setLoaderState(false);
            navigate('/erro');
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        offer.length !== 0 ?
        <section className="c-card">
            {offer.map((offerItem: OfferItem) => {
                return (
                    <div key={offerItem.id}>
                        <Card>
                            <div className="card">
                                <h2>{offerItem.titulo}</h2>
                                <p>{offerItem.categoria}</p>
                                <img className="card--img" src={`${offerItem.imagens[0].url}`}></img>
                                <p>{offerItem.descricao_oferta}</p>
                            </div>
                        </Card>
                    </div>
                );
            })};
            <Loader isLoading={loader}></Loader>
        </section> : <p></p>
    );
}

export default HomePage;