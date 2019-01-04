import { Moment } from 'moment'; 

export interface IUser {
    id: number;
    fbId: string;
    name: string;
    surname: string;
    password: string;
    email: string;
    gender: number;
    photo: string;
    fbPhoto: string;
    activated: boolean;
    premium: boolean;
    interests: any[];// IInterest[];
    localizations: any[]; // ILocalizations[];
    createdAt: string | Moment;
    updatedAt: string | Moment;
    deletedAt: string | Moment;
}