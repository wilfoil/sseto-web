import { where, orderBy, limit, WhereFilterOp, OrderByDirection, collection, QueryConstraint, query, getDocs } from '@firebase/firestore';
import { firestoreDB } from './firebase';

export const filter = (fieldPath: string, filterOp: WhereFilterOp, value: any ) => where(fieldPath, filterOp, value);
export const order = (fieldPath: string, direction: OrderByDirection) => orderBy(fieldPath, direction)
export const setLimit = (num: number) => limit(num)
export const filterCollection = async(collectionPath: string, filters: QueryConstraint[]) => {
    const listingRef = collection(firestoreDB, collectionPath);
    const q = query(listingRef, ...filters);
    return getDocs(q);
}