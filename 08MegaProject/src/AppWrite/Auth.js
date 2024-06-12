import conf from "../conf/conf";
import { Client,Account,ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }
}

const authService = new AuthService()

export default AuthService;