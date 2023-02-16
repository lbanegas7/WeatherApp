import axios from 'axios';

export const getMatchCities = async (nameCitie: string) => {
    const dataMatchs = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${nameCitie}`)
    if(!!dataMatchs.data.results){
        return dataMatchs.data.results.slice(0,5)    
    }
    return []

    
}
