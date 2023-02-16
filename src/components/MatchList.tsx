import { List, ListItem } from "@chakra-ui/layout"

export const MatchList = ({listCities, setCity}: {listCities: Array<{name: string, lat: number, lng: number}>, setCity: Function}) => {
  
  return (
    <List style={{listStyle: 'none'}} m={0} borderRadius={5} position='absolute' w={'100%'} background='#ffffff'>
        {

        listCities.length > 0 && listCities.map((citie, index) => {
          return <ListItem  key={index} p='18px' _hover={{background:'#dddddd'}} onClick={() => setCity(citie)} >{citie.name}</ListItem>
        }) 

        } 
    </List>
  )
}
