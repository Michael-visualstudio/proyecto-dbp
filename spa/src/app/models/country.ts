export interface Country {
    name: string,
    country: string,
    timezone: string,
    population: number,
    location: {
        longitude: number,
        latitude: number
    },
    _id?: string | undefined
}