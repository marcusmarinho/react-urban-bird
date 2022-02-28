import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { OfferItem } from '../../models/offer-item.models';
import styles from "./Fun.module.scss";

import img4 from '../../assets/ofertas/4/img1.jpg';
import img5 from '../../assets/ofertas/5/img1.jpg';
import img6 from '../../assets/ofertas/6/img1.jpg';

import { useQuery } from 'react-query';
import axios from 'axios';

const FunPage: FC = (props) => {

    const imgArray = [img4, img5, img6];

    const { data, isFetching } = useQuery('funList', async () => {
        const response = await axios.get('https://app2jsonserver.herokuapp.com/ofertas', {
            params: {
                categoria: 'diversao'
            }
        });
        return response.data;
    }, {
        staleTime: 1000 * 60 // 1minute
    })

    const navigate = useNavigate();

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
                    )
                })}
            </section> : <Loader isLoading={isFetching}></Loader>
    );
}

export default FunPage;