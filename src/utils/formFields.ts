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
export const searchFilterFields: IObject = {
    type: {type: 'multiselect', values: ListingType},
    price: {type: 'range'},
    beds: {type: 'number', minValue: 0, maxValue: 10 },
    baths: {type: 'number', minValue: 0, maxValue: 10 },
    features: {type: 'features', values: {
        newlyBuilt: false,
        furnished: false,
        gated: true,
        newlyBuiltx: false,
        furnishedx: false,
        gatedx: true,
    }},
    plotSize: {type: 'plotSize', values: {'50 x 50': 2500, '50 x 100': 5000, '100 x 100': 10000, 'Acre': 43560}},
    location: {type: 'dropdown', values: []},
    area: {type: 'number'},
}