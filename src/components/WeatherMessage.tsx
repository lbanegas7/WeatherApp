import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { IconDayCloud } from './IconDayCloud'
import { IconDayCloudy } from './IconDayCloudy'
import { IconDaySunny } from './IconDaySunny'

export const WeatherMessage = () => {
  return (
    <Box w='100%' h='80%' display='flex' justifyContent='center' alignItems='center'>
        <Box>
            <Text fontSize='xl'><b>Bienvenido</b>, busca toda la información relevante del Clima de todas las ciudades del mundo.</Text>
            <Box display='flex' justifyContent='center'>
                <SimpleGrid spacing={6} columns={3}>
                    <IconDaySunny w='5em' h='5em' /> 
                    <IconDayCloud w='5em' h='5em' />
                    <IconDayCloudy w='5em' h='5em' />
                </SimpleGrid>
            </Box>
        </Box>
    </Box>
  )
}
