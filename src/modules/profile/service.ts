import { User } from "firebase/auth";
import { Profile } from "./model";
import { ProfileRepository } from "./repository";

export class ProfileService {

    repository: ProfileRepository;

    constructor(repository = new ProfileRepository()) {
        this.repository = repository;
    }

    public async getProfile(user: User): Promise<Profile | null> {
        const profile = await this.repository.getProfileByUserUid(user.uid);
        return profile;
    }

    public async setProfile(user: User, profile: Profile): Promise<void> {
        await this.repository.setProfileByUserUid(user.uid, profile);
    }

}