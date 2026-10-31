import {useState,useEffect} from "react";
import dotenv from "dotenv";

function UseFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const url = import.meta.env.VITE_API_BASE_URL || "http://localhost:3333/courses";
    try{
        setLoading(true);
        setError(null);

        useEffect(() => {

        })

        fetch(url)
            .then(res =>{
                if(!res.ok){
                    throw new Error("Failed to fetch data");
                }
                setLoading(false);
                return res.json();
            },[url])
            .then(data => setData(data))
            setError(false);

    }catch(err){
        setError(err.message);
        setLoading(true);

    } finally {

    }


    return { data, loading, error };
}

export default UseFetch;