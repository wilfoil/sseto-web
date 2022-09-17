import { ListingType } from './enums'

export interface IRealtor {
    name: string
    phone: string
    email: string
    photoUrl: string
}

export interface IListing {
    title: string
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