import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex } from "@chakra-ui/layout"
import React, { useState, useEffect } from "react"
import { getMatchCities } from "../helper/getMatchCities"
import { citie } from "../models/citie"
import { MatchList } from "./MatchList"

export const InputSearchCity = ({setSearchWeather}:{setSearchWeather: Function}) => {

  const [nameCity, setNameCity] = useState('')
  const [citySelect, setCitySelect] = useState<{name:string, lat:number, lng: number}>()
  
  const [matchsCities, setMatchsCities] = useState<Array<{name:string, lat: number, lng: number}>>([])

  const handleChangeCity = (event:React.FormEvent<HTMLInputElement>) => {
    setNameCity(event.currentTarget.value)
    searchCoincidences();
  }
  
  const searchCoincidences = () => {
    getMatchCities(nameCity).then((data:Array<citie>)=>{
      const citiesMatchsClear = data.map(city => {
        return { name: city.name +', '+ city.admin1, lat: city.latitude, lng: city.longitude }
      })
      setMatchsCities(citiesMatchsClear)
    })
  }
  
  const searchCitySelect = () => {
    setSearchWeather(citySelect);
    setNameCity('');
    setCitySelect(undefined);
  }

  useEffect(() => {
    if(!!citySelect){
      setNameCity(citySelect.name);
      setMatchsCities([])
    } 
  }, [citySelect])
  
  return (
    <Box w='100%' p={4} mb={10} >
      <Flex justifyContent='center'>
        <Box position='relative' w='65%' >
          <Input placeholder='Buscar ciudad' size='md' value={nameCity}  onChange={handleChangeCity} /> 
          <MatchList listCities={matchsCities} setCity={setCitySelect} />
        </Box>
        <Button colorScheme='blue' ml={3} onClick={searchCitySelect}>Buscar</Button>
      </Flex>
    </Box> 
  )
}
