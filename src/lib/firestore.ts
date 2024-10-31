import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const addUserData = async (userId: string, data: object) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), { userId, ...data });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getUserData = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
