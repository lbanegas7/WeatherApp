import { useState } from 'react'
import { Box } from "@chakra-ui/react"
import { CitiesGrid } from "../components/CitiesGrid"
import { InputSearchCity } from "../components/InputSearchCity"
import { WeatherMessage } from "../components/WeatherMessage"

export const Weather = () => {

  const [citie, setCitie] = useState<{name:string, lat:number, lng: number}>()

  return (
    <Box p={10} w='100%' h='100vh' >
    <InputSearchCity setSearchWeather={setCitie} /> 
    {!!citie ? <CitiesGrid dataCitie={citie}/> : <WeatherMessage />  } 
    </Box>
  )
}
