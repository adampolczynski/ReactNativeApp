import { USER_LOGIN, MODAL_VISIBLE, MODAL_NAME, USER_DATA, GLOBAL_INTERESTS, USER_INTERESTS, LOCATION_ACCESS } from "./acion-types";
import { IUserData } from "../types/IUserData";
import { IInterest } from "../types/IInterest";

export const loginAction = (payload: boolean) => { return { type: USER_LOGIN, payload }};
export const modalVisibleAction = (payload: boolean) => { return { type: MODAL_VISIBLE, payload }}; 
export const modalNameAction = (payload: string) => { return { type: MODAL_NAME, payload }}; 
export const userDataAction = (payload: IUserData) => { return { type: USER_DATA, payload }};
export const globalInterestsAction = (payload: IInterest[]) => { return { type: GLOBAL_INTERESTS, payload }};
export const userInterestsAction = (payload: IInterest[]) => { return { type: USER_INTERESTS, payload }};
export const locationAccessAction = (payload: boolean) => { return { type: LOCATION_ACCESS, payload }}