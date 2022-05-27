import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage';
import { BucketFolders } from 'types/enums';

const STORAGE = getStorage();

export const uploadFile = async (file: File, folder: BucketFolders = BucketFolders.listings) => {
    const path = `${folder}/${file.name}-s-${Date.now()}`;
    const storageRef = ref(STORAGE, path);
    try {
        const uploadResult = await uploadBytes(storageRef, file);
        return uploadResult.ref.fullPath
    } catch (error) {
        console.log(error);
    }

}

export const deleteFiles = async (paths: string[]) => {
    try {
        const deletePromises = paths.map(path => async () => {
            const storageRef = ref(STORAGE, path);
            deleteObject(storageRef).then(() => {
                console.log(`Deleted -- ${path}`);
            }).catch((error) => {
                console.log(error);
            });
        })
        await Promise.all(deletePromises)
    } catch (error) {
        console.log(error);
    }
}