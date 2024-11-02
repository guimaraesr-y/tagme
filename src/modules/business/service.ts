import { Business } from "./model";
import { BusinessRepository } from "./repository";
import { UserRecord } from "firebase-admin/auth";

export class BusinessService {

    repository: BusinessRepository;

    constructor(repository = new BusinessRepository()) {
        this.repository = repository;
    }

    public async getBusiness(user: UserRecord): Promise<Business | null> {
        const business = await this.repository.getBusinessByUserUid(user.uid);
        console.log(business)
        return business;
    }

    public async setBusiness(user: UserRecord, business: Business): Promise<void> {
        await this.repository.setBusinessByUserUid(user.uid, business);
    }

}
