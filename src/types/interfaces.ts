import { ListingType } from './enums'

export interface IRealtor {
    name: string
    phone: number
    email: string
    photoUrl: string
}

export interface IListing {
    name: string
    location: number[]
    overview: string
    price: number
    isAvailable: boolean
    isRental: boolean
    type: ListingType
    gallery: string[]
    assigned: IRealtor
}

export interface IListingUpdate {
    name?: string
    location?: number[]
    overview?: string
    price?: number
    isAvailable?: boolean
    isRental?: boolean
    type?: ListingType
    gallery?: string[]
    assigned?: IRealtor
}