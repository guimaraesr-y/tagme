'use server';

import { auth } from "@/lib/firebase-admin";
import { BusinessInterface } from "@/modules/business/interfaces";
import { Business } from "@/modules/business/model";
import { BusinessService } from "@/modules/business/service";

const businessService = new BusinessService();

export const getBusiness = async (idToken: string): Promise<BusinessInterface | null> => {
    const dataUser = await auth.verifyIdToken(idToken);
    const user = await auth.getUser(dataUser.uid);
    const business = await businessService.getBusiness(user);
    return business?.toObject() || null;
}

export const setBusiness = async (idToken: string, data: BusinessInterface) => {
    const dataUser = await auth.verifyIdToken(idToken);
    const user = await auth.getUser(dataUser.uid);
    await businessService.setBusiness(user, Business.fromObject(data));
};
