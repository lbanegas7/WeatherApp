export interface citie{
    id: number
    name: string,
    latitude: number,
    longitude: number,
    admin1: string
}


export interface dataCities{
    current_weather: {temperature: number},
    daily: {
        temperature_2m_min: [number],
        temperature_2m_max: [number],
        time: [string]    
    }
}