import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Business } from "./model";
import { db } from "@/lib/firebase";

export class BusinessRepository {

    private collectionName = "business";

    async getBusinessByUserUid(userUid: string): Promise<Business | null> {
        const businessRef = collection(db, this.collectionName);
        const q = query(businessRef, where('userUid', '==', userUid));
    
        const querySnapshot = await getDocs(q);
        if(querySnapshot.empty) return null;

        const docRef = querySnapshot.docs[0].data();
        console.log(querySnapshot.docs[0].id);
        return Business.fromObject({
            id: querySnapshot.docs[0].id,
            ...docRef,
        });
    }

    async setBusinessByUserUid(userUid: string, business: Business): Promise<void> {
        const businessRef = collection(db, this.collectionName);
        const q = query(businessRef, where('userUid', '==', userUid));
    
        const querySnapshot = await getDocs(q);
        delete(business.id);
    
        if (querySnapshot.empty) { // create
            await addDoc(businessRef, {
                ...business.sanitize(),
                userUid: userUid,
            });
        } else { // set
            const docRef = doc(db, this.collectionName, querySnapshot.docs[0].id);
            await setDoc(docRef, {
                ...business.sanitize(),
                userUid: userUid,
            });
        }
    }

}
