import { ListingType } from "types"

interface IObject {[key: string]: any}

export const realtorFormFields: IObject = {email: {type: 'email'}, phone: {type: 'tel'}}
export const listingFormFields: IObject = {
    price: {type: 'number'},
    type: {type: 'dropdown', values: ListingType},
    isAvailable: {type: 'toggle'},
    isRental: {type: 'toggle'},
    gallery: {type: 'media'},
    assigned: {type: 'dropdown', values: ListingType},
    location: {type: 'location'},
    features: { type: 'object' },
    beds: {type: 'number'},
    baths: {type: 'number'},
}