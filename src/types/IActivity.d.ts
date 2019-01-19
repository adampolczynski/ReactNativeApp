import { Moment } from "moment";

export interface IActivity {
    id: number;
    name: string;
    category: string;
    
    createdAt: string | Moment;
    updatedAt: string | Moment;
    deletedAt: string | Moment;
}