import { useEffect, useState } from "react";
import AppApi from "../http/app.api";

export default function useHello() {

    const [hello, setHello] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const makeQuery = async () => {


            const api = new AppApi('');

            setLoading(true);
            const response = await api.getHello();
            console.log(response.request)
            if (response.status === 200) {
                setHello(response.data);
            }
            setLoading(false);
        }


        makeQuery();
    },[])


    return { hello, loading }
}