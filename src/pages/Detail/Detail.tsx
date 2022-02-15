import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import CustomButton from "../../components/Button/Button";
import { WalletItem } from "../../models/wallet.model";
import { DetailOffer } from "../../models/detail.model";
import { getAddtionalInfo, getDetails, getLocation } from "../../services/offer.service";
import {WalletContextProvider, EmptyContextProvider} from "../../context/Wallet.context";
import styles from './Detail.module.scss';
import Loader from '../../components/Loader/Loader';

const DetailPage: FC = (props) => {

    const params = useParams();

    const [data, setData] = useState<DetailOffer>();

    let {criteria, setAnimateWallet} = useContext(EmptyContextProvider);

    const { products, setProducts} = useContext(WalletContextProvider);

    const [loader, setLoaderState] = useState(true);


    async function getOffer() {
        try {
            let response = await getDetails(params.id);
            return response;
        } catch (error) {
            console.log('error', error);
        }
    }

    async function getInfo() {
        try {
            let response = await getAddtionalInfo(params.id);
            return response;
        } catch (error) {
            console.log('error', error);
        }
    }

    async function getDataLocation() {
        try {
            let response = await getLocation(params.id);
            return response;
        } catch (error) {
            console.log('error', error);
        }
    }

    async function getServices() {
        const location = await getDataLocation();
        const info = await getInfo();
        const detail = await getOffer();
        setData({
            location,
            info,
            detail
        });
        setLoaderState(false);
    }

    function addToWallet(offer: any): void {
      
        criteria = products?.find((item: WalletItem) => item.id === offer.detail.id);

        setAnimateWallet(true);

        if (criteria) {
            criteria.quantidade += 1;
            setProducts([...products]);
        } else {
            const cartItem: WalletItem = {
                id: offer.detail.id,
                img: offer.detail.imagens[0],
                titulo: offer.detail.titulo,
                descricao_oferta: offer.detail.descricao_oferta,
                valor: offer.detail.valor,
                quantidade: 1
            }

            products?.push(cartItem)
            setProducts([...products]);
            
        }
        setTimeout(setAnimateDefault, 1000);
    }

    function setAnimateDefault() {
        setAnimateWallet(false);
    }
    
    useEffect(() => {
        getServices();
    }, []);

    return (
        data ?
            <div className={styles.cDetail}>
                <div className="botao1">
                    <CustomButton label="Add To Wallet" onClickFunc={() => addToWallet(data)}></CustomButton>
                </div>
            </div> : <Loader isLoading={loader}></Loader>
    )
}

export default DetailPage;