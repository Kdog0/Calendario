import React from "react";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { CalendarioContext } from "../CalendarioContext";
import  "./ConteinerCalendario.css"
import { useEffect } from "react";


export default function MostraCalendario(){
    const{ relogio, time, setTime } = useContext(CalendarioContext)
    const diasMes = dayjs()
    const [diasCalendario, setDiasCalendario] = useState([])
    useEffect(()=>{
        criaDias()
    },[])

    
    const criaDias=()=>{
        const datas=[];
        for(let i = 0; i<diasMes.daysInMonth();i++){
            datas[i]={
                number: i+1
            }
        }   
        setDiasCalendario(datas)
    }
   
    return(
        <div className="dia">{diasCalendario?
            diasCalendario.map((item,i)=> <div key={i} className="diasCalendarios">{item.number}</div>)
            :
            <>para</>        
        }</div>
    )


}