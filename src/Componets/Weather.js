import { useEffect, useState } from "react"

export default function Weather()
{
    const [data,SetData]=useState([])
    useEffect(()=>{
    async function api(){
        const response =await fetch('./weather.json')
        const jason=await response.json();
        SetData(jason.alert)
        console.log(jason.alert)

    }
    api();
},[])
   

    return(
        <div>
            {data.map((item,i)=>
            {
                return(
                <div key={i}>
                   <p>{item.category}</p> 
                </div>)
            })}
            {console.log(data)}
        <h1>Hellot</h1>
        </div>
    
    )
}