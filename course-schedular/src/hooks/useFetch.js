import {useState,useEffect} from "react";

function UseFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const url = import.meta.env.VITE_API_BASE_URL + "courses" || "http://localhost:3333/courses"
    useEffect(() => {
            setLoading(true);
            setError(null);

            fetch(url)
                .then(res=>{
                    if(!res.ok){
                        throw new Error('Error fetching data');
                    }
                    return res.json();
                })
                .then(data=>{
                    setData(data);
                    setLoading(false);
                })
                .catch(err=>{
                    setError(err.message);
                })
                .finally(()=>{
                    setLoading(false);
                })

    }, [url]);
    return { data, loading, error };
}

export default UseFetch;
