import { doc, getDoc, setDoc } from "firebase/firestore";
import { Profile } from "./model";
import { db } from "@/lib/firebase";

export class ProfileRepository {

    async getProfileByUserUid(userUid: string): Promise<Profile | null> {
        const docRef = doc(db, 'users', userUid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return new Profile(data.userUid, data.fcmToken);
        } else {
            return null;
        }
    }


    async setProfileByUserUid(userUid: string, profile: Profile): Promise<void> {
        const docRef = doc(db, 'users', userUid);
        await setDoc(docRef, {
            userUid: profile.userUid,
            fcmToken: profile.fcmToken,
        });
    }
}

