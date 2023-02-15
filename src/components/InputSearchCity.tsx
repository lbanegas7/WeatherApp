import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Box, Flex, List, ListItem, OrderedList } from "@chakra-ui/layout"
import React, { useState } from "react"

export const InputSearchCity = () => {

  const [nameCity, setNameCity] = useState('')

  const handleChangeCity = (event:React.FormEvent<HTMLInputElement>) => setNameCity(event.currentTarget.value)


  return (
    <Box ml='15%' w='60%' p={4}  >
      <Flex>
      <Box position='relative' w='100%' >
        <Input placeholder='Buscar...' size='md' value={nameCity}  onChange={handleChangeCity} /> 
      </Box>
      <Button colorScheme='blue' ml={3}>Buscar</Button>
      </Flex>
    </Box> 

  )
}
