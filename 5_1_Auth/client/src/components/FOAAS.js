import React, { useState, useEffect } from 'react';

export default function(){
    const [message, setMessage] = useState();
    const [from, setFrom] = useState();
    useEffect(() => {
        const fetchfromAPI = async () => {
            console.log("Relló There.");
            // fetch from the Fuck You As A Service API
            let api_url = `https://www.foaas.com/asshole/World`
            const api_call = await fetch(api_url, {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}});
            const data = await api_call.json();
            console.log(data);
            setMessage(data.message);
            setFrom(data.subtitle);
        };
        fetchfromAPI();
    }, []);

    return(
        <>
            <h2>{message}</h2>
            <h3>Regards, {from}</h3>
        </>
    );
}