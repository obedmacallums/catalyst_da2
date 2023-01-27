import { useEffect, useState } from "react"

export const ws_connect = (url)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState()
    useEffect((()=>{
        console.log("getData")
        connect()       

    }), [])


    const connect = async()=>{

        try {

        homeSocket = new WebSocket(url);
        homeSocket.onmessage = function (e){
        let data = JSON.parse(e.data);
        console.log("data: ", data);
        setData(data)

        }

            
        } catch (error) {
            console.log(error)
            setError(error)
            
        }

    }

    return {data, error}

}

