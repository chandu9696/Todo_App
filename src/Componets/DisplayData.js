import { useEffect, useState } from "react"

export default function DisplayData()
{
    const [data,SetData]=useState([])
    const [url,SetUrl]=useState({})
    const [number,SetNumber]=useState(10)
    const [info,SetInfo]=useState([])
    useEffect(()=>{
    async function api(){
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        const jason=await response.json();
        SetData(jason)

    }
    async function api2()
    {
        const response =await fetch(`https://jsonplaceholder.typicode.com/photos/${number}`)
        console.log(response)
        const jason=await response.json();
        SetUrl(jason)
        
    }
    async function api3()
    {
        const response =await fetch(`https://reqres.in/api/users?page=2`)
        console.log(response)
        const jason=await response.json();
        console.log(jason.data)
        SetInfo(jason.data)
    }

   
    api3();
 
    api();
    api2();
    
}
    
    ,[]

    )
   

    return(
        <div>
            <h1>API One Users Data</h1>
            {data.map((item,i)=>{
                return(
                    <div key={i}>
                        {item.username}
                    </div>
                )
            }
            )}
            <h1>Url</h1>
            <img src={url.url}/>
            <h1>API 3 Data</h1>
            
            {

            info.map((item,i)=>
            {
                return(
                    <div key={i}>
                          <img src={item.avatar}/>
                        
                    </div>
                )
            })} 



        </div>
    )
}