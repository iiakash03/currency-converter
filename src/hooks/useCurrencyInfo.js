const { useState, useEffect } = require("react");

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data[currency])
            setData(data[currency])
        })
    },[currency])

    return data
}

export default useCurrencyInfo;