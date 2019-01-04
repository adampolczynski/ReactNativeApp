import { IUser } from "./IUser";

export interface IState {
    isLoggedIn: boolean;
    userData: IUser | any;
}