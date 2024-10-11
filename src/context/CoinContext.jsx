import { createContext, useEffect, useState } from "react";
import { IoLogoUsd } from "react-icons/io";

export const CoinContext = createContext();

const CoinContextProvider = (props)=>{

    const [allCoin,setAllcoin] = useState([]);
    const [currency,setCurrency] = useState({
        name:"usd",
        symbol:<IoLogoUsd />
    });

    const fetchAllcoins = ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-fKqsCzWktCFBU4h7DSgX46wp'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllcoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllcoins();
    },[currency])

    const contextValue = {
        allCoin,currency,setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;