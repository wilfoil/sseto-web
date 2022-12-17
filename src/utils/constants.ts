export const FIREBASE_CONFIG = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

export const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY || '';

export const COLLECTIONS = {
    LISTING: 'listings',
    REALTOR: 'realtors'
};

export const MAX_PRICES = { house: 10000000, apartment: 10000000, land: 100000000 }
