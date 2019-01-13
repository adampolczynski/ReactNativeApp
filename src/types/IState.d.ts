import { IUser } from "./IUser";

export interface IState {
    isLoggedIn: boolean;
    modalOpts: {
        visible: boolean;
        name: string;
    }
    userData: IUser | any;
}