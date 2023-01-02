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
    type: ListingType
    isRental: boolean
    gallery: string[]
    assigned?: IRealtor
    features: { [key: string]: boolean }
    plotSize?: number
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

export interface IFormikFilterValues {
    isRental: boolean
    type: ListingType
    location?: string,
    price: number[]
    beds?: number
    baths?: number
    features: { [key: string]: boolean }
    plotSize: number[]
  }