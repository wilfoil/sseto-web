import { addDoc, collection, getDoc, getDocs, updateDoc, doc, deleteDoc, query, QueryConstraint } from '@firebase/firestore';
import { IListing, IListingUpdate, IRealtor } from 'types/interfaces';
import { COLLECTIONS } from 'utils/constants';
import { firestoreDB } from './firebase';
import { filter, filterCollection, setLimit } from './utils';

export const addRealtor = async (newRealtor: IRealtor) => {
    try {
        const docRef = await addDoc(collection(firestoreDB, COLLECTIONS.REALTOR), newRealtor);
        const data = (await getDoc(docRef)).data();
        return { message: 'Realtor added successfully', success: true, data };
    } catch (error) {
        console.log(error);
    }
};

export const editRealtor = async (realtorId: string, updates: IListingUpdate) => {
    try {
        await updateDoc<IListingUpdate>(doc(firestoreDB, COLLECTIONS.REALTOR, realtorId), updates);
        return { message: 'Changes saved', success: true };
    } catch (error) {
        console.log(error);
    }
};

export const deleteRealtor = async (realtorId: string) => {
    try {
        await deleteDoc(doc(firestoreDB, COLLECTIONS.REALTOR, realtorId));
        return { message: 'Realtor deleted', success: true };
    } catch (error) {
        console.log(error);
    }
};

export const getRealtor = async (name: string) => {
    try {
        const filters = [filter('name', '==', name), setLimit(5)]
        const result: any[] = []
        const querySnapshot = await filterCollection(COLLECTIONS.REALTOR, filters)
        querySnapshot.forEach((docRef) => {
            result.push(docRef.data());
        });
        return {success: true, result};
    } catch (error) {
        console.log(error);
    }
};