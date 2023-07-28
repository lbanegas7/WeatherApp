import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Box, Flex } from "@chakra-ui/layout"
import { useState, useEffect, FormEvent } from "react"
import { getMatchCities } from "../helper/getMatchCities"
import { citie } from "../models/citie"
import { MatchList } from "./MatchList"
import { FaSistrix } from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { getCities } from "../store/slices/autocomplete/thunks"

export const InputSearchCity = ({setSearchWeather}:{setSearchWeather: Function}) => {

  const dispatch = useDispatch()
  const [nameCity, setNameCity] = useState('')
  const [citySelect, setCitySelect] = useState<{name:string, lat:number, lng: number}>()
  
  const [matchsCities, setMatchsCities] = useState<Array<{name:string, lat: number, lng: number}>>([])

  const handleChangeCity = (event: FormEvent<HTMLInputElement>) => {
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
  
  useEffect(() => {
    dispatch(getCities('hola'))
  
  }, [])
  
  return (
    <Box w='100%' p={4} mb={10} >
      <Flex justifyContent='center'>
        <Box position='relative' w='65%' >
        <InputGroup>
          <InputRightElement
            pointerEvents='none'
            children={<FaSistrix fontSize='1.4em' fill="RGBA(0, 0, 0, 0.36)"/>}
          />
          <Input placeholder='Buscar ciudad' textTransform='capitalize' size='md' value={nameCity}  onChange={handleChangeCity} /> 
        </InputGroup>
          <MatchList listCities={matchsCities} setCity={setCitySelect} />
        </Box>
      </Flex>
    </Box> 
  )
}
