import { IUser } from "./IUser";
import { IInterest } from "./IInterest";
import { Moment } from "moment";

export interface ILocalization {
    id: number;
    user: IUser;
    interest: IInterest;
    type: string;
    lat: number;
    long: number;

    createdAt: string | Moment;
    updatedAt: string | Moment;
    deletedAt: string | Moment;
}