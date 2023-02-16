export interface citie{
    id: number
    name: string,
    latitude: number,
    longitude: number,
    admin1: string
}


export interface dataCities{
    results: citie[]
}