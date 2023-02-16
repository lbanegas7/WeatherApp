import { Box, SimpleGrid } from "@chakra-ui/react";
import { CitiesGridItem } from "./CitiesGridItem";
import { useEffect, useState } from 'react'
import { useAxiosWeatherCitie } from "../hooks/useAxiosWeatherCitie";

export const CitiesGrid = ({
  dataCitie,
}: {
  dataCitie: { name: string; lat: number; lng: number };
}) => {
  const days = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  const [citiesSearch, setCitiesSearch] = useState<Array<{name: string; lat: number; lng: number, temperature: number}>>([])

  const { data, loading } = useAxiosWeatherCitie(dataCitie.lat, dataCitie.lng);
    
    useEffect(() => {

        if(!!data){
            setCitiesSearch([...citiesSearch,{name: dataCitie.name.split(',')[0], lat:dataCitie.lat, lng: dataCitie.lng, temperature: data.current_weather.temperature } ])
            console.log(data.current_weather.temperature);
        }
    }, [data])
    
  
  return (
    <Box w='100%' height='auto'>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[3, 5, 10]}>
        {
        citiesSearch.map( (citie, index) => {
            return <CitiesGridItem {...citie} key={index} />
        })
        }
      </SimpleGrid>
    </Box>
  );
};
