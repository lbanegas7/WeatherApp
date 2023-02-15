import { List, ListItem } from "@chakra-ui/layout"

export const MatchList = ({listCities}: {listCities: string[]}) => {

  return (
    <List style={{listStyle: 'none'}} m={0} borderRadius={5} position='absolute' w={'100%'} background='#ffffff'>
        <ListItem p='18px' _hover={{background:'#dddddd'}}>Berlin, Land Berlin </ListItem>
    </List>
  )
}
