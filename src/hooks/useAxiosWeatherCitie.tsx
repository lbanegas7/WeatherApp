import axios from "axios";
import { useEffect, useState } from "react";
import { dataCities } from "../models/citie";


export const useAxiosWeatherCitie = (lat:number, lng: number) => {
    const [state, setState] = useState({ data: {}, loading: true });

    useEffect(() => {
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`).then((res: dataCities | any) => {
          setTimeout(() => {
            setState({ data: res.data, loading: false });
          }, 1000);
      });
    }, []);
  
    return state;
}
