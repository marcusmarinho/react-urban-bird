import axios from 'axios';
import React from 'react';
import { FC } from "react";
import { useQuery } from 'react-query';
import CustomButton from '../../components/Button/Button';
import CollapBox from '../../components/CollapBox/CollapBox';
import Loader from '../../components/Loader/Loader';
import styles from "./MyOrders.module.scss";

const MyOrdersPage: FC = (props) => {

    const { data, isFetching } = useQuery('funList', async () => {
        const response = await axios.get('https://app2jsonserver.herokuapp.com/pedidos');
        console.log(response.data);
        return response.data;
    }, {
        staleTime: 1000 * 60 // 1minute
    })

    return (
        data ?
            data.map((offerItem: any, idx: number) => {
                return (
                    <CollapBox key={data.id} title={data.id}>
                        <div>
                            <p>Endereço: {data.inputAddress}</p>
                            <p>Quantidade {'wItem.quantidade'}</p>
                            <p>Descrição: {'wItem.descricao_oferta'}</p>
                        </div>
                    </CollapBox>
                )
            }) : <Loader isLoading={isFetching}></Loader>
    );
}

export default MyOrdersPage;

