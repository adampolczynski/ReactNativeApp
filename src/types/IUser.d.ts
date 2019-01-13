import { Moment } from 'moment'; 

export interface IUser {
    id: number;
    fbId: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    about: string;
    gender: number;
    photo: string;
    fbPhoto: string;
    points: number;
    activated: boolean;
    premium: boolean;
    interests: any[];// IInterest[];
    localizations: any[]; // ILocalizations[];
    createdAt: string | Moment;
    updatedAt: string | Moment;
    deletedAt: string | Moment;
}