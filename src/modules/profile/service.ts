import { Profile } from "./model";
import { ProfileRepository } from "./repository";
import { UserRecord } from "firebase-admin/auth";

export class ProfileService {

    repository: ProfileRepository;

    constructor(repository = new ProfileRepository()) {
        this.repository = repository;
    }

    public async getProfile(user: UserRecord): Promise<Profile | null> {
        const profile = await this.repository.getProfileByUserUid(user.uid);
        return profile;
    }

    public async setProfile(user: UserRecord, profile: Profile): Promise<void> {
        await this.repository.setProfileByUserUid(user.uid, profile);
    }

}
