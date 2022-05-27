import { addDoc, collection, getDoc, updateDoc, doc, deleteDoc, QueryConstraint } from '@firebase/firestore';
import { IListing, IListingUpdate } from 'types/interfaces';
import { COLLECTIONS } from 'utils/constants';
import { firestoreDB } from './firebase';
import { filterCollection } from './utils';

export const addListing = async (newListing: IListing) => {
    try {
        const docRef = await addDoc(collection(firestoreDB, COLLECTIONS.LISTING), newListing);
        const data = (await getDoc(docRef)).data();
        return { message: 'Listing saved successfully', success: true, data };
    } catch (error) {
        console.log(error);
    }
};

export const editListing = async (listingId: string, updates: IListingUpdate) => {
    try {
        await updateDoc<IListingUpdate>(doc(firestoreDB, COLLECTIONS.LISTING, listingId), updates);
        return { message: 'Changes saved', success: true };
    } catch (error) {
        console.log(error);
    }
};

export const deleteListing = async (listingId: string) => {
    try {
        await deleteDoc(doc(firestoreDB, COLLECTIONS.LISTING, listingId));
        return { message: 'Listing deleted', success: true };
    } catch (error) {
        console.log(error);
    }
};

export const getListing = async (listingId: string) => {
    try {
        const docRef = doc(firestoreDB, COLLECTIONS.LISTING, listingId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) return { message: 'Listing not found', success: false }
        return { success: true, data: docSnap.data() };
    } catch (error) {
        console.log(error);
    }
};

export const getBatch = async (filters: QueryConstraint[]) => {
    try {
        const result: any[] = []
        const querySnapshot = await filterCollection(COLLECTIONS.LISTING, filters);
        querySnapshot.forEach((docRef) => {
            result.push(docRef.data());
        });
        return {success: true, result};
    } catch (error) {
        console.log(error);
    }
};
