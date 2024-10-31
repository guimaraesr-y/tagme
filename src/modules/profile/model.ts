export class Profile {
    
    userUid: string;
    fcmToken: string;

    constructor(userUid: string, fcmToken: string) {
        this.userUid = userUid;
        this.fcmToken = fcmToken;
    }

}