import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useApi<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isCalling, setIsCalling] = useState(true);

    const navigate = useNavigate();
 
    useEffect(()=> {
        axios.get(url, options)
        .then(response => {
            console.log(response);
            setData(response.data);
        }).catch(err => {
            navigate('/erro');
        })
        .finally(() => {
            setIsCalling(false);
        })
    },[])

    return { data, isCalling }
}