import React, { createContext } from "react";
import { useContext, useState } from "react";

export const  CalendarioContext = createContext({});

export function CalendarioProvider({children}){
    const [dias, setDias] = useState()
    const [comentarios, setComentarios] =  useState('')
    const [time, setTime] = useState()
    const relogio = () => {
    const watch = new Date
    const dayMonth = watch.getDate();
    const month = watch.getMonth();
    const year = watch.getFullYear();
    const hour = watch.getHours();
    const minute = watch.getMinutes();
    const seconds = watch.getSeconds();
    const day = watch.getDay();
    const totDays = new Date(watch.getFullYear(), watch.getMonth() + 1, 0)

    return {
      day: diaSemana(day),
      hour: ajusta(hour),
      minute: ajusta(minute),
      seconds: ajusta(seconds),
      month: month,
      year: year,
      totDays: totDays
    }
  }

  const diaSemana = (day) => {
    const semana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    for (let i = 0; i < semana.length; i++) {
      if (i == day) {
        const newSemana = semana[i]
        return newSemana
      }
    }
  }

  const ajusta = (time) => {
    const caractere = String(time)
    const isValid = caractere.length === 2;

    if (isValid) return time;
    const newCaractere = caractere.padStart(2, 0)
    return newCaractere
  }

    return(
        <CalendarioContext.Provider value={{dias, setDias, comentarios, setComentarios, time, setTime, relogio}}>
            {children}
        </CalendarioContext.Provider>
    )

}