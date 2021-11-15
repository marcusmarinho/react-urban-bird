import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { useState, useEffect } from 'react';
import api from "../../environments/environment";
import "./Home.scss"
import Loader from "../../components/Loader/Loader";
import axios from "axios";

export interface OfferItem {
    anunciante: string;
    categoria: string;
    descricao_oferta: string;
    destaque: boolean;
    id: number;
    imagens?: any
    titulo: string;
    valor: number;
}

export default function Home() {

    const [offer, setOffer] = useState([]);
    const [loader, setLoaderState] = useState(true);

    function getOffer() {
        axios.get(`${api.baseURL}/ofertas`).then(
            (response) => {
                setOffer(response.data);
                setLoaderState(false);
            }
        ).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getOffer()
    }, []);

    return (
        <section className="c-card">
            {offer?.map((offerItem: OfferItem) => {
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
                )
            })}
            <Loader isLoading={loader}></Loader>
        </section>
    )
}