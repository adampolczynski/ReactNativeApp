import { IUser } from "./IUser";
import { IInterest } from "./IInterest";

export interface IState {
    isLoggedIn: boolean;
    locationAccess: boolean;
    modalOpts: {
        visible: boolean;
        name: string;
    }
    authToken?: string;
    userData?: IUser;
    interests?: IInterest[];
}