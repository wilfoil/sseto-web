import { initializeApp } from 'firebase/app';
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { FIREBASE_CONFIG } from 'utils/constants';

// Initialize Firebase
export const app = initializeApp(FIREBASE_CONFIG);
// const analytics = getAnalytics(app);
const firestoreDB = getFirestore(app);
const firebaseStorage = getStorage(app)
enableIndexedDbPersistence(firestoreDB)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          console.log(err);
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          console.log(err);
      }
});

export { firestoreDB, firebaseStorage };