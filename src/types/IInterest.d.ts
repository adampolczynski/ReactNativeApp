import { IUser } from "./IUser";
import { IActivity } from "./IActivity";
import { Moment } from "moment";

export interface IInterest {
    id: number;
    user: IUser;
    activity: IActivity;
    shared: boolean;
    calendar: boolean;
    hours: string[];
    createdAt: string | Moment;
    updatedAt: string | Moment;
    deletedAt: string | Moment;
}