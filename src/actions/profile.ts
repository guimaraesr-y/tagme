'use server';

import { auth } from "@/lib/firebase-admin";
import { ProfileInterface } from "@/modules/profile/interfaces";
import { Profile } from "@/modules/profile/model";
import { ProfileService } from "@/modules/profile/service";

const profileService = new ProfileService();

export const getProfile = async (idToken: string): Promise<ProfileInterface | null> => {
    const dataUser = await auth.verifyIdToken(idToken);
    const user = await auth.getUser(dataUser.uid);
    const profile = await profileService.getProfile(user);
    return profile?.toObject() || null;
}

export const setProfile = async (idToken: string, data: ProfileInterface) => {
    const dataUser = await auth.verifyIdToken(idToken);
    const user = await auth.getUser(dataUser.uid);
    await profileService.setProfile(user, Profile.fromObject(data));
};
